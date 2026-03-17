export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.25),_transparent_35%),linear-gradient(135deg,#0b1220_0%,#0f172a_35%,#0c4a6e_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-24">
          <div className="flex items-center justify-between gap-4 mb-10 md:mb-14">
            <img src="https://iili.io/qMB2l3l.png" alt="TRUAIR" className="h-[58px] md:h-[92px] w-auto object-contain drop-shadow-2xl" />
            <a href="tel:0497878247" className="hidden md:inline-flex bg-cyan-400 text-slate-950 px-5 py-3 rounded-2xl font-black shadow-[0_10px_40px_rgba(34,211,238,0.35)] hover:scale-105 transition">
              CALL NOW
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-start lg:items-center">
            <div className="pt-2 md:pt-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-6">
                Melbourne Heating &amp; Cooling Specialists
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-7xl font-black leading-[0.95] mb-5 max-w-3xl">
                Premium Installations. Done Properly.
              </h1>
              <p className="text-base md:text-xl text-slate-300 mb-7 max-w-2xl leading-7 md:leading-8">
                High-end split systems, ducted air conditioning, multi-splits, servicing and repairs across Melbourne.
                Clean installs, quality brands, straight-up advice and proper after-sales support.
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
                  <img src="https://wp.logos-download.com/wp-content/uploads/2024/03/Australian_Refrigeration_Council_Logo.png?dl" alt="ARCTick Certified" className="h-9 w-auto max-w-[140px] object-contain rounded-lg bg-white p-1" />
                  <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">ARCTick Certified</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                  <img src="https://cdn.brandfetch.io/id0jhLAycb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="BPC Licensed" className="h-9 w-auto max-w-[70px] object-contain rounded-lg bg-white p-2" />
                  <span className="text-xs md:text-sm font-semibold text-slate-200 leading-tight">BPC Licensed</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 min-h-[104px] backdrop-blur flex flex-col items-center justify-center text-center gap-2.5">
                  <img src="https://discover.data.vic.gov.au/uploads/group/2025-05-23-064053.1567952025-05-23-064052.720263EnergySafeVictoria.jpg" alt="Energy Safe Victoria" className="h-9 w-auto max-w-[110px] object-contain rounded-lg bg-white p-1" />
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
                    <input type="hidden" name="_next" value="https://truair.com.au/" />
                    <input name="name" required className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium" placeholder="Your Name" />
                    <input name="phone" required className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium" placeholder="Phone Number" />
                    <input name="suburb" className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium" placeholder="Suburb" />
                    <select name="service" className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 font-medium">
                      <option>Split System Installation</option>
                      <option>Ducted Air Conditioning</option>
                      <option>Service / Repair</option>
                      <option>Multi Split System</option>
                      <option>Rebate / VEU Job</option>
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
        </div>
      </section>
    </main>
  );
}
