import Image from "next/image";

type propsType = {
  src: string;
  width: number;
  height: number;
};

function Avatar({ src, width = 24, height = 24 }: propsType) {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={height}
      className="rounded-full ring-1 ring-secondary-300 ml-2"
      alt={src}
    />
  );
}
export default Avatar;
