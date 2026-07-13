import Image from "next/image";
import type { ReactNode } from "react";

type DoorFrameProps = {
  children?: ReactNode;
  className?: string;
  priority?: boolean;
  src?: string;
  alt?: string;
};

export function DoorFrame({
  children,
  className = "",
  priority = false,
  src,
  alt = "",
}: DoorFrameProps) {
  if (src) {
    return (
      <div className={`door-frame mx-auto w-full ${className}`}>
        <div className="door-frame-inner relative aspect-[3/4] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center"
            priority={priority}
            sizes="(max-width: 768px) 280px, 360px"
          />
        </div>
      </div>
    );
  }

  return <div className={`door-frame ${className}`}>{children}</div>;
}

export function CouchDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-8" aria-hidden="true">
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-couch-orange/40" />
      <Image src="/svg/couch.svg" alt="" width={180} height={54} className="opacity-80" />
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-couch-orange/40" />
    </div>
  );
}
