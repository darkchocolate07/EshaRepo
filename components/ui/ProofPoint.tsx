type ProofPointProps = {
  value: string;
  label: string;
};

export function ProofPoint({ value, label }: ProofPointProps) {
  return (
    <div className="coaster flex h-32 w-32 flex-col items-center justify-center p-4 text-center md:h-36 md:w-36">
      <span className="font-display text-2xl font-extrabold text-couch-orange md:text-3xl">
        {value}
      </span>
      <span className="mt-1 text-xs leading-tight text-espresso/70 md:text-sm">
        {label}
      </span>
    </div>
  );
}
