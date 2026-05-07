export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle ? <p className="text-slate-600 max-w-3xl">{subtitle}</p> : null}
    </div>
  );
}
