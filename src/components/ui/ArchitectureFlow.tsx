import { ArrowRight } from "lucide-react";

export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-center lg:gap-3">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 lg:gap-3">
          <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={16} className="shrink-0 rotate-90 text-muted-foreground lg:rotate-0" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
