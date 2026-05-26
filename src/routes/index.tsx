import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tool Free Nhân Hoà — Kiểm tra Domain & Hosting" },
      {
        name: "description",
        content:
          "Bộ công cụ miễn phí của Nhân Hoà: kiểm tra tên miền, tốc độ website, IP, WHOIS — nhanh, đơn giản, không cần đăng ký.",
      },
      { property: "og:title", content: "Tool Free Nhân Hoà" },
      {
        property: "og:description",
        content: "Bộ công cụ miễn phí cho người dùng Internet Việt Nam.",
      },
    ],
  }),
  component: Index,
});

const tools = [
  {
    title: "Kiểm tra tên miền",
    desc: "Tra cứu domain còn trống hay đã đăng ký, gợi ý đuôi phù hợp.",
    icon: "🌐",
    tag: "Domain",
  },
  {
    title: "WHOIS Lookup",
    desc: "Xem thông tin chủ sở hữu, ngày đăng ký, nhà cung cấp tên miền.",
    icon: "🔎",
    tag: "Domain",
  },
  {
    title: "Kiểm tra tốc độ Website",
    desc: "Đo thời gian tải, điểm hiệu năng và gợi ý tối ưu cơ bản.",
    icon: "⚡",
    tag: "Performance",
  },
  {
    title: "Ping & Traceroute",
    desc: "Kiểm tra độ trễ và đường đi mạng tới máy chủ của bạn.",
    icon: "📡",
    tag: "Network",
  },
  {
    title: "Tra cứu IP",
    desc: "Xác định địa chỉ IP, quốc gia, nhà mạng và vị trí ước lượng.",
    icon: "📍",
    tag: "Network",
  },
  {
    title: "Kiểm tra SSL",
    desc: "Kiểm tra chứng chỉ SSL, ngày hết hạn và độ tin cậy.",
    icon: "🔒",
    tag: "Security",
  },
];

function Index() {
  const [domain, setDomain] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground">
              N
            </div>
            <span className="font-semibold tracking-tight">Nhân Hoà · Tools</span>
          </div>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#tools" className="hover:text-foreground">Công cụ</a>
            <a href="#why" className="hover:text-foreground">Vì sao miễn phí</a>
            <a href="https://nhanhoa.com" className="hover:text-foreground">Nhân Hoà</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Miễn phí · Không cần đăng ký
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Bộ công cụ miễn phí cho{" "}
          <span className="text-primary">người dùng Internet Việt</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          Kiểm tra tên miền, hosting, tốc độ website và mạng — nhanh, đơn giản,
          chính xác. Được phát triển bởi Nhân Hoà.
        </p>

        {/* Domain check box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (domain.trim()) {
              window.open(
                `https://nhanhoa.com/check-domain?domain=${encodeURIComponent(domain.trim())}`,
                "_blank",
              );
            }
          }}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-2 sm:flex-row"
        >
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="nhập tên miền của bạn, ví dụ: tencongty.vn"
            className="flex-1 rounded-md border border-input bg-card px-4 py-3 text-sm outline-none ring-ring focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Kiểm tra ngay
          </button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">
          Hỗ trợ .vn · .com.vn · .com · .net · .io và 200+ đuôi khác
        </p>
      </section>

      {/* Tools grid */}
      <section id="tools" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Công cụ phổ biến
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tất cả công cụ đều miễn phí 100%.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <article
              key={t.title}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-xl">
                  {t.icon}
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {t.tag}
                </span>
              </div>
              <h3 className="mt-5 font-semibold text-card-foreground">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-5 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
                Dùng thử →
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="border-t border-border bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            {
              t: "Hoàn toàn miễn phí",
              d: "Không quảng cáo, không thu phí, không giới hạn lượt dùng.",
            },
            {
              t: "Nhanh & chính xác",
              d: "Hạ tầng đặt tại Việt Nam, tối ưu cho người dùng trong nước.",
            },
            {
              t: "Hỗ trợ 24/7",
              d: "Đội ngũ Nhân Hoà sẵn sàng hỗ trợ khi bạn cần.",
            },
          ].map((b) => (
            <div key={b.t}>
              <div className="mb-3 h-1 w-8 rounded-full bg-primary" />
              <h3 className="font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Nhân Hoà Software. Tools miễn phí cho cộng đồng.</p>
          <p>
            Cần hosting? <a className="text-primary hover:underline" href="https://nhanhoa.com">nhanhoa.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
