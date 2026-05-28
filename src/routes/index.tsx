import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Universal Commerce — Elettronica, tecnologia e molto altro" },
      {
        name: "description",
        content:
          "Universal Commerce S.R.L., con sede a Mercogliano (AV): importazione, distribuzione e vendita di elettronica di consumo, informatica e prodotti per la persona e la casa.",
      },
    ],
  }),
  component: Index,
});

const img = (url: string) => `${url}?auto=format&fit=crop&w=1600&q=80`;

const categorie = [
  {
    titolo: "Smartphone, tablet & telefonia",
    testo:
      "I dispositivi mobili dei marchi più richiesti, dai modelli di ultima generazione alle alternative più accessibili.",
    foto: img("https://images.unsplash.com/photo-1556656793-08538906a9f8"),
  },
  {
    titolo: "Computer, tablet & informatica",
    testo:
      "Notebook, desktop, monitor e accessori per il lavoro e lo studio. Anche apparecchiature telematiche per attività professionali.",
    foto: img("https://images.unsplash.com/photo-1517336714731-489689fd1ca8"),
  },
  {
    titolo: "TV, smartwatch & dispositivi",
    testo:
      "Televisori, audio, wearable e prodotti smart per la casa. Una selezione ampia, sempre aggiornata.",
    foto: img("https://images.unsplash.com/photo-1546868871-7041f2a55e12"),
  },
  {
    titolo: "Fotocamere & imaging",
    testo:
      "Macchine fotografiche, ottiche e accessori per appassionati, creator e professionisti dell'immagine.",
    foto: img("https://images.unsplash.com/photo-1516035069371-29a1b244cc32"),
  },
  {
    titolo: "Elettrodomestici & casa",
    testo:
      "Grandi e piccoli elettrodomestici, prodotti per la cucina e per la vita di tutti i giorni in casa.",
    foto: img("https://images.unsplash.com/photo-1556911220-bff31c812dba"),
  },
  {
    titolo: "Cura della persona & benessere",
    testo:
      "Dispositivi per la cura della persona, beauty e benessere quotidiano, scelti tra marchi affidabili.",
    foto: img("https://images.unsplash.com/photo-1556228578-8c89e6adf883"),
  },
];

