export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[14rem_1fr] md:gap-12">
        <div>
          <h2 className="font-serif text-3xl font-semibold md:sticky md:top-24">{title}</h2>
          {intro && <p className="mt-2 max-w-xs text-sm text-muted">{intro}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function PlaceholderBadge() {
  return <span className="ml-2 rounded border border-gold px-1.5 py-0.5 align-middle text-xs font-medium text-ink">Placeholder</span>;
}
