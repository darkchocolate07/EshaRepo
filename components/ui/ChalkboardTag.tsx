type ChalkboardTagProps = {
  children: string;
};

export function ChalkboardTag({ children }: ChalkboardTagProps) {
  return (
    <span className="rounded border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-chalk-white/90">
      {children}
    </span>
  );
}
