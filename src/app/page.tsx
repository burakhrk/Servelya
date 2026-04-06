"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const brands = [
  { name: "BMW", logo: "/logo-bmw.svg" },
  { name: "Mercedes", logo: "/logo-mercedes.svg" },
  { name: "Range Rover", logo: "/logo-rangerover.svg" },
  { name: "Porsche", logo: "/logo-porsche.svg" },
  { name: "Audi", logo: "/logo-audi.svg" },
];

const services = [
  "BMW ve Mercedes orijinal cihazlarla arıza tespiti",
  "Periyodik bakım, fren ve süspansiyon",
  "Kaporta, boya ve lokal onarım",
  "Detaylı temizlik, seramik koruma ve iç-dış bakım",
  "Lastik-jant, rot-balans ve yol yardım yönlendirmesi",
];

const contacts = [
  { name: "Mehmet Ali H.", phone: "0507 136 08 50" },
  { name: "Hasan Y.", phone: "0543 942 54 33" },
];

const mapLinkGoogle =
  "https://www.google.com/maps/search/Servelya+Premium+Car+Service";
const mapLinkApple = "https://maps.apple.com/?q=Servelya%20Premium%20Car%20Service";

function MarqueeBrands() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handlePointerDown = (clientX: number) => {
    if (!trackRef.current) return;
    setDragging(true);
    startX.current = clientX;
    scrollStart.current = trackRef.current.scrollLeft;
  };

  const handlePointerMove = (clientX: number) => {
    if (!dragging || !trackRef.current) return;
    const delta = clientX - startX.current;
    trackRef.current.scrollLeft = scrollStart.current - delta;
  };

  const stopDrag = () => setDragging(false);

  const items = [...brands, ...brands];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // start auto scroll when not dragging
    if (!dragging) {
      scrollTimer.current = setInterval(() => {
        el.scrollLeft += 0.6;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }, 16);
    }

    return () => {
      if (scrollTimer.current) {
        clearInterval(scrollTimer.current);
        scrollTimer.current = null;
      }
    };
  }, [dragging]);

  // ensure timer cleared on unmount
  useEffect(() => {
    return () => {
      if (scrollTimer.current) {
        clearInterval(scrollTimer.current);
      }
    };
  }, []);

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-1 py-2 shadow-inner">
      <div
        ref={trackRef}
        className={`flex items-center gap-6 overflow-x-auto px-1 py-1 scrollbar-hide ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => {
          e.preventDefault();
          handlePointerDown(e.clientX);
        }}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
      >
        {items.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex min-w-[120px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 shadow-sm backdrop-blur-sm"
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain invert brightness-200"
            />
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-200">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#ef4444]/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
              Premium Car Service
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text sm:text-5xl">
                Servelya Premium
              </h1>
              <p className="text-lg text-slate-200 sm:text-xl">
                <span className="text-white">Alman araçlarda</span> uzman teşhis, bakım ve onarım.
              </p>
            </div>

            <MarqueeBrands />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center" />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-2xl shadow-black/25">
              <h3 className="text-2xl font-bold">Yol Tarifi Al</h3>
              <p className="mt-2 text-sm text-white/80">
                Hangi haritayı kullanmak istersiniz?
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <a
                  href={mapLinkGoogle}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm font-semibold transition hover:border-white/30"
                >
                  <span className="flex items-center gap-2">🧭 Google Haritalar</span>
                  <span className="text-white/70 text-xs">Yol tarifi al</span>
                </a>
                <a
                  href={mapLinkApple}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm font-semibold transition hover:border-white/30"
                >
                  <span className="flex items-center gap-2">🗺️ Apple Haritalar</span>
                  <span className="text-white/70 text-xs">Yol tarifi al</span>
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => (
                <div
                  key={contact.phone}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                      İletişim
                    </p>
                    <a
                      href={`tel:${contact.phone.replace(/\D/g, "")}`}
                      className="text-[11px] font-semibold uppercase tracking-wide text-[#f97316] hover:text-[#fb923c]"
                    >
                      Ara
                    </a>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {contact.name}
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="mt-1 inline-flex w-max items-center gap-2 text-base font-semibold text-slate-50 hover:text-white"
                  >
                    📞 {contact.phone}
                  </a>
                </div>
              ))}

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Sözümüz
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  <li>Şeffaf fiyatlama, net teslim zamanı</li>
                  <li>Orijinal/üst seviye eşdeğer parça opsiyonu</li>
                  <li>Beklemeden randevu ve hızlı bilgilendirme</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur lg:ml-auto">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Servis Özeti
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  Premium bakım & onarım
                </h2>
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#e53935] to-[#3b82f6] opacity-80" />
            </div>

            <div className="mt-4 grid gap-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#e53935]" />
                  <p className="text-sm text-slate-100">{service}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/5 bg-black/30 p-4 text-sm text-slate-200">
              Premium segment araçlar için teşhis, bakım ve boya/kaporta süreçleri tek noktada
              yönetilir; gerekli olduğunda yetkili servis geçmişiyle uyumlu parçalar kullanılır.
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
              Konum & Randevu
            </p>
            <h3 className="text-2xl font-bold text-white">
              Servelya Premium Servis
            </h3>
                <p className="text-sm text-slate-200">
                  Navigasyonda “Servelya Premium” araması ile bize ulaşabilir, arayarak aynı gün
                  randevu alabilirsiniz.
                </p>
            <div className="flex flex-col gap-2 text-sm text-slate-100">
              {contacts.map((contact) => (
                <a
                  key={contact.phone}
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30"
              >
                📞 {contact.name} — {contact.phone}
              </a>
              ))}
              <a
                href={mapLinkGoogle}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30"
              >
                📍 Navigasyonda Aç
              </a>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-white/5 bg-black/30 p-4 text-sm text-slate-200">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white">Hızlı ihtiyaçlar</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                Aynı gün
              </span>
            </div>
            <ul className="space-y-2">
              <li>Hata lambası ve arıza tespiti</li>
              <li>Periyodik bakım ve yağ değişimi</li>
              <li>Fren balata & disk kontrolü</li>
              <li>Mini onarım ve boya rötuşu</li>
            </ul>
            <p className="text-xs text-slate-400">
              Premium segment araçlara özel ekipman ve ölçüm değerleriyle çalışılır; teslim öncesi
              son kontrol yapılır.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}










