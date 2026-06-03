export type Category = {
  _id: string;
  title: string;
  slug: string;
};

export type Author = {
  _id: string;
  name: string;
  avatar: string;
  avatarUrl: string;
};

export type Post = {
  _id: string;
  id: string;
  title: string;
  slug: string;
  category: Category;
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl: string;
  readingTime: number;
  tags: string[];
  author: Author;
  related: unknown[];
  comments: unknown[];
  commentsCount: number;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  createdAt: string;
  updatedAt: string;
};
