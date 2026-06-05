import { IoChatbubbleOutline, IoHeartOutline } from "react-icons/io5";

type propsType = {
  commentsCount: number;
  likesCount: number;
};

function PostEngagement({ commentsCount, likesCount }: propsType) {
  return (
    <div className="flex items-center gap-3 text-xs text-secondary-500">
      <span className="inline-flex items-center gap-1">
        <IoChatbubbleOutline className="h-4 w-4" /> {commentsCount}
      </span>
      <span className="inline-flex items-center gap-1">
        <IoHeartOutline className="h-4 w-4" /> {likesCount}
      </span>
    </div>
  );
}
export default PostEngagement;
