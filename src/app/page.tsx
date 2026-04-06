const brands = ["BMW", "Mercedes", "Range Rover", "Porsche", "Audi"];

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

const mapLink =
  "https://www.google.com/maps/search/Servelya+Premium+Car+Service";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#3b82f6]/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[#ef4444]/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">
              Premium Car Service
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Servelya Premium
              </h1>
              <p className="text-lg text-slate-200 sm:text-xl">
                BMW, Mercedes, Range Rover, Porsche ve Audi araçlar için
                güvenli, hızlı ve özenli servis.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-100"
                >
                  #{brand}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`tel:+90${contacts[0].phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center rounded-full bg-[#e53935] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e53935]/30 transition hover:-translate-y-[1px] hover:bg-[#cf2f2c]"
              >
                Hemen Ara
              </a>
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-[1px] hover:border-white/30"
              >
                Navigasyonda Aç
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) => (
                <div
                  key={contact.phone}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    İletişim
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {contact.name}
                  </p>
                  <a
                    href={`tel:+90${contact.phone.replace(/\D/g, "")}`}
                    className="mt-1 inline-flex w-max items-center gap-2 text-base font-semibold text-slate-50 hover:text-white"
                  >
                    📞 {contact.phone}
                  </a>
                  <a
                    href={`tel:+90${contact.phone.replace(/\D/g, "")}`}
                    className="mt-3 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:border-white/40 hover:bg-white/15"
                  >
                    Hemen ara
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
              Navigasyonda “Servelya Premium” araması ile bize ulaşabilir, arayarak aynı gün için
              randevu alabilirsiniz.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-100">
              {contacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={`tel:+90${contact.phone.replace(/\D/g, "")}`}
                  className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30"
                >
                  📞 {contact.name} — {contact.phone}
                </a>
              ))}
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-max items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30"
              >
                📍 Navigasyonda aç
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
