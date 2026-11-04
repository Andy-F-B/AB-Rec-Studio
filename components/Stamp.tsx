/** Slightly crooked red rubber stamp. */
export default function Stamp({ className = "" }: { className?: string }) {
  return (
    <span className={`stamp ${className}`}>
      <span className="block text-xl tablet:text-2xl">Free entry</span>
      <span className="mt-1 block text-[0.7rem] tracking-[0.2em] normal-case">(of course)</span>
    </span>
  );
}
