import React from 'react'

const page = () => {
    return (
        <main className="flex-grow flex flex-col items-center w-full">
            {/* <!-- Page Heading & Mission --> */}
            <section className="w-full flex justify-center py-10 md:py-16 px-4">
                <div className="flex flex-col max-w-[960px] w-full px-4 md:px-10">
                    <div className="flex flex-col gap-6">
                        <h1 className="text-[#0d131b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">About Us</h1>
                        <div className="border-l-4 border-[#136DEC] pl-6 py-2">
                            <p className="text-[#0d131b] dark:text-slate-100 text-xl md:text-2xl font-medium leading-snug">
                                Mission: Deliver measurable decarbonisation and investable renewable assets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- What Makes Us Different --> */}
            <section className="w-full flex justify-center py-12 bg-white dark:bg-slate-900 border-y border-[#e7ecf3] dark:border-slate-800 px-4">
                <div className="flex flex-col max-w-[960px] w-full px-4 md:px-10">
                    <h2 className="text-[#0d131b] dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-10">
                        What Makes Us Different
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <!-- Item 1 --> */}
                        <div className="flex flex-col gap-4">
                            <div className="size-12 rounded bg-[#136DEC]/10 flex items-center justify-center text-[#136DEC]">
                                <span className="material-symbols-outlined text-3xl">bolt</span>
                            </div>
                            <h3 className="text-[#0d131b] dark:text-white text-lg font-bold">Integrated Capability</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Combining deep carbon market expertise with renewable energy infrastructure capabilities.
                            </p>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div className="flex flex-col gap-4">
                            <div className="size-12 rounded bg-[#136DEC]/10 flex items-center justify-center text-[#136DEC]">
                                <span className="material-symbols-outlined text-3xl">analytics</span>
                            </div>
                            <h3 className="text-[#0d131b] dark:text-white text-lg font-bold">Data-Driven Execution</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Precision in measurement and reporting backed by rigorous proprietary analytics.
                            </p>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div className="flex flex-col gap-4">
                            <div className="size-12 rounded bg-[#136DEC]/10 flex items-center justify-center text-[#136DEC]">
                                <span className="material-symbols-outlined text-3xl">account_tree</span>
                            </div>
                            <h3 className="text-[#0d131b] dark:text-white text-lg font-bold">End-to-End Lifecycle</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Full support from initial feasibility studies through to asset commissioning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Focus Sectors --> */}
            <section className="w-full flex justify-center py-12 px-4">
                <div className="flex flex-col max-w-[960px] w-full px-4 md:px-10">
                    <h2 className="text-[#0d131b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
                        Focus Sectors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white dark:bg-slate-800 border border-[#e7ecf3] dark:border-slate-700 p-4 rounded flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">factory</span>
                            <span className="text-sm font-semibold text-[#0d131b] dark:text-slate-200">Manufacturing</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 border border-[#e7ecf3] dark:border-slate-700 p-4 rounded flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">link</span>
                            <span className="text-sm font-semibold text-[#0d131b] dark:text-slate-200">Infrastructure</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 border border-[#e7ecf3] dark:border-slate-700 p-4 rounded flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">agriculture</span>
                            <span className="text-sm font-semibold text-[#0d131b] dark:text-slate-200">Agri-processing</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 border border-[#e7ecf3] dark:border-slate-700 p-4 rounded flex items-center gap-3">
                            <span className="material-symbols-outlined text-slate-400">power</span>
                            <span className="text-sm font-semibold text-[#0d131b] dark:text-slate-200">Utilities</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Team & Advisors --> */}
            <section className="w-full flex justify-center py-12 bg-white dark:bg-slate-900 border-y border-[#e7ecf3] dark:border-slate-800 px-4">
                <div className="flex flex-col max-w-[960px] w-full px-4 md:px-10">
                    <h2 className="text-[#0d131b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-8">
                        Team &amp; Advisors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                        {/* <!-- Member 1 --> */}
                        <div className="flex flex-col gap-3">
                            <div className="w-full aspect-[3/4] bg-cover bg-center rounded bg-slate-200 dark:bg-slate-800 grayscale" data-alt="Professional headshot of Dr. Elena Rostova in business attire" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB88s0XcLyKmqJEzX6bF8_ptQfjxzsYJUF_ZPUjQlffaEgwkqF-oB2ZxqjQ1Roq21sopZaFBiKwXduwwrg8C1edb31SyfprAqGZDCC8p6Kcfdfv_WM5Q6lnG5iuYS5Z6Z8PE3Jl-pA2CM5UxSeo8JnK3ogDM0v_y2z7CqSjMhWeV223aKftvFYYUeTpX1_wTnA9US6USjMDeVKFT5fRrnUxfxz1GF03GkkvoNDTB5-PsAaUyZT3xeEKaJejGgz0lsZQIq4yzGIRzdM")' }}></div>
                            <div>
                                <p className="text-[#0d131b] dark:text-white text-base font-bold leading-normal">Dr. Elena Rostova</p>
                                <p className="text-[#136DEC] text-sm font-semibold leading-normal mb-1">Head of Carbon Markets</p>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                                    15+ years in global carbon trading and policy frameworks.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Member 2 --> */}
                        <div className="flex flex-col gap-3">
                            <div className="w-full aspect-[3/4] bg-cover bg-center rounded bg-slate-200 dark:bg-slate-800 grayscale" data-alt="Professional headshot of James Halloway in a suit" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMoH-b_oIyLcMAQ_XhKtmtSG3yojCRVcldnketvNDnn0qRfupfDAg_y3qoW8iTmiiRHqgygk0C4u0FkYJBmsX-nJWv5X_U-HhUJoE14qRhKuP03NiqyoXAHu31PQwu_zNNQwO7PwDGIMtYOuOXFpkyansZehackiioCff6pB2JmS9Wk-Zs1LRvTNRXVpCCcqD8NKmchEdGpnB1T1bDwJYWmJFizehl1bAc-dn8O5BMFANZrtPona2SIsuf0i3GN3571iOwTmhW-gI")' }}></div>
                            <div>
                                <p className="text-[#0d131b] dark:text-white text-base font-bold leading-normal">James Halloway</p>
                                <p className="text-[#136DEC] text-sm font-semibold leading-normal mb-1">Chief Investment Officer</p>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                                    Former infrastructure fund manager focusing on renewables.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Member 3 --> */}
                        <div className="flex flex-col gap-3">
                            <div className="w-full aspect-[3/4] bg-cover bg-center rounded bg-slate-200 dark:bg-slate-800 grayscale" data-alt="Professional headshot of Sarah Lin smiling slightly" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB15oiwyWvWHSxgHQ-xvoGpSQhBWQpbB02ayFNREsRmFMN7kEiOLWG3ExCK8sFf6nwV0B52cFrG2bvf3Qh9unkD4d1qOcj1HIuC-uJuqgCbfa2nr2v3C1LzFtEtbsJgMNhVCHjLdaAVnBGLMVkS3Rv7Goe7sN9Jv9j2rZdTNLcE-smeVDM-HooMHhY4NXQKFZzK_eC3Rtxf4dfjL8HXBkckPCJ01BriV6rKn1Q4-vgs-t5ydfO-hYTjdzX0T6CMXrps9siroxHybRI")' }}></div>
                            <div>
                                <p className="text-[#0d131b] dark:text-white text-base font-bold leading-normal">Sarah Lin</p>
                                <p className="text-[#136DEC] text-sm font-semibold leading-normal mb-1">Senior Technical Advisor</p>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                                    PhD in Environmental Engineering, grid systems expert.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Member 4 --> */}
                        <div className="flex flex-col gap-3">
                            <div className="w-full aspect-[3/4] bg-cover bg-center rounded bg-slate-200 dark:bg-slate-800 grayscale" data-alt="Professional headshot of Marcus Thorne" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_Lj9AvoZXwdxEs7dC3kzC9UVrvmWtwrEA2XOQHzRsBOYKBY1Eu9GxIlhzw9GfEhxhhBXq3sWLTKc0LMHQ-AG2xOTiShQA3uMjel-_RLICPqmSYH6q7S9w3XfNAQRNAHeMHOCHkRpjEz6mEEXDUc5C_RtzhQcK1fVf_jQRRjzXSrZLISQdiaX3Y618GzvN9Iob3d887pYptsOTKvv5G79gl8xLi8Ggs6nzTkGVEZG2wqKAYWttmKHdCBjBo3uGCXx_q5rwhjXM6wI")' }}></div>
                            <div>
                                <p className="text-[#0d131b] dark:text-white text-base font-bold leading-normal">Marcus Thorne</p>
                                <p className="text-[#136DEC] text-sm font-semibold leading-normal mb-1">Director of Strategy</p>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                                    Specialist in regulatory frameworks and compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Technical Partners --> */}
            <section className="w-full flex justify-center py-16 px-4">
                <div className="flex flex-col max-w-[960px] w-full px-4 md:px-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h2 className="text-[#0d131b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] whitespace-nowrap">
                            Technical Partners
                        </h2>
                        <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 opacity-60 grayscale">
                            {/* <!-- Using SVGs for crisp logos --> */}
                            <div className="h-8 w-auto">
                                <svg className="h-full w-auto text-slate-800 dark:text-white" data-alt="Abstract geometric logo of Partner A" fill="currentColor" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 15L20 5V25L10 15ZM30 5H50V25H30V5ZM60 5H70L80 25H70L60 5Z"></path>
                                </svg>
                            </div>
                            <div className="h-8 w-auto">
                                <svg className="h-full w-auto text-slate-800 dark:text-white" data-alt="Wordmark logo of Partner B" fill="currentColor" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                                    <rect height="20" rx="5" width="20" x="0" y="5"></rect>
                                    <circle cx="35" cy="15" r="10"></circle>
                                    <rect height="10" width="30" x="55" y="10"></rect>
                                </svg>
                            </div>
                            <div className="h-8 w-auto">
                                <svg className="h-full w-auto text-slate-800 dark:text-white" data-alt="Linear logo of Partner C" fill="currentColor" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 25L15 5L25 25H5ZM40 5H60V10H40V5ZM50 15H70V20H50V15ZM80 5C90 5 95 15 80 25H95" stroke="currentColor" strokeWidth="3"></path>
                                </svg>
                            </div>
                            <div className="h-8 w-auto">
                                <svg className="h-full w-auto text-slate-800 dark:text-white" data-alt="Minimalist logo of Partner D" fill="currentColor" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="8"></circle>
                                    <circle cx="40" cy="15" r="8"></circle>
                                    <circle cx="65" cy="15" r="8"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Bottom CTA --> */}
            <section className="w-full bg-white dark:bg-slate-900 border-t border-[#e7ecf3] dark:border-slate-800 py-16 px-4">
                <div className="flex flex-col items-center justify-center max-w-[960px] mx-auto text-center gap-6">
                    <h2 className="text-[#0d131b] dark:text-white text-3xl font-bold tracking-tight">Ready to optimize your portfolio?</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-lg">
                        Partner with us for rigorous carbon strategy and renewable asset development.
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-colors text-sm uppercase tracking-wide">
                        Request a Proposal
                    </button>
                </div>
            </section>
        </main>
    )
}

export default page