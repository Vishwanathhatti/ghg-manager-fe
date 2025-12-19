import Image from "next/image";

export default function Home() {
  return (
    <main className="grow">
      <section className="relative w-full overflow-hidden bg-linear-to-r from-brand-green-start to-brand-green-end py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative mx-auto flex max-w-[1280px] flex-col items-start px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm border border-white/20">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              <span>Q3 Market Report Available</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Carbon Intelligence &amp; Renewable Project Investments
            </h1>
            <h2 className="mb-10 max-w-2xl text-lg font-normal leading-relaxed text-brand-mint md:text-xl">
              We help industries cut emissions and investors acquire high-quality renewable energy assets through data-driven advisory.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="group flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-brand-slate transition-all hover:bg-white hover:shadow-lg hover:shadow-primary/20">
                <span>Explore Services</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
              <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white">
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-gray-100 bg-white dark:bg-background-dark dark:border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 md:divide-x md:divide-gray-100 dark:md:divide-white/10">
            <div className="flex flex-col gap-1 md:pr-8">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-brand-green-start lg:text-6xl">1.2</span>
                <span className="mb-2 text-2xl font-bold text-brand-green-start">GW</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-slate dark:text-white/80">MW Transacted</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Across solar, wind, and storage assets in North America and Europe.</p>
            </div>
            <div className="flex flex-col gap-1 md:px-8">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-brand-green-start lg:text-6xl">50</span>
                <span className="mb-2 text-2xl font-bold text-brand-green-start">+</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-slate dark:text-white/80">Clients Served</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Fortune 500 corporations, institutional investors, and utilities.</p>
            </div>
            <div className="flex flex-col gap-1 md:pl-8">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-brand-green-start lg:text-6xl">12</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-slate dark:text-white/80">Sectors Covered</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Including heavy manufacturing, logistics, and data centers.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-12 dark:bg-white/5">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-10">
          <p className="mb-8 text-sm font-semibold text-gray-400 dark:text-gray-500">TRUSTED BY LEADING ENERGY PARTNERS</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-opacity hover:opacity-100 md:justify-between md:gap-8">
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <span className="material-symbols-outlined">bolt</span> VoltEdge
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <span className="material-symbols-outlined">solar_power</span> SunCapital
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <span className="material-symbols-outlined">wind_power</span> AeroGen
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <span className="material-symbols-outlined">factory</span> IndusCorp
            </div>
            <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
              <span className="material-symbols-outlined">forest</span> CarbonX
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-green-end mb-2">Our Expertise</h3>
              <h2 className="text-3xl font-bold leading-tight text-brand-slate md:text-4xl dark:text-white">Integrated Solutions for the Net-Zero Transition</h2>
            </div>
            <a className="group flex items-center gap-2 text-sm font-bold text-brand-slate hover:text-brand-green-end dark:text-primary" href="#">
              View all services
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-none">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green-start/10 text-brand-green-end dark:bg-primary/20 dark:text-primary">
                  <span className="material-symbols-outlined text-2xl">monitoring</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-slate dark:text-white">Carbon Markets Advisory</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Navigate voluntary and compliance carbon markets with proprietary pricing models and policy intelligence.</p>
              </div>
              <div className="mt-8">
                <span className="text-sm font-bold text-brand-green-end group-hover:underline dark:text-primary">Learn more</span>
              </div>
            </div>
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-none">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green-start/10 text-brand-green-end dark:bg-primary/20 dark:text-primary">
                  <span className="material-symbols-outlined text-2xl">currency_exchange</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-slate dark:text-white">Renewable Asset M&amp;A</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Buy-side and sell-side advisory for solar, wind, and storage projects across global jurisdictions.</p>
              </div>
              <div className="mt-8">
                <span className="text-sm font-bold text-brand-green-end group-hover:underline dark:text-primary">Learn more</span>
              </div>
            </div>
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 dark:border-white/10 dark:bg-white/5 dark:hover:shadow-none">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-green-start/10 text-brand-green-end dark:bg-primary/20 dark:text-primary">
                  <span className="material-symbols-outlined text-2xl">hub</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-slate dark:text-white">Corporate PPA Structuring</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Connect directly with renewable developers to secure long-term, fixed-price clean energy agreements.</p>
              </div>
              <div className="mt-8">
                <span className="text-sm font-bold text-brand-green-end group-hover:underline dark:text-primary">Learn more</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-brand-slate px-6 py-16 text-center shadow-2xl md:px-20 lg:py-24">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-green-start opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-primary opacity-5 blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="mb-6 max-w-3xl text-3xl font-bold text-white md:text-5xl">Ready to optimize your carbon strategy?</h2>
              <p className="mb-10 max-w-2xl text-lg text-gray-300">Join over 50 leading organizations leveraging Carbon Alpha for their transition to net-zero.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="h-12 min-w-[180px] rounded-full bg-primary px-8 text-base font-bold text-brand-slate transition-colors hover:bg-white">
                  Schedule Consultation
                </button>
                <button className="h-12 min-w-[180px] rounded-full border border-white/20 bg-transparent px-8 text-base font-bold text-white transition-colors hover:bg-white/10">
                  Download 2024 Outlook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
