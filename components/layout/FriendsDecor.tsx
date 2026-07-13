import Image from "next/image";

type FriendsDecorProps = {
  variant?: "hero" | "section" | "cafe";
};

export function FriendsDecor({ variant = "section" }: FriendsDecorProps) {
  if (variant === "hero") {
    return (
      <>
        <div className="friends-hero-bg" aria-hidden="true" />
        <div className="pointer-events-none absolute right-4 bottom-8 hidden opacity-20 lg:block" aria-hidden="true">
          <Image src="/images/theme/coffee-cup.jpg" alt="" width={120} height={120} className="rounded-full object-cover shadow-lg" />
        </div>
      </>
    );
  }

  if (variant === "cafe") {
    return (
      <div className="friends-cafe-bg" aria-hidden="true">
        <Image
          src="/images/theme/coffee-shop.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    );
  }

  return <div className="friends-brick-accent" aria-hidden="true" />;
}
