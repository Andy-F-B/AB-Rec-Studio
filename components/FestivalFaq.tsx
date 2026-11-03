export type FaqItem = { q: string; a: string };

export default function FestivalFaq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border border-line">
      {items.map((item) => (
        <details key={item.q} className="group px-4 py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            {item.q}
            <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
