import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-gray-100 font-sans min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-5 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 px-4 py-2">
                <a className="text-slate-500 hover:underline text-sm font-medium leading-normal" href="#">Home</a>
                <span className="text-slate-500 text-sm font-medium leading-normal">/</span>
                <span className="text-slate-900 dark:text-gray-200 text-sm font-medium leading-normal">Resources</span>
              </div>
              
              {/* Page Heading */}
              <div className="flex flex-col md:flex-row justify-between gap-6 px-4 py-6 md:py-10">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    Expert Resources for the Carbon Economy
                  </h1>
                  <p className="text-slate-500 dark:text-green-300 text-lg font-normal leading-relaxed">
                    Sharp, educational content on compliance, solar assets, and carbon markets.
                  </p>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="px-4 pb-8 space-y-6">
                {/* Search Bar */}
                <div className="w-full">
                  <label className="flex flex-col w-full">
                    <div className="flex w-full items-stretch rounded-lg h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 shadow-sm focus-within:ring-2 focus-within:ring-green-500/20">
                      <div className="text-slate-500 flex items-center justify-center pl-4 pr-2">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input className="flex w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-500 text-base font-normal h-full" placeholder="Search insights, reports, and guides..." />
                    </div>
                  </label>
                </div>
                {/* Chips */}
                <div className="flex gap-3 flex-wrap">
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-900 dark:bg-green-500 pl-5 pr-5 transition-colors">
                    <p className="text-white dark:text-slate-900 text-sm font-medium leading-normal">All Topics</p>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 pl-5 pr-5 transition-colors group">
                    <p className="text-slate-900 dark:text-gray-300 group-hover:text-green-500 text-sm font-medium leading-normal">Policy</p>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 pl-5 pr-5 transition-colors group">
                    <p className="text-slate-900 dark:text-gray-300 group-hover:text-green-500 text-sm font-medium leading-normal">Energy</p>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 pl-5 pr-5 transition-colors group">
                    <p className="text-slate-900 dark:text-gray-300 group-hover:text-green-500 text-sm font-medium leading-normal">Investment</p>
                  </button>
                  <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 pl-5 pr-5 transition-colors group">
                    <p className="text-slate-900 dark:text-gray-300 group-hover:text-green-500 text-sm font-medium leading-normal">Carbon Markets</p>
                  </button>
                </div>
              </div>

              {/* Article List */}
              <div className="px-4 space-y-4">
                {/* List Item 1 */}
                <a className="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md transition-all duration-200" href="#">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-wider uppercase text-green-500 bg-green-500/10 px-2 py-1 rounded">Policy</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">5 min read</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-100 group-hover:text-green-500 transition-colors">How to prepare for CBAM compliance</h3>
                    </div>
                    <div className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                      <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                    </div>
                  </div>
                </a>
                {/* List Item 2 */}
                <a className="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md transition-all duration-200" href="#">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-wider uppercase text-green-500 bg-green-500/10 px-2 py-1 rounded">Energy</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">8 min read</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-100 group-hover:text-green-500 transition-colors">How group captive solar works</h3>
                    </div>
                    <div className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                      <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                    </div>
                  </div>
                </a>
                {/* List Item 3 */}
                <a className="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md transition-all duration-200" href="#">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-wider uppercase text-green-500 bg-green-500/10 px-2 py-1 rounded">Investment</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">12 min read</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-100 group-hover:text-green-500 transition-colors">How to evaluate an operational solar asset</h3>
                    </div>
                    <div className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                      <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                    </div>
                  </div>
                </a>
                {/* List Item 4 */}
                <a className="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md transition-all duration-200" href="#">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-wider uppercase text-green-500 bg-green-500/10 px-2 py-1 rounded">Carbon Markets</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">10 min read</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-100 group-hover:text-green-500 transition-colors">Biochar carbon removal economics explained</h3>
                    </div>
                    <div className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                      <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                    </div>
                  </div>
                </a>
                {/* List Item 5 */}
                <a className="group block bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-md transition-all duration-200" href="#">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-wider uppercase text-green-500 bg-green-500/10 px-2 py-1 rounded">Policy</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">6 min read</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-gray-100 group-hover:text-green-500 transition-colors">Regulatory Frameworks for 2025: A concise guide</h3>
                    </div>
                    <div className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-green-500 group-hover:translate-x-1 transition-all">
                      <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Pagination */}
              <div className="px-4 py-10 flex justify-center items-center gap-4">
                <button className="flex items-center justify-center size-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 text-gray-400 hover:text-green-500 hover:border-green-500 transition-colors disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <span className="text-sm font-medium text-slate-900 dark:text-gray-300">Page 1 of 4</span>
                <button className="flex items-center justify-center size-10 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white hover:text-green-500 hover:border-green-500 transition-colors">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter Section (Footer CTA) */}
      <section className="border-t border-slate-200 dark:border-gray-700 bg-white dark:bg-slate-800 py-16">
        <div className="layout-container px-5 md:px-20 lg:px-40 flex justify-center">
          <div className="layout-content-container max-w-[960px] flex-1">
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-gray-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-3 max-w-md">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Stay Ahead of the Market</h2>
                <p className="text-slate-500 dark:text-gray-400">Get the latest market intelligence and compliance updates delivered directly to your inbox every week.</p>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                <label className="flex flex-col min-w-[280px]">
                  <div className="flex w-full items-stretch rounded-lg h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-green-500/20">
                    <input className="flex w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-gray-400 px-4 text-base font-normal h-full" placeholder="Enter your work email" />
                  </div>
                </label>
                <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-green-500 text-slate-900 font-bold hover:bg-opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;