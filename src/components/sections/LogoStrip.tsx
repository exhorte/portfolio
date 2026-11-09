import { stackPrimary } from "@/lib/data";

const items = stackPrimary.slice(0, 10);
const loop = [...items, ...items];

export function LogoStrip() {
  return (
    <div className="border-y border-ink-border bg-ink py-10 text-ink-foreground">
      <div className="mx-auto mb-6 max-w-7xl px-6 lg:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
          Core stack
        </span>
      </div>
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-14">
          {loop.map((item, i) => (
            <div key={`${item.name}-${i}`} className="flex shrink-0 items-center gap-3 text-ink-foreground/50 transition-colors hover:text-ink-foreground">
              <item.icon size={22} />
              <span className="font-mono text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
