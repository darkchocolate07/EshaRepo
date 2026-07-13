type FriendsTitleProps = {
  children: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-2xl md:text-3xl",
  lg: "text-3xl md:text-4xl",
  xl: "text-4xl md:text-5xl lg:text-6xl",
};

export function FriendsTitle({
  children,
  as: Tag = "h2",
  size = "md",
  className = "",
}: FriendsTitleProps) {
  return (
    <Tag className={`friends-title ${sizeClasses[size]} ${className}`}>
      {children}
    </Tag>
  );
}

export function FriendsDots() {
  return (
    <span className="friends-dots inline-flex items-center gap-1.5 px-2" aria-hidden="true">
      <span className="h-2 w-2 rounded-full bg-brick-muted" />
      <span className="h-2 w-2 rounded-full bg-friends-yellow" />
      <span className="h-2 w-2 rounded-full bg-friends-blue" />
      <span className="h-2 w-2 rounded-full bg-brick-muted" />
      <span className="h-2 w-2 rounded-full bg-friends-yellow" />
      <span className="h-2 w-2 rounded-full bg-friends-blue" />
    </span>
  );
}
