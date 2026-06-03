import Avatar from "@/ui/Avatar";

function Author({ avatarUrl, name }: { avatarUrl: string; name: string }) {
  return (
    <div className="flex items-center gap-x-1">
      <Avatar src={avatarUrl} width={24} height={24} />
      <span className="text-xs text-secondary-500">{name}</span>
    </div>
  );
}
export default Author;
