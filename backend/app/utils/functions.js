const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const JWT = require("jsonwebtoken");
const { UserModel } = require("../models/user");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const { intervalToDuration } = require("date-fns");

function deleteInvalidPropertyInObject(data = {}, blackListFields = []) {
  // let nullishData = ["", " ", "0", 0, null, undefined];
  let nullishData = ["", " ", null, undefined];
  Object.keys(data).forEach((key) => {
    if (blackListFields.includes(key)) delete data[key];
    if (typeof data[key] == "string") data[key] = data[key].trim();
    if (Array.isArray(data[key]) && data[key].length > 0)
      data[key] = data[key].map((item) => item.trim());
    if (Array.isArray(data[key]) && data[key].length == 0) delete data[key];
    if (nullishData.includes(data[key])) delete data[key];
  });
}
function copyObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function checkEmail(email) {
  return { isEmail: emailValidator.validate(email), email };
}

function formatNumber(n) {
  return n.toString();
}

function generateToken(user, expiresIn, secret) {
  return new Promise((resolve, reject) => {
    const payload = {
      _id: user._id,
    };

    const options = {
      expiresIn,
    };

    JWT.sign(
      payload,
      secret || process.env.TOKEN_SECRET_KEY,
      options,
      (err, token) => {
        if (err) reject(createError.InternalServerError("Server error"));
        resolve(token);
      },
    );
  });
}

async function setAccessToken(res, user) {
  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 1, // would expire after 1 days
    httpOnly: true, // The cookie only accessible by the web server
    signed: true, // Indicates if the cookie should be signed
    sameSite: "Lax",
    secure: process.env.NODE_ENV === "development" ? false : true,
    domain: process.env.DOMAIN,
  };
  res.cookie(
    "accessToken",
    await generateToken(user, "1d", process.env.ACCESS_TOKEN_SECRET_KEY),
    cookieOptions,
  );
}

async function setRefreshToken(res, user) {
  const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 365, // would expire after 1 year
    httpOnly: true, // The cookie only accessible by the web server
    signed: true, // Indicates if the cookie should be signed
    sameSite: "Lax",
    secure: process.env.NODE_ENV === "development" ? false : true,
    domain: process.env.DOMAIN,
  };
  res.cookie(
    "refreshToken",
    await generateToken(user, "1y", process.env.REFRESH_TOKEN_SECRET_KEY),
    cookieOptions,
  );
}

function VerifyRefreshToken(req) {
  const refreshToken = req.signedCookies["refreshToken"];
  if (!refreshToken) {
    throw createError.Unauthorized("Please sign in to your account.");
  }
  const token = cookieParser.signedCookie(
    refreshToken,
    process.env.COOKIE_PARSER_SECRET_KEY,
  );
  return new Promise((resolve, reject) => {
    JWT.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET_KEY,
      async (err, payload) => {
        try {
          if (err)
            reject(createError.Unauthorized("Please sign in to your account."));
          const { _id } = payload;
          const user = await UserModel.findById(_id, {
            password: 0,
            otp: 0,
            resetLink: 0,
          });
          if (!user) reject(createError.Unauthorized("Account not found"));
          return resolve(_id);
        } catch (error) {
          reject(createError.Unauthorized("Account not found"));
        }
      },
    );
  });
}

async function checkPostExist(id) {
  const { PostModel } = require("../models/post");
  if (!mongoose.isValidObjectId(id))
    throw createError.BadRequest("The provided post ID is invalid");
  const post = await PostModel.findById(id);
  if (!post) throw createError.NotFound("No post found");
  return post;
}
function calculateDateDuration(endTime) {
  const { years, months, days, hours, minutes, seconds } = intervalToDuration({
    start: new Date(),
    end: new Date(endTime),
  });

  if (years) return `${formatNumber(years)} years ago`;
  if (months) return `${formatNumber(months)} months ago`;
  if (days && days > 7)
    return `${formatNumber((days / 7).toFixed(0))} weeks ago`;
  if (days) return `${formatNumber(days)} days ago`;
  if (hours) return `${formatNumber(hours)} hours ago`;
  if (minutes) return `${formatNumber(minutes)} minutes ago`;
  if (seconds) return `${formatNumber(seconds)} seconds ago`;
}

module.exports = {
  calculateDateDuration,
  checkEmail,
  formatNumber,
  generateToken,
  setAccessToken,
  setRefreshToken,
  VerifyRefreshToken,
  copyObject,
  deleteInvalidPropertyInObject,
  checkPostExist,
};