const perche = [
  {
    n: "01",
    titolo: "Una gamma davvero ampia",
    testo:
      "Dall'elettronica di consumo all'informatica, fino agli articoli per la casa e la persona: lavoriamo su più categorie per offrire scelta vera.",
  },
  {
    n: "02",
    titolo: "Ingrosso e dettaglio",
    testo:
      "Serviamo sia rivenditori e attività con forniture all'ingrosso, sia clienti finali nel nostro punto vendita.",
  },
  {
    n: "03",
    titolo: "Vendita anche online",
    testo:
      "Affianchiamo alla presenza fisica una distribuzione online, per raggiungere chi non può venirci a trovare di persona.",
  },
  {
    n: "04",
    titolo: "Assistenza diretta",
    testo:
      "Dietro a ogni ordine c'è una persona del nostro team. Rispondiamo, consigliamo e seguiamo il cliente nel tempo.",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".uc-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { href: "#azienda", label: "Azienda" },
    { href: "#offerta", label: "Cosa offriamo" },
    { href: "#perche", label: "Perché noi" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f0e8", color: "#0f1e3d" }}>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f5f0e8]/85 backdrop-blur-md border-b border-[#0f1e3d]/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-24 md:h-28">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Universal Commerce" className="h-20 md:h-28 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {menu.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="text-sm tracking-wide text-[#0f1e3d]/75 hover:text-[#c97b3c] transition-colors"
              >
                {m.label}
              </a>
            ))}
          </nav>
          <button
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 inline-flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block h-px w-6 bg-[#0f1e3d] transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-[#0f1e3d] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[#0f1e3d] transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-[#f5f0e8] border-t border-[#0f1e3d]/10">
            <div className="px-6 py-6 flex flex-col gap-5">
              {menu.map((m) => (
                <a
                  key={m.href}
                  href={m.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#0f1e3d]/80 hover:text-[#c97b3c]"
                >
                  {m.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={img("https://images.unsplash.com/photo-1593344484962-796055d4a3a4")}
              alt="Dispositivi di elettronica di consumo disposti con cura"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e3d] via-[#0f1e3d]/55 to-[#0f1e3d]/15" />
          </div>
          <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pb-20 pt-40 md:pb-28">
            <div className="max-w-3xl">
              <p className="uc-reveal text-[#d4915d] text-xs tracking-[0.3em] uppercase mb-6">
                Universal Commerce S.R.L.
              </p>
              <h1 className="uc-reveal text-[#f5f0e8] text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.02]">
                Elettronica, tecnologia<br />
                <span className="italic font-light text-[#f5f0e8]/90">e molto altro.</span>
              </h1>
              <p className="uc-reveal mt-8 text-[#f5f0e8]/85 text-lg md:text-xl max-w-2xl leading-relaxed">
                Importiamo, distribuiamo e vendiamo prodotti di elettronica di consumo, informatica
                e categorie affini per la persona e la casa. Lavoriamo nel punto vendita, all'ingrosso e online.
              </p>
              <div className="uc-reveal mt-10">
                <a
                  href="mailto:info@universalcommercesrl.com"
                  className="inline-flex items-center gap-3 bg-[#c97b3c] hover:bg-[#b56a2f] text-[#f5f0e8] px-8 py-4 rounded-full text-sm tracking-wide transition-colors"
                >
                  Contattaci
                  <span aria-hidden className="inline-block w-6 h-px bg-[#f5f0e8]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AZIENDA */}
        <section id="azienda" className="py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="uc-reveal text-[#c97b3c] text-xs tracking-[0.3em] uppercase mb-6">
                Azienda
              </p>
              <h2 className="uc-reveal text-4xl md:text-5xl font-semibold leading-tight">
                Un'azienda commerciale italiana, radicata e ampia.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-[#0f1e3d]/85">
              <p className="uc-reveal">
                Universal Commerce ha sede a <strong>Mercogliano (AV)</strong>, in Irpinia, e un
                <strong> punto vendita in provincia di Salerno</strong>. Da qui ci occupiamo di
                importazione, distribuzione e vendita di elettronica di consumo, apparecchiature
                informatiche e telematiche, e di altre categorie pensate per la persona e per la casa.
              </p>
              <p className="uc-reveal">
                Lavoriamo con marchi conosciuti e con fornitori di fiducia, costruendo nel tempo una
                gamma ampia e curata. Serviamo sia rivenditori e attività commerciali, con forniture
                all'ingrosso, sia clienti finali che entrano in negozio o ci raggiungono online.
              </p>
              <p className="uc-reveal">
                Quello che ci interessa di più non è la novità di un giorno: è essere un punto di
                riferimento affidabile, anno dopo anno, per chi ha bisogno di un prodotto giusto e di
                qualcuno che sappia consigliarlo.
              </p>
            </div>
          </div>
        </section>

        {/* COSA OFFRIAMO */}
        <section id="offerta" className="py-24 md:py-32 bg-[#ece5d8]">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl mb-20">
              <p className="uc-reveal text-[#c97b3c] text-xs tracking-[0.3em] uppercase mb-6">
                Cosa offriamo
              </p>
              <h2 className="uc-reveal text-4xl md:text-5xl font-semibold leading-tight">
                Sei aree, una sola idea di servizio.
              </h2>
              <p className="uc-reveal mt-6 text-lg text-[#0f1e3d]/75 leading-relaxed">
                Le categorie su cui lavoriamo ogni giorno, sia nel canale ingrosso sia nella vendita
                al dettaglio. La selezione è in costante aggiornamento.
              </p>
            </div>

            <div className="space-y-24">
              {categorie.map((c, i) => (
                <article
                  key={c.titolo}
                  className={`uc-reveal grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-7">
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={c.foto}
                        alt={c.titolo}
                        loading="lazy"
                        className="w-full h-[320px] md:h-[460px] object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[#c97b3c] text-xs tracking-[0.25em] uppercase mb-4">
                      {String(i + 1).padStart(2, "0")} — Categoria
                    </p>
                    <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
                      {c.titolo}
                    </h3>
                    <p className="text-[#0f1e3d]/75 text-lg leading-relaxed">{c.testo}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PERCHÉ NOI */}
        <section id="perche" className="py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl mb-20">
              <p className="uc-reveal text-[#c97b3c] text-xs tracking-[0.3em] uppercase mb-6">
                Perché Universal Commerce
              </p>
              <h2 className="uc-reveal text-4xl md:text-5xl font-semibold leading-tight">
                Quattro motivi semplici, costruiti negli anni.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
              {perche.map((p) => (
                <div key={p.n} className="uc-reveal border-t border-[#0f1e3d]/15 pt-8">
                  <div className="flex items-baseline gap-6 mb-4">
                    <span className="text-[#c97b3c] text-sm tracking-widest">{p.n}</span>
                    <h3 className="text-2xl md:text-3xl font-semibold">{p.titolo}</h3>
                  </div>
                  <p className="text-[#0f1e3d]/75 text-lg leading-relaxed md:pl-14">{p.testo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="bg-[#0f1e3d] text-[#f5f0e8] py-28 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#c97b3c] blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#d4915d] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <p className="uc-reveal text-[#d4915d] text-xs tracking-[0.3em] uppercase mb-8">
              Contatti
            </p>
            <h2 className="uc-reveal text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
              Hai una richiesta? <span className="text-[#f5f0e8]/70 italic font-light">Scrivici, ti rispondiamo presto.</span>
            </h2>
            <div className="uc-reveal mt-14">
              <a
                href="mailto:info@universalcommercesrl.com"
                className="inline-block text-2xl md:text-5xl font-semibold text-[#f5f0e8] border-b border-[#c97b3c] pb-3 hover:text-[#d4915d] transition-colors break-all"
              >
                info@universalcommercesrl.com
              </a>
            </div>
            <p className="uc-reveal mt-10 text-[#f5f0e8]/65 max-w-xl leading-relaxed">
              Per informazioni commerciali, richieste di fornitura all'ingrosso o assistenza
              sui prodotti, una mail è il modo più semplice per parlarci.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0a1530] text-[#f5f0e8]/80 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-10 text-sm leading-relaxed">
            <div>
              <img src={logo} alt="Universal Commerce" className="h-20 md:h-28 w-auto mb-6 brightness-0 invert opacity-90" />
              <p className="text-[#f5f0e8]/60">
                Importazione, distribuzione e vendita di elettronica di consumo e prodotti per la persona e la casa.
              </p>
            </div>
            <div>
              <p className="text-[#d4915d] text-xs tracking-[0.25em] uppercase mb-4">Sede legale</p>
              <p>Universal Commerce S.R.L.</p>
              <p>Via Acqua delle Noci 4</p>
              <p>83013 Mercogliano (AV)</p>
            </div>
            <div>
              <p className="text-[#d4915d] text-xs tracking-[0.25em] uppercase mb-4">Riferimenti</p>
              <p>P.IVA e C.F. 03236080648</p>
              <p>
                <a href="mailto:info@universalcommercesrl.com" className="hover:text-[#d4915d] transition-colors">
                  info@universalcommercesrl.com
                </a>
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-12 pt-8 border-t border-[#f5f0e8]/10 text-xs text-[#f5f0e8]/40 flex flex-col md:flex-row justify-between gap-3">
            <p>© {new Date().getFullYear()} Universal Commerce S.R.L. — Tutti i diritti riservati.</p>
            <p>Sito vetrina istituzionale</p>
          </div>
        </footer>
      </main>

      {/* Floating mail button */}
      <a
        href="mailto:info@universalcommercesrl.com"
        aria-label="Scrivici una mail"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#c97b3c] hover:bg-[#b56a2f] text-[#f5f0e8] shadow-lg shadow-[#0f1e3d]/30 flex items-center justify-center transition-all hover:scale-105"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}
