'use client';

import { useEffect, useState } from 'react';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('Split System Installation');

  useEffect(() => {
    if (typeof window !== 'undefined' && !submitted) {
      const params = new URLSearchParams(window.location.search);
      setSubmitted(params.get('submitted') === '1');
    }
  }, [submitted]);


  if (submitted) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,#0b1220_0%,#0f172a_40%,#0c4a6e_100%)] text-white flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-2xl p-6 md:p-12 text-center">
            <div className="flex justify-center mb-8">
              <img src="https://iili.io/qMB2l3l.png" alt="TRUAIR" className="h-20 md:h-28 w-auto object-contain drop-shadow-2xl" />
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-6">
              Enquiry Received
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-5">Thanks for your enquiry</h1>
            <p className="text-slate-300 text-lg md:text-2xl leading-8 max-w-2xl mx-auto mb-8">
              We’ve received your message and will get back to you ASAP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0497878247" className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-black text-lg shadow-[0_12px_40px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition inline-flex items-center justify-center">
                Call 0497 878 247
              </a>
              <a href="/" className="border border-white/20 bg-white/5 backdrop-blur px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition inline-flex items-center justify-center">
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <header className="sticky top-0 z-50 bg-[#0b1220]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="https://iili.io/qMB2l3l.png" alt="TRUAIR" className="h-[58px] md:h-[77px] w-auto object-contain drop-shadow-2xl" />
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
            <a href="#services" className="hover:text-cyan-300 transition">Services</a>
            <a href="#featured" className="hover:text-cyan-300 transition">Featured</a>
            <a href="#reviews" className="hover:text-cyan-300 transition">Reviews</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
            <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="hover:text-cyan-300 inline-flex items-center gap-2 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.056 3.657 9.247 8.438 10v-7.03H7.898v-2.97h2.54V9.845c0-2.522 1.492-3.916 3.777-3.916 1.094 0 2.238.198 2.238.198v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.887h2.773l-.443 2.97h-2.33v7.03C18.343 21.317 22 17.126 22 12.07z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/truair_airconditioning" target="_blank" rel="noreferrer" className="hover:text-cyan-300 inline-flex items-center gap-2 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.8h-8.5A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95zM12 7.3A4.7 4.7 0 1 1 7.3 12 4.705 4.705 0 0 1 12 7.3zm0 1.8A2.9 2.9 0 1 0 14.9 12 2.903 2.903 0 0 0 12 9.1zm4.95-2.75a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-white/10 bg-white/5 text-white"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <a href="tel:0497878247" className="hidden md:inline-flex bg-cyan-400 text-slate-950 px-5 py-3 rounded-2xl font-black shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition">
              CALL NOW
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0b1220]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 text-slate-200 font-semibold">
            <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 transition">Services</a>
            <a href="#featured" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 transition">Featured</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 transition">Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-300 transition">Contact</a>
            <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="hover:text-cyan-300 inline-flex items-center gap-2 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 5.056 3.657 9.247 8.438 10v-7.03H7.898v-2.97h2.54V9.845c0-2.522 1.492-3.916 3.777-3.916 1.094 0 2.238.198 2.238.198v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.887h2.773l-.443 2.97h-2.33v7.03C18.343 21.317 22 17.126 22 12.07z"/>
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/truair_airconditioning" target="_blank" rel="noreferrer" className="hover:text-cyan-300 inline-flex items-center gap-2 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.8h-8.5A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95zM12 7.3A4.7 4.7 0 1 1 7.3 12 4.705 4.705 0 0 1 12 7.3zm0 1.8A2.9 2.9 0 1 0 14.9 12 2.903 2.903 0 0 0 12 9.1zm4.95-2.75a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="tel:0497878247" className="inline-flex w-full items-center justify-center bg-cyan-400 text-slate-950 px-5 py-3 rounded-2xl font-black shadow-[0_10px_40px_rgba(34,211,238,0.35)]">
              CALL NOW
            </a>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.25),_transparent_35%),linear-gradient(135deg,#0b1220_0%,#0f172a_35%,#0c4a6e_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-12 items-start lg:items-center">
          <div className="pt-2 md:pt-4">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-6">
              Melbourne Heating &amp; Cooling Specialists
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[0.95] mb-5 max-w-3xl">
              Premium Installations. Done Properly.
            </h1>
            <p className="text-base md:text-xl text-slate-300 mb-7 max-w-2xl leading-7 md:leading-8">
              High-end split systems, ducted air conditioning, multi-splits, servicing and repairs across Melbourne. Clean installs, quality brands, straight-up advice and proper after-sales support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0497878247" className="bg-cyan-400 text-slate-950 px-7 py-4 rounded-2xl font-black text-base shadow-[0_12px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition inline-flex items-center justify-center">
                Call 0497 878 247
              </a>
              <a href="#contact" className="border border-white/20 bg-white/5 backdrop-blur px-7 py-4 rounded-2xl font-bold hover:bg-white/10 transition inline-flex items-center justify-center">
                Get Fast Quote
              </a>
            </div>

            <div className="mt-1 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                <img src="https://wp.logos-download.com/wp-content/uploads/2024/03/Australian_Refrigeration_Council_Logo.png?dl" alt="ARCTick Certified" className="h-11 w-auto max-w-[160px] object-contain rounded-lg bg-white p-1" />
                <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">ARCTick Certified</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                <img src="https://i.ibb.co/FkxfbYf8/BPC.png" alt="BPC Licensed" className="h-11 w-auto max-w-[82px] object-contain rounded-lg bg-white p-2" />
                <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">BPC Licensed</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                <img src="https://discover.data.vic.gov.au/uploads/group/2025-05-23-064053.1567952025-05-23-064052.720263EnergySafeVictoria.jpg" alt="Energy Safe Victoria" className="h-11 w-auto max-w-[128px] object-contain rounded-lg bg-white p-1" />
                <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">Energy Safe Victoria</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pt-0 lg:self-start">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-3 md:p-5 shadow-2xl">
              <div className="rounded-[1.75rem] bg-white text-slate-900 p-5 md:p-7 shadow-2xl">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-sky-700 font-bold">Fast Quote</div>
                    <h3 className="text-xl md:text-3xl font-black">Request A Call Back</h3>
                  </div>
                  <div className="bg-sky-100 text-sky-700 text-xs font-black px-3 py-2 rounded-full">FAST RESPONSE</div>
                </div>

                <form action="https://formsubmit.co/john@truair.com.au" method="POST" className="space-y-3.5">
                  <input type="hidden" name="_subject" value="New TRUAIR Website Lead" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://truair.com.au/?submitted=1" />
                  <input name="name" required className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium" placeholder="Your Name" />
                  <input name="phone" required className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium" placeholder="Phone Number" />
                  <input name="suburb" className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium" placeholder="Suburb" />
                  <select name="propertyType" className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium">
                    <option value="">Property Type</option>
                    <option>Single Storey House</option>
                    <option>Double Storey House</option>
                    <option>Townhouse</option>
                    <option>Apartment / Unit</option>
                    <option>Office / Shop</option>
                    <option>Other</option>
                  </select>
                  <select
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium"
                  >
                    <option>Split System Installation</option>
                    <option>Ducted Air Conditioning</option>
                    <option>Service / Repair</option>
                    <option>Multi Split System</option>
                    <option>Rebate / VEU Job</option>
                  </select>
                  <select name="jobType" className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium">
                    <option value="">Job Type</option>
                    {selectedService === 'Ducted Air Conditioning' ? (
                      <>
                        <option>New Install</option>
                        <option>Replacement Unit</option>
                        <option>New Build / Renovation</option>
                        <option>Service / Repair</option>
                      </>
                    ) : (
                      <>
                        <option>Back to Back Install</option>
                        <option>Non Back to Back Install</option>
                        <option>Replacement Unit</option>
                        <option>New Build / Renovation</option>
                        <option>Service / Repair</option>
                      </>
                    )}
                  </select>
                  <textarea name="message" className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 min-h-[110px] font-medium" placeholder="Tell us about the job..." />
                  <button type="submit" className="w-full bg-slate-950 text-white py-3.5 rounded-2xl font-black tracking-wide hover:bg-slate-800 transition">
                    GET MY QUOTE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-[#0f172a] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <p className="uppercase tracking-[0.25em] text-slate-400 text-xs md:text-sm font-semibold">Trusted Brands We Install</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
            <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] min-h-[88px] md:min-h-[108px] flex items-center justify-center p-2 md:p-3 hover:bg-white/[0.08] hover:border-cyan-300/30 transition">
              <img src="https://i.ibb.co/Qh6F4CT/images.png" alt="Fujitsu" className="h-14 md:h-20 w-auto max-w-full object-contain rounded-lg bg-white p-1.5" />
            </a>
            <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] min-h-[88px] md:min-h-[108px] flex items-center justify-center p-2 md:p-3 hover:bg-white/[0.08] hover:border-cyan-300/30 transition">
              <img src="https://i.ibb.co/p6Y2RyPW/daikin-logo.png" alt="Daikin" className="h-14 md:h-20 w-auto max-w-full object-contain rounded-lg bg-white p-1.5" />
            </a>
            <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] min-h-[88px] md:min-h-[108px] flex items-center justify-center p-2 md:p-3 hover:bg-white/[0.08] hover:border-cyan-300/30 transition">
              <img src="https://i.ibb.co/DDcDz7Tz/daikin-logo.jpg" alt="Daikin Classic" className="h-14 md:h-20 w-auto max-w-full object-contain rounded-lg bg-white p-1.5" />
            </a>
            <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] min-h-[88px] md:min-h-[108px] flex items-center justify-center p-2 md:p-3 hover:bg-white/[0.08] hover:border-cyan-300/30 transition">
              <img src="https://i.ibb.co/HL6jxMmc/logo-mitsubishi-electric.png" alt="Mitsubishi Electric" className="h-14 md:h-20 w-auto max-w-full object-contain rounded-lg bg-white p-1.5" />
            </a>
            <a href="https://www.instagram.com/truair_airconditioning" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] min-h-[88px] md:min-h-[108px] flex items-center justify-center p-2 md:p-3 hover:bg-white/[0.08] hover:border-cyan-300/30 transition">
              <img src="https://i.ibb.co/s9M0JzRZ/Panasonic.jpg" alt="Panasonic" className="h-14 md:h-20 w-auto max-w-full object-contain rounded-lg bg-white p-1.5" />
            </a>
            <a href="https://www.instagram.com/truair_airconditioning" target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] min-h-[88px] md:min-h-[108px] flex items-center justify-center p-2 md:p-3 hover:bg-white/[0.08] hover:border-cyan-300/30 transition">
              <img src="https://i.ibb.co/k2jBRR0g/toshiba-brands.jpg" alt="Toshiba" className="h-14 md:h-20 w-auto max-w-full object-contain rounded-lg bg-white p-1.5" />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20 bg-[#0b1220]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Heating &amp; Cooling Done Properly</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-3">Split System Installation</div><p className="text-slate-400">Efficient split system installs with neat workmanship, smart placement and trusted brand recommendations.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-3">Ducted Reverse Cycle Systems</div><p className="text-slate-400">Whole-home heating and cooling solutions designed for comfort, airflow and long-term reliability.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-3">Multi Split Systems</div><p className="text-slate-400">Flexible multi-room systems tailored to suit your layout, comfort needs and budget.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-3">Service &amp; Repairs</div><p className="text-slate-400">Fast fault finding, servicing and repairs to keep your system running at its best year-round.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-3">VEU / Rebate Ready Jobs</div><p className="text-slate-400">Upgrade-ready installations with straightforward advice on eligible rebate pathways.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-3">Maintenance &amp; Servicing</div><p className="text-slate-400">Keep your system efficient, clean and reliable with scheduled servicing and check-ups.</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-20 bg-[#0b1220] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-12 lg:p-16 shadow-2xl">
            <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold mb-5">About TRUAIR</p>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 md:mb-8 max-w-5xl">Family Run. Melbourne West. Built On Quality.</h2>
            <p className="text-slate-300 text-base md:text-2xl leading-8 md:leading-[1.9] max-w-5xl">TRUAIR is a family-run air conditioning business based in Melbourne’s west, proudly servicing homes and businesses across Melbourne. With over 20 years of industry experience, we specialise in quality split system, ducted and multi-split installations, along with servicing and repairs. We take pride in clean workmanship, honest advice, and doing every job properly from start to finish.</p>
          </div>
        </div>
      </section>

      <section id="featured" className="py-16 md:py-20 bg-[#0f172a] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold">Quality Installations</p>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-4">Quality Installations. Done Right.</h2>
            <p className="text-slate-400 text-lg leading-8 max-w-3xl mx-auto">A few recent TRUAIR installs showing the clean workmanship, proper placement and quality systems we’re known for across Melbourne.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
            <a href="https://i.ibb.co/PGccD4Mn/Screenshot-2026-03-23-212525.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/PGccD4Mn/Screenshot-2026-03-23-212525.png" alt="TRUAIR job 1" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/Qj8fFcBD/Screenshot-2026-03-23-212632.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/Qj8fFcBD/Screenshot-2026-03-23-212632.png" alt="TRUAIR job 2" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/S41VcWfQ/Screenshot-2026-03-23-212711.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/S41VcWfQ/Screenshot-2026-03-23-212711.png" alt="TRUAIR job 3" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/Q7FWtr71/Screenshot-2026-03-23-212741.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/Q7FWtr71/Screenshot-2026-03-23-212741.png" alt="TRUAIR job 4" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/MyWcsbvZ/Screenshot-2026-03-23-212758.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/MyWcsbvZ/Screenshot-2026-03-23-212758.png" alt="TRUAIR job 5" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/840q1cnJ/Screenshot-2026-03-23-212858.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/840q1cnJ/Screenshot-2026-03-23-212858.png" alt="TRUAIR job 6" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/dsm3Kq5h/Screenshot-2026-03-23-212940.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/dsm3Kq5h/Screenshot-2026-03-23-212940.png" alt="TRUAIR job 7" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/v65FvqXM/Screenshot-2026-03-23-213058.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/v65FvqXM/Screenshot-2026-03-23-213058.png" alt="TRUAIR job 8" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/67fZ9C6K/Screenshot-2026-03-23-213804.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/67fZ9C6K/Screenshot-2026-03-23-213804.png" alt="TRUAIR job 9" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/pBJ4q2wn/Screenshot-2026-03-23-213812.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/pBJ4q2wn/Screenshot-2026-03-23-213812.png" alt="TRUAIR job 10" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/d0zBwV60/Screenshot-2026-03-23-213819.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/d0zBwV60/Screenshot-2026-03-23-213819.png" alt="TRUAIR job 11" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/0przShR9/Screenshot-2026-03-23-213828.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/0przShR9/Screenshot-2026-03-23-213828.png" alt="TRUAIR job 12" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/BV2CgdWq/Screenshot-2026-03-23-213836.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/BV2CgdWq/Screenshot-2026-03-23-213836.png" alt="TRUAIR job 13" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
            <a href="https://i.ibb.co/qLpS2Gzh/Screenshot-2026-03-23-213844.png" target="_blank" rel="noreferrer" className="mb-4 md:mb-5 break-inside-avoid block rounded-[2rem] overflow-hidden shadow-xl border border-white/10 bg-[#0b1220] cursor-zoom-in">
              <img src="https://i.ibb.co/qLpS2Gzh/Screenshot-2026-03-23-213844.png" alt="TRUAIR job 14" className="w-full h-auto block hover:scale-[1.02] transition duration-300" />
            </a>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-20 bg-[#0b1220]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <p className="uppercase tracking-[0.25em] text-cyan-300 text-sm font-semibold">hipages &amp; Google Reviews</p>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Backed By Real Customers</h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-4">★★★★★</div><div className="font-black text-lg">Hoang</div><div className="text-sm text-slate-400 mb-1">Werribee South, VIC</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">15 Jan 2026</div><p className="text-slate-400 leading-7">Price was competitive, punctual and easy to deal with. Would recommend and use again.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-4">★★★★★</div><div className="font-black text-lg">Christine S</div><div className="text-sm text-slate-400 mb-1">Wyndham Vale, VIC</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">25 Sep 2025</div><p className="text-slate-400 leading-7">2 x air-con units installed, on time and a true professional. Highly recommend.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-4">★★★★★</div><div className="font-black text-lg">Don Lewis</div><div className="text-sm text-slate-400 mb-1">Google Review</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">1 year ago</div><p className="text-slate-400 leading-7">Excellent to deal with. Installed two split systems and serviced both later. Highly recommend.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-4">★★★★★</div><div className="font-black text-lg">Sarah M</div><div className="text-sm text-slate-400 mb-1">Point Cook, VIC</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">hipages Review</div><p className="text-slate-400 leading-7">John was super easy to deal with, turned up when he said he would and the install was neat and professional. Very happy with the result.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-4">★★★★★</div><div className="font-black text-lg">Michael T</div><div className="text-sm text-slate-400 mb-1">Tarneit, VIC</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">Google Review</div><p className="text-slate-400 leading-7">Great communication from start to finish. Clean install, quality workmanship and everything explained properly. Would definitely recommend TRUAIR.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"><div className="text-cyan-300 font-black text-xl mb-4">★★★★★</div><div className="font-black text-lg">Amanda R</div><div className="text-sm text-slate-400 mb-1">Hoppers Crossing, VIC</div><div className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">hipages Review</div><p className="text-slate-400 leading-7">Fast quote, fair price and the workmanship was spot on. The system looks great and works perfectly. Would use TRUAIR again without hesitation.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.10),_transparent_35%),#06101f] border-t border-white/10">
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
              <a href="tel:0497878247" className="bg-cyan-400 text-slate-950 px-8 md:px-10 py-4 rounded-2xl font-black text-lg shadow-[0_12px_40px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition">
                Call Now: 0497 878 247
              </a>
              <a href="mailto:john@truair.com.au" className="border border-white/15 bg-white/[0.04] px-8 md:px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/[0.07] transition">
                Email Us
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
              <a href="tel:0497878247" className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"><span>📞</span><span>0497 878 247</span></a>
              <a href="mailto:john@truair.com.au" className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"><span>✉️</span><span>john@truair.com.au</span></a>
              <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"><span>Facebook</span></a>
              <a href="https://www.instagram.com/truair_airconditioning" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition px-5 py-5 md:px-6 md:py-6 text-slate-200 font-medium inline-flex items-center justify-center gap-3"><span>Instagram</span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-6 md:py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex justify-center md:justify-start">
              <img src="https://iili.io/qMB2l3l.png" alt="TRUAIR" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <div className="flex-1 flex flex-col md:items-end items-center gap-3 text-center md:text-right">
              <div className="text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl">
                TRUAIR PTY LTD • ABN 75 628 083 018 • Melbourne Heating &amp; Cooling Specialists • Premium installations done properly
              </div>
              <div className="flex items-center justify-center md:justify-end gap-6 flex-wrap text-slate-300 text-sm md:text-base">
                <a href="https://www.facebook.com/Truairconditioning" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">Facebook</a>
                <a href="https://www.instagram.com/truair_airconditioning" target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <a href="tel:0497878247" className="w-full bg-cyan-400 text-slate-950 py-4 rounded-2xl font-black shadow-2xl flex items-center justify-center text-lg gap-2">
          CALL NOW • 0497 878 247
        </a>
      </div>
    </main>
  );
}
