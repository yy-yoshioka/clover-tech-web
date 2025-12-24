const highlights = [
  {
    label: "Strategy",
    title: "事業課題の言語化",
    description: "ゴールと手段を整理し、実現すべき体験を定義します。",
  },
  {
    label: "Design",
    title: "ユーザー起点の設計",
    description: "UI/UXと情報設計を整え、成果に直結する導線を作ります。",
  },
  {
    label: "Build",
    title: "拡張性の高い実装",
    description: "成長フェーズに合わせて拡張できる構成を用意します。",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,_rgba(16,185,129,0.18)_0%,_rgba(16,185,129,0)_70%)]" />
      <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700 animate-fade-in">
            Clover Tech
          </span>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl font-[var(--font-display)] animate-fade-up">
            事業の芽を育てる、テクノロジーパートナー。
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--color-muted)] animate-fade-up">
            クローバー合同会社は、戦略整理からUI/UX、開発、運用までを一気通貫で支援。
            スピードと品質のバランスで、成長のための仕組みを作ります。
          </p>
          <div
            className="flex flex-col gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,23,42,0.18)]"
            >
              サービスを見る
            </a>
            <a
              href="#clients"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
            >
              取引実績を見る
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 animate-fade-up" style={{ animationDelay: "180ms" }}>
            {[
              "要件整理からリリース後の改善まで伴走",
              "Next.js/TypeScriptを中心に高速開発",
              "意思決定の速度を高める設計と実装",
              "スモールスタートからスケールまで対応",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm text-[var(--color-muted)] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.18)] backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                <span>Delivery Map</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                  Active
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--color-ink)] font-[var(--font-display)]">
                Discover / Design / Build
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                立ち上げから運用まで、フェーズに合わせて最適な支援を設計します。
              </p>
              <div className="mt-6 grid gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[var(--color-ink)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 right-6 hidden rounded-3xl border border-white/70 bg-white/90 px-4 py-3 text-xs text-[var(--color-muted)] shadow-lg animate-float-slow md:block">
            Teaming with your business goals.
          </div>
        </div>
      </div>
    </section>
  );
}
