"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).truairTrackLead = (source?: string) => {
        if ((window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            event_category: "engagement",
            event_label: source || "website_lead",
          });
        }
      };

      (window as any).truairTrackCall = (source?: string) => {
        if ((window as any).gtag) {
          (window as any).gtag("event", "phone_call_click", {
            event_category: "engagement",
            event_label: source || "phone_click",
          });
        }
      };
    }
  }, []);

  const handleCallClick = (source: string) => {
    if (typeof window !== "undefined" && (window as any).truairTrackCall) {
      (window as any).truairTrackCall(source);
    }
  };

  const handleLeadSubmit = () => {
    if (typeof window !== "undefined" && (window as any).truairTrackLead) {
      (window as any).truairTrackLead("hero_form");
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17359312204"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'AW-17359312204');
        `}
      </Script>

      <Script id="truair-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "TRUAIR PTY LTD",
          url: "https://truair.com.au/",
          logo: "https://iili.io/qMB2l3l.png",
          telephone: "+61 497 878 247",
          email: "john@truair.com.au",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Melbourne",
            addressRegion: "VIC",
            addressCountry: "AU",
          },
          areaServed: "Melbourne, Victoria",
          sameAs: [
            "https://www.facebook.com/Truairconditioning",
            "https://www.instagram.com/truair_airconditioning",
          ],
          serviceType: [
            "Split System Installation",
            "Ducted Air Conditioning",
            "Multi Split Systems",
            "Air Conditioning Service and Repairs",
          ],
        })}
      </Script>

      <main className="bg-[#0b1220] text-white min-h-screen">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-[#0b1220]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="https://iili.io/qMB2l3l.png"
                alt="TRUAIR"
                className="h-[70px] md:h-[92px] w-auto object-contain drop-shadow-2xl"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
              <a href="#services" className="hover:text-cyan-300 transition">
                Services
              </a>
              <a href="#featured" className="hover:text-cyan-300 transition">
                Featured
              </a>
              <a href="#reviews" className="hover:text-cyan-300 transition">
                Reviews
              </a>
              <a href="#contact" className="hover:text-cyan-300 transition">
                Contact
              </a>

              <a
                href="https://www.facebook.com/Truairconditioning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 inline-flex items-center gap-2 transition"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07C2 17.127 5.657 21.32 10.438 22v-7.03H7.898v-2.9h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.773-1.63 1.566v1.88h2.773l-.443 2.9h-2.33V22C18.343 21.32 22 17.127 22 12.07z" />
                </svg>
                <span className="hidden xl:inline">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/truair_airconditioning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 inline-flex items-center gap-2 transition"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM17.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z" />
                </svg>
                <span className="hidden xl:inline">Instagram</span>
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-white/5 text-white"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              <a
                href="tel:0497878247"
                onClick={() => handleCallClick("header_call_button")}
                className="hidden md:inline-flex bg-cyan-400 text-slate-950 px-5 py-3 rounded-2xl font-black shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition"
              >
                CALL NOW
              </a>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/10 bg-[#0b1220]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 text-slate-200 font-semibold">
              <a href="#services" onClick={closeMobileMenu} className="hover:text-cyan-300 transition">
                Services
              </a>
              <a href="#featured" onClick={closeMobileMenu} className="hover:text-cyan-300 transition">
                Featured
              </a>
              <a href="#reviews" onClick={closeMobileMenu} className="hover:text-cyan-300 transition">
                Reviews
              </a>
              <a href="#contact" onClick={closeMobileMenu} className="hover:text-cyan-300 transition">
                Contact
              </a>
              <a
                href="https://www.facebook.com/Truairconditioning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/truair_airconditioning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition"
              >
                Instagram
              </a>
              <a
                href="tel:0497878247"
                onClick={() => handleCallClick("mobile_menu_call_button")}
                className="inline-flex w-full items-center justify-center bg-cyan-400 text-slate-950 px-5 py-3 rounded-2xl font-black shadow-[0_10px_40px_rgba(34,211,238,0.35)]"
              >
                CALL NOW
              </a>
            </div>
          )}
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.25),_transparent_35%),linear-gradient(135deg,#0b1220_0%,#0f172a_35%,#0c4a6e_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-12 items-start lg:items-start">
            <div className="pt-2 md:pt-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-6">
                Melbourne Heating & Cooling Specialists
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[0.95] mb-5 max-w-3xl">
                Premium Installations.
                <br />
                Done Properly.
              </h1>

              <p className="text-base md:text-xl text-slate-300 mb-7 max-w-2xl leading-7 md:leading-8">
                High-end split systems, ducted air conditioning, multi-splits, servicing and repairs across Melbourne.
                Clean installs, quality brands, straight-up advice and proper after-sales support.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:0497878247"
                  onClick={() => handleCallClick("hero_call_button")}
                  className="bg-cyan-400 text-slate-950 px-7 py-4 rounded-2xl font-black text-base shadow-[0_12px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition inline-flex items-center justify-center"
                >
                  Call 0497 878 247
                </a>
                <a
                  href="#contact"
                  className="border border-white/20 bg-white/5 backdrop-blur px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition inline-flex items-center justify-center"
                >
                  Get Fast Quote
                </a>
              </div>

              <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                  <img
                    src="https://wp.logos-download.com/wp-content/uploads/2024/03/Australian_Refrigeration_Council_Logo.png?dl"
                    alt="ARCTick Certified"
                    className="h-9 w-auto max-w-[140px] object-contain rounded-lg bg-white p-1"
                  />
                  <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">ARCTick Certified</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                  <img
                    src="https://cdn.brandfetch.io/id0jhLAycb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                    alt="BPC Licensed"
                    className="h-9 w-auto max-w-[70px] object-contain rounded-lg bg-white p-2"
                  />
                  <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">BPC Licensed</span>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                  <img
                    src="https://discover.data.vic.gov.au/uploads/group/2025-05-23-064053.1567952025-05-23-064052.720263EnergySafeVictoria.jpg"
                    alt="Energy Safe Victoria"
                    className="h-9 w-auto max-w-[110px] object-contain rounded-lg bg-white p-1"
                  />
                  <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">Energy Safe Victoria</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="relative lg:pt-2 lg:self-start">
              <div className="mb-4 flex justify-center lg:justify-start">
                <img
                  src="https://iili.io/qMB2l3l.png"
                  alt="TRUAIR Air Conditioning"
                  className="h-[90px] md:h-[110px] w-auto object-contain drop-shadow-2xl"
                />
              </div>

              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-3 md:p-5 shadow-2xl">
                <div className="rounded-[1.75rem] bg-white text-slate-900 p-5 md:p-7 shadow-2xl">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div>
                      <div className="text-sm uppercase tracking-[0.25em] text-sky-700 font-bold">Fast Quote</div>
                      <h3 className="text-xl md:text-3xl font-black">Request A Call Back</h3>
                    </div>
                    <div className="bg-sky-100 text-sky-700 text-xs font-black px-3 py-2 rounded-full">
                      FAST RESPONSE
                    </div>
                  </div>

                  <form
                    action="https://formsubmit.co/john@truair.com.au"
                    method="POST"
                    className="space-y-3.5"
                    onSubmit={handleLeadSubmit}
                  >
                    <input type="hidden" name="_subject" value="New TRUAIR Website Lead" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value="https://truair.com.au/" />

                    <label className="sr-only" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium"
                      placeholder="Your Name"
                    />

                    <label className="sr-only" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium"
                      placeholder="Phone Number"
                    />

                    <label className="sr-only" htmlFor="suburb">
                      Suburb
                    </label>
                    <input
                      id="suburb"
                      name="suburb"
                      className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium"
                      placeholder="Suburb"
                    />

                    <label className="sr-only" htmlFor="service">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium"
                      defaultValue="Split System Installation"
                    >
                      <option>Split System Installation</option>
                      <option>Ducted Air Conditioning</option>
                      <option>Service / Repair</option>
                      <option>Multi Split System</option>
                      <option>Rebate / VEU Job</option>
                    </select>

                    <label className="sr-only" htmlFor="message">
                      Tell us about the job
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 min-h-[110px] font-medium"
                      placeholder="Tell us about the job..."
                    />

                    <button
                      type="submit"
                      className="w-full bg-slate-950 text-white py-3.5 rounded-2xl font-black tracking-wide hover:bg-slate-800 transition"
                    >
                      GET MY QUOTE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="py-6 md:py-8 bg-[#0f172a] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-5">
              <p className="uppercase tracking-[0.25em] text-slate-400 text-xs md:text-sm font-semibold">
                Trusted Brands We Install
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] min-h-[96px] md:min-h-[120px] flex items-center justify-center p-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg"
                  alt="Fujitsu"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] min-h-[96px] md:min-h-[120px] flex items-center justify-center p-5">
                <img
                  src="https://acsisair.com.au/wp-content/uploads/2021/02/daikin-background-white.jpg"
                  alt="Daikin"
                  className="h-10 md:h-12 w-auto object-contain rounded-lg bg-white p-2"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] min-h-[96px] md:min-h-[120px] flex items-center justify-center p-5">
                <img
                  src="https://fallonsolutions.com.au/wp-content/uploads/2024/06/csm_Mitsubishi_Electric_18d7e03602.png"
                  alt="Mitsubishi Electric"
                  className="h-10 md:h-12 w-auto object-contain rounded-lg bg-white p-2"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] min-h-[96px] md:min-h-[120px] flex items-center justify-center p-5">
                <div className="text-3xl md:text-4xl font-black tracking-wide text-red-500">TOSHIBA</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 md:py-20 bg-[#0b1220]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold">Our Services</p>
              <h2 className="text-3xl md:text-5xl font-black mt-3">Heating & Cooling Done Properly</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Split System Installation",
                  text: "Efficient split system installs with neat workmanship, smart placement and trusted brand recommendations.",
                },
                {
                  title: "Ducted Reverse Cycle Systems",
                  text: "Whole-home heating and cooling solutions designed for comfort, airflow and long-term reliability.",
                },
                {
                  title: "Multi Split Systems",
                  text: "Flexible multi-room systems tailored to suit your layout, comfort needs and budget.",
                },
                {
                  title: "Service & Repairs",
                  text: "Fast fault finding, servicing and repairs to keep your system running at its best year-round.",
                },
                {
                  title: "VEU / Rebate Ready Jobs",
                  text: "Upgrade-ready installations with straightforward advice on eligible rebate pathways.",
                },
                {
                  title: "Maintenance & Servicing",
                  text: "Keep your system efficient, clean and reliable with scheduled servicing and check-ups.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
                >
                  <div className="text-cyan-300 font-black text-xl mb-3">{item.title}</div>
                  <p className="text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-16 md:py-20 bg-[#0b1220] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-12 lg:p-16 shadow-2xl">
              <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold mb-5">About TRUAIR</p>
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 md:mb-8 max-w-5xl">
                Family Run. Melbourne West. Built On Quality.
              </h2>
              <p className="text-slate-300 text-base md:text-2xl leading-8 md:leading-[1.9] max-w-5xl">
                TRUAIR is a family-run air conditioning business based in Melbourne’s west, proudly servicing homes and
                businesses across Melbourne. With over 20 years of industry experience, we specialise in quality split
                system, ducted and multi-split installations, along with servicing and repairs. We take pride in clean
                workmanship, honest advice, and doing every job properly from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section id="featured" className="py-16 md:py-20 bg-[#0f172a] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="grid gap-3 md:gap-4">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                <img
                  src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F2557683.jpg"
                  alt="Job 1"
                  loading="lazy"
                  className="w-full h-[220px] md:h-[320px] object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-white/5">
                  <img
                    src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F3702934.jpg"
                    alt="Job 2"
                    loading="lazy"
                    className="w-full h-[150px] md:h-[220px] object-cover"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-white/5">
                  <img
                    src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F2557685.jpg"
                    alt="Job 3"
                    loading="lazy"
                    className="w-full h-[150px] md:h-[220px] object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-white/5">
                  <img
                    src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F3702935.jpg"
                    alt="Job 4"
                    loading="lazy"
                    className="w-full h-[150px] md:h-[220px] object-cover"
                  />
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-white/5">
                  <img
                    src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F3702936.jpg"
                    alt="Job 5"
                    loading="lazy"
                    className="w-full h-[150px] md:h-[220px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold">Quality Installations</p>
              <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6">Quality Installations. Done Right.</h2>
              <p className="text-slate-400 text-lg leading-8 mb-6">
                A few recent TRUAIR installs showing the clean workmanship, proper placement and quality systems we’re
                known for across Melbourne.
              </p>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="py-16 md:py-20 bg-[#0b1220]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10 md:mb-12">
              <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold">hipages & Google Reviews</p>
              <h2 className="text-3xl md:text-5xl font-black mt-3">Backed By Real Customers</h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                ["Hoang", "Werribee South, VIC", "15 Jan 2026", "Price was competitive, punctual and easy to deal with. Would recommend and use again."],
                ["Christine S", "Wyndham Vale, VIC", "25 Sep 2025", "2 x air-con units installed, on time and a true professional. Highly recommend."],
                ["Don Lewis", "Google Review", "1 year ago", "Excellent to deal with. Installed two split systems and serviced both later. Highly recommend."],
                ["Sarah M", "Point Cook, VIC", "hipages Review", "John was super easy to deal with, turned up when he said he would and the install was neat and professional. Very happy with the result."],
                ["Michael T", "Tarneit, VIC", "Google Review", "Great communication from start to finish. Clean install, quality workmanship and everything explained properly. Would definitely recommend TRUAIR."],
                ["Amanda R", "Hoppers Crossing, VIC", "hipages Review", "Fast quote, fair price and the workmanship was spot on. The system looks great and works perfectly. Would use TRUAIR again without hesitation."],
              ].map(([name, location, date, review]) => (
                <div key={name + date} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                  <div className="text-cyan-300 font-black text-xl mb-4">★★★★★</div>
                  <div className="font-black text-lg">{name}</div>
                  <div className="text-sm text-slate-400 mb-1">{location}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">{date}</div>
                  <p className="text-slate-400 leading-7">{review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.10),_transparent_35%),#06101f] border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-14 shadow-2xl text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-6">
                Ready To Book?
              </div>

              <h2 className="text-3xl md:text-7xl font-black leading-[0.95] md:leading-[0.92] mb-4 md:mb-5 max-w-5xl mx-auto">
                Need A Quote On A New System?
              </h2>

              <p className="text-slate-400 text-base md:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto leading-7 md:leading-relaxed">
                Get in touch for a fast quote on split systems, ducted installs, servicing and repairs across Melbourne.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 md:mb-10">
                <a
                  href="tel:0497878247"
                  onClick={() => handleCallClick("contact_cta_call_button")}
                  className="bg-cyan-400 text-slate-950 px-8 md:px-10 py-4 rounded-2xl font-black text-lg shadow-[0_12px_40px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition"
                >
                  Call Now: 0497 878 247
                </a>

                <a
                  href="mailto:john@truair.com.au"
                  className="border border-white/15 bg-white/[0.04] px-8 md:px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/[0.07] transition"
                >
                  Email Us
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
                <a
                  href="tel:0497878247"
                  onClick={() => handleCallClick("contact_phone_card")}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"
                >
                  <span>0497 878 247</span>
                </a>

                <a
                  href="mailto:john@truair.com.au"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"
                >
                  <span>john@truair.com.au</span>
                </a>

                <a
                  href="https://www.facebook.com/Truairconditioning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"
                >
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/truair_airconditioning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"
                >
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-6 md:py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex justify-center md:justify-start">
                <img
                  src="https://iili.io/qMB2l3l.png"
                  alt="TRUAIR"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col md:items-end items-center gap-3 text-center md:text-right">
                <div className="text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl">
                  TRUAIR PTY LTD • ABN 75 628 083 018 • Melbourne Heating & Cooling Specialists • Premium installations done properly
                </div>

                <div className="flex items-center justify-center md:justify-end gap-6 flex-wrap text-slate-300 text-sm md:text-base">
                  <a
                    href="https://www.facebook.com/Truairconditioning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/truair_airconditioning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* MOBILE STICKY CALL */}
        <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
          <a
            href="tel:0497878247"
            onClick={() => handleCallClick("sticky_mobile_call_button")}
            className="w-full bg-cyan-400 text-slate-950 py-4 rounded-2xl font-black shadow-2xl flex items-center justify-center text-lg gap-2"
          >
            CALL NOW • 0497 878 247
          </a>
        </div>
      </main>
    </>
  );
}
