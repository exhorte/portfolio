import type { ProjectStatus } from "@/lib/projects";
import { statusLabel } from "@/lib/projects";

const statusStyle: Record<ProjectStatus, string> = {
  completed: "border-foreground/25 bg-foreground/10 text-foreground",
  demo: "border-foreground/25 bg-foreground/10 text-foreground",
  development: "border-foreground/20 bg-foreground/[0.06] text-foreground/80",
  prototype: "border-foreground/20 bg-foreground/[0.06] text-foreground/80",
  experimental: "border-border bg-muted text-muted-foreground",
};

export function StatusBadge({ status, className = "" }: { status: ProjectStatus; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyle[status]} ${className}`}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
      {statusLabel[status]}
    </span>
  );
}
