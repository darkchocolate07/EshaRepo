import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-sm font-bold tracking-wider text-couch-orange uppercase">
        The One Where the Page Is Missing
      </p>
      <h1 className="font-heading mt-2 text-4xl font-bold text-espresso">
        404
      </h1>
      <p className="mt-4 max-w-md text-espresso/70">
        This page doesn&apos;t exist — but your next technology strategy
        conversation could.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-couch-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-couch-orange/90"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
