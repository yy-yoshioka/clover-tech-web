import { services } from "../data/services";

const iconMap = {
  product: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 12h16M4 6h10M4 18h7" strokeLinecap="round" />
      <rect x="14" y="4" width="6" height="16" rx="2" />
    </svg>
  ),
  ops: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M10 7h7M7 10v7M14 17h3M17 14v3" strokeLinecap="round" />
    </svg>
  ),
  data: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 19V5M10 19V9M16 19V7M22 19V11" strokeLinecap="round" />
      <path d="M3 19h19" strokeLinecap="round" />
    </svg>
  ),
  growth: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 16l6-6 4 4 6-7" strokeLinecap="round" />
      <path d="M18 7h4v4" strokeLinecap="round" />
    </svg>
  ),
};

const iconStyles: Record<string, string> = {
  product: "bg-emerald-100 text-emerald-700",
  ops: "bg-teal-100 text-teal-700",
  data: "bg-sky-100 text-sky-700",
  growth: "bg-lime-100 text-lime-700",
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[var(--color-surface)] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_0%,_rgba(14,165,233,0.12)_0%,_rgba(14,165,233,0)_65%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            Services
          </span>
          <h2 className="text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl font-[var(--font-display)]">
            展開しているサービス
          </h2>
          <p className="max-w-2xl text-base text-[var(--color-muted)]">
            立ち上げ期から成長期まで、フェーズに合わせた支援メニューを用意しています。
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconStyles[service.icon]}`}
                >
                  {iconMap[service.icon]}
                </div>
                <span className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {service.tag}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
