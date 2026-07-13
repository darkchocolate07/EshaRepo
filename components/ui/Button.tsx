import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-couch-orange text-white hover:bg-couch-orange/90 shadow-md hover:shadow-lg",
  secondary:
    "bg-perk-purple text-white hover:bg-perk-purple/90 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-perk-purple text-perk-purple hover:bg-perk-purple/10",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
