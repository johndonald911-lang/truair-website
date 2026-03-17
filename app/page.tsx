export default function Page() {
  return (
    <main className="bg-[#0b1220] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/90 shadow-2xl backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="https://iili.io/qMB2l3l.png" alt="TRUAIR" className="h-10 w-auto object-contain md:h-14" />
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 lg:flex">
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#featured" className="hover:text-cyan-300">Featured</a>
            <a href="#reviews" className="hover:text-cyan-300">Reviews</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
            <a href="https://www.facebook.com/Truairconditioning" target="_blank" className="inline-flex items-center gap-2 hover:text-cyan-300" aria-label="Facebook" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07C2 17.127 5.657 21.32 10.438 22v-7.03H7.898v-2.9h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.773-1.63 1.566v1.88h2.773l-.443 2.9h-2.33V22C18.343 21.32 22 17.127 22 12.07z"/></svg>
              <span className="hidden xl:inline">Facebook</span>
            </a>
            <a href="https://www.instagram.com/truair_airconditioning" target="_blank" className="inline-flex items-center gap-2 hover:text-cyan-300" aria-label="Instagram" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM17.5 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5z"/></svg>
              <span className="hidden xl:inline">Instagram</span>
            </a>
          </nav>
          <a href="tel:0497878247" className="hidden rounded-2xl bg-cyan-400 px-5 py-3 font-black text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,0.35)] transition hover:scale-105 md:inline-flex">CALL NOW</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.25),_transparent_35%),linear-gradient(135deg,#0b1220_0%,#0f172a_35%,#0c4a6e_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 md:text-sm">
              Melbourne Heating & Cooling Specialists
            </div>
            <h1 className="mb-6 text-4xl font-black leading-[0.95] md:text-6xl xl:text-7xl">Premium Installations. Done Properly.</h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              High-end split systems, ducted air conditioning, multi-splits, servicing and repairs across Melbourne. Clean installs, quality brands, straight-up advice and proper after-sales support.
            </p>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a href="tel:0497878247" className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-7 py-4 text-base font-black text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.35)] transition hover:scale-105">
                Call 0497 878 247
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/10">
                Get Fast Quote
              </a>
            </div>

            <div className="grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-3">
              <div className="flex min-h-[132px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                <div className="text-3xl font-black leading-none text-cyan-300">15+</div>
                <div className="mt-3 text-xs leading-tight text-slate-300 md:text-sm">Years Experience</div>
              </div>
              <div className="flex min-h-[132px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                <div className="text-3xl font-black leading-none text-cyan-300">5 Yr</div>
                <div className="mt-3 text-xs leading-tight text-slate-300 md:text-sm">Manufacturer Warranty</div>
              </div>
              <div className="flex min-h-[132px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
                <div className="text-3xl font-black leading-none text-cyan-300">Lifetime</div>
                <div className="mt-3 text-xs leading-tight text-slate-300 md:text-sm">Installation Warranty</div>
              </div>
            </div>

            <div className="mt-6 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex min-h-[116px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur">
                <img src="https://wp.logos-download.com/wp-content/uploads/2024/03/Australian_Refrigeration_Council_Logo.png?dl" alt="ARCTick Certified" className="h-9 w-auto max-w-[140px] rounded-lg bg-white p-1 object-contain" />
                <span className="text-xs font-semibold leading-tight text-slate-200 md:text-sm">ARCTick Certified</span>
              </div>
              <div className="flex min-h-[116px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur">
                <img src="https://cdn.brandfetch.io/id0jhLAycb/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="BPC Licensed" className="h-9 w-auto max-w-[70px] rounded-lg bg-white p-2 object-contain" />
                <span className="text-xs font-semibold leading-tight text-slate-200 md:text-sm">BPC Licensed</span>
              </div>
              <div className="flex min-h-[116px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur">
                <img src="https://discover.data.vic.gov.au/uploads/group/2025-05-23-064053.1567952025-05-23-064052.720263EnergySafeVictoria.jpg" alt="Energy Safe Victoria" className="h-9 w-auto max-w-[110px] rounded-lg bg-white p-1 object-contain" />
                <span className="text-xs font-semibold leading-tight text-slate-200 md:text-sm">Energy Safe Victoria</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mb-6 flex justify-center">
              <img src="https://iili.io/qMB2l3l.png" alt="TRUAIR" className="h-[124px] w-auto object-contain md:h-[144px]" />
            </div>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl md:p-6">
              <div className="rounded-[1.75rem] bg-white p-7 text-slate-900 shadow-2xl md:p-8">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Fast Quote</div>
                    <h3 className="text-2xl font-black md:text-3xl">Request A Call Back</h3>
                  </div>
                  <div className="rounded-full bg-sky-100 px-3 py-2 text-xs font-black text-sky-700">FAST RESPONSE</div>
                </div>

                <form action="https://formsubmit.co/john@truair.com.au" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="New TRUAIR Website Quote Request" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://truair.com.au/" />

                  <input name="name" required className="w-full rounded-2xl border border-slate-200 px-4 py-4 font-medium" placeholder="Your Name" />
                  <input name="phone" required className="w-full rounded-2xl border border-slate-200 px-4 py-4 font-medium" placeholder="Phone Number" />
                  <input name="suburb" className="w-full rounded-2xl border border-slate-200 px-4 py-4 font-medium" placeholder="Suburb" />
                  <select name="service" className="w-full rounded-2xl border border-slate-200 px-4 py-4 font-medium" defaultValue="Split System Installation">
                    <option>Split System Installation</option>
                    <option>Ducted Air Conditioning</option>
                    <option>Service / Repair</option>
                    <option>Multi Split System</option>
                    <option>Rebate / VEU Job</option>
                  </select>
                  <textarea name="message" required className="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-4 font-medium" placeholder="Tell us about the job..."></textarea>
                  <button type="submit" className="w-full rounded-2xl bg-slate-950 py-4 font-black tracking-wide text-white transition hover:bg-slate-800">
                    GET MY QUOTE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0f172a] py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 md:text-sm">Trusted Brands We Install</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex min-h-[130px] items-center justify-center rounded-3xl border border-white/10 bg-white px-5 py-6 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Fujitsu-Logo.svg" alt="Fujitsu" className="h-10 w-auto object-contain md:h-12" />
            </div>
            <div className="flex min-h-[130px] items-center justify-center rounded-3xl border border-white/10 bg-white px-5 py-6 shadow-sm">
              <img src="https://acsisair.com.au/wp-content/uploads/2021/02/daikin-background-white.jpg" alt="Daikin" className="h-10 w-auto object-contain md:h-12" />
            </div>
            <div className="flex min-h-[130px] items-center justify-center rounded-3xl border border-white/10 bg-white px-5 py-6 shadow-sm">
              <img src="https://fallonsolutions.com.au/wp-content/uploads/2024/06/csm_Mitsubishi_Electric_18d7e03602.png" alt="Mitsubishi Electric" className="h-10 w-auto object-contain md:h-12" />
            </div>
            <div className="flex min-h-[130px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-white px-5 py-6 text-center shadow-sm">
              <div className="text-3xl font-black tracking-wide text-red-600 md:text-4xl">TOSHIBA</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Air Conditioning</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0f172a] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About TRUAIR</p>
              <h2 className="mt-3 mb-6 text-3xl font-black md:text-5xl">Family Run. Melbourne West. Built On Quality.</h2>
              <p className="text-lg leading-8 text-slate-300">
                TRUAIR is a family-run air conditioning business based in Melbourne’s west, proudly servicing homes and businesses across Melbourne. With over 20 years of industry experience, we specialise in quality split system, ducted and multi-split installations, along with servicing and repairs. We take pride in clean workmanship, honest advice, and doing every job properly from start to finish.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex min-h-[150px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="text-3xl font-black text-cyan-300">20+</div>
                <div className="mt-2 font-semibold text-slate-300">Years In The Industry</div>
              </div>
              <div className="flex min-h-[150px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="text-3xl font-black text-cyan-300">Melbourne</div>
                <div className="mt-2 font-semibold text-slate-300">Homes & Businesses</div>
              </div>
              <div className="flex min-h-[150px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="text-3xl font-black text-cyan-300">Family</div>
                <div className="mt-2 font-semibold text-slate-300">Run Business</div>
              </div>
              <div className="flex min-h-[150px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="text-3xl font-black text-cyan-300">Done</div>
                <div className="mt-2 font-semibold text-slate-300">Properly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#0b1220] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Our Services</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Built For Melbourne Homes</h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-400">We supply, install and service quality systems with clean workmanship and a premium finish.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"><h3 className="mb-3 text-xl font-black">Split System Installation</h3><p className="text-slate-400">Efficient split system installs with neat workmanship and trusted brand recommendations.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"><h3 className="mb-3 text-xl font-black">Ducted Reverse Cycle Systems</h3><p className="text-slate-400">Whole-home heating and cooling solutions designed for comfort and reliability.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"><h3 className="mb-3 text-xl font-black">Multi Split Systems</h3><p className="text-slate-400">Flexible multi-room systems tailored to suit your layout, comfort needs and budget.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"><h3 className="mb-3 text-xl font-black">Service & Repairs</h3><p className="text-slate-400">Fast fault finding, servicing and repairs to keep your system running at its best.</p></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"><h3 className="mb-3 text-xl font-black">VEU / Rebate Jobs</h3><p className="text-slate-400">Upgrade-ready installations with straightforward advice on rebate pathways.</p></div>
            <div className="rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-500 p-8 text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.2)]"><h3 className="mb-3 text-xl font-black">Need It Done Properly?</h3><p className="font-medium text-slate-900/80">Call now and get a fast quote from TRUAIR.</p></div>
          </div>
        </div>
      </section>

      <section id="featured" className="bg-[#0f172a] py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl"><img src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F2557683.jpg" alt="Job 1" className="h-[240px] w-full object-cover md:h-[300px]" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl"><img src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F3702934.jpg" alt="Job 2" className="h-[180px] w-full object-cover md:h-[220px]" /></div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl"><img src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F2557685.jpg" alt="Job 3" className="h-[180px] w-full object-cover md:h-[220px]" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl"><img src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F3702935.jpg" alt="Job 4" className="h-[180px] w-full object-cover md:h-[220px]" /></div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl"><img src="https://img.hipages.com.au/unsafe/fit-in/1000x1000/smart/filters:fill(black)/https%3A%2F%2Fmediacache.homeimprovementpages.com.au%2Fcreative%2Fgalleries%2F2290001_2295000%2F2290474%2Foriginal_images%2F3702936.jpg" alt="Job 5" className="h-[180px] w-full object-cover md:h-[220px]" /></div>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Quality Installations</p>
            <h2 className="mt-3 mb-6 text-3xl font-black md:text-5xl">Quality Installations. Done Right.</h2>
            <p className="mb-6 text-lg leading-8 text-slate-400">A few recent TRUAIR installs showing the clean workmanship, proper placement and quality systems we’re known for across Melbourne.</p>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#0b1220] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">hipages & Google Reviews</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Backed By Real Customers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              ["Hoang","Werribee South, VIC","15 Jan 2026","Price was competitive, punctual and easy to deal with. Would recommend and use again."],
              ["Christine S","Wyndham Vale, VIC","25 Sep 2025","2 x air-con units installed, on time and a true professional. Highly recommend."],
              ["Don Lewis","Google Review","1 year ago","Excellent to deal with. Installed two split systems and serviced both later. Highly recommend."],
              ["Sarah M","Point Cook, VIC","hipages Review","John was super easy to deal with, turned up when he said he would and the install was neat and professional. Very happy with the result."],
              ["Michael T","Tarneit, VIC","Google Review","Great communication from start to finish. Clean install, quality workmanship and everything explained properly. Would definitely recommend TRUAIR."],
              ["Amanda R","Hoppers Crossing, VIC","hipages Review","Fast quote, fair price and the workmanship was spot on. The system looks great and works perfectly. Would use TRUAIR again without hesitation."]
            ].map(([name, suburb, date, text]) => (
              <div key={name as string} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <div className="mb-4 text-xl font-black text-cyan-300">★★★★★</div>
                <div className="text-lg font-black">{name}</div>
                <div className="mb-1 text-sm text-slate-400">{suburb}</div>
                <div className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-500">{date}</div>
                <p className="leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.15),_transparent_35%),#0f172a] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl backdrop-blur-2xl md:p-14">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 md:text-sm">Ready To Book?</div>
            <h2 className="mb-4 text-3xl font-black md:text-6xl">Need A Quote On A New System?</h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-400">Get in touch for a fast quote on split systems, ducted installs, servicing and repairs across Melbourne.</p>
            <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:0497878247" className="rounded-2xl bg-cyan-400 px-8 py-4 font-black text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.35)]">Call Now: 0497 878 247</a>
              <a href="mailto:john@truair.com.au" className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-bold">Email Us</a>
            </div>
            <div className="mx-auto grid max-w-5xl gap-4 text-sm text-slate-300 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">0497 878 247</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">john@truair.com.au</div>
              <a href="https://www.facebook.com/Truairconditioning" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300 hover:text-cyan-300" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/truair_airconditioning" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300 hover:text-cyan-300" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <img src="https://iili.io/qMB2l3l.png" alt="TRUAIR" className="h-10 w-auto object-contain" />
          <div className="text-center text-sm text-slate-500 md:text-right">
            TRUAIR PTY LTD • ABN 75 628 083 018 • Melbourne Heating & Cooling Specialists • Premium installations done properly
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a href="tel:0497878247" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 py-4 text-lg font-black text-slate-950 shadow-2xl">
          CALL NOW • 0497 878 247
        </a>
      </div>
    </main>
  );
}
