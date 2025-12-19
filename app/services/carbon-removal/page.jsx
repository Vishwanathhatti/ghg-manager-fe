import React from 'react';

const CarbonRemovalPage = () => {
    return (
        <div className="bg-white text-slate-900 font-sans antialiased">
            {/* Hero Section */}
            <section className="relative border-b border-gray-100 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 mb-6">
                                Biochar &amp; Carbon Removal
                            </div>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                                Biochar Project Development
                            </h1>
                            <p className="text-lg leading-8 text-slate-600 mb-8 max-w-xl">
                                End-to-end advisory for high-integrity carbon removal. We guide you through feedstock analysis, technology procurement, and credit issuance with enterprise-grade precision.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex h-12 items-center justify-center rounded-md bg-green-500 px-6 text-base font-bold text-white shadow-sm hover:bg-green-600 transition-all">
                                    Start a Project
                                </button>
                                <button className="inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-6 text-base font-medium text-slate-900 shadow-sm hover:bg-gray-50 transition-all">
                                    View Methodology
                                </button>
                            </div>
                        </div>
                        {/* Abstract Technical Graphic Representation */}
                        <div className="relative h-full min-h-[400px] w-full hidden lg:block rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <img
                                alt="Abstract data visualization of carbon networks on a dark background"
                                className="object-cover w-full h-full opacity-90"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABCKdPzN-kwKWtw5HnaPxKICxVWn_Pu9X9XhudxKf2Gp7sfHH-MVPrLXn5-RhrMIdpwp_u5c1WpM_VCwkIPQ-y5mOOcXKOrSVJTCboOV6kz76Nvw0FEfufSR7knZtrDY_UzSwkpWFC1BknHLrjxj5MmPDmiOrdV4CkKekm5t7qA28K1RT_0PUHuFtfTbLT_0r5c7s_KQPhI2r0iZjjWIEKcxOWHNAF6i_8yl7lkIFf9SXg23YfdFenIGEZ0ObNB3IkAclEYtDbyfw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg w-full max-w-xs">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-white text-xs font-mono uppercase tracking-wider">Live Metrics</span>
                                    </div>
                                    <div className="flex justify-between items-end text-white">
                                        <div>
                                            <div className="text-xs opacity-70">Sequestered Carbon</div>
                                            <div className="text-xl font-bold">12,450 tCO2e</div>
                                        </div>
                                        <span className="material-symbols-outlined text-green-500">trending_up</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why It Matters Section (Metrics & Logic) */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Why Biochar Matters</h2>
                        <p className="mt-2 text-slate-600">Based on rigorous lifecycle analysis and market data.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-green-500/30 transition-colors group">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-slate-50 text-green-500 group-hover:bg-green-500/10 transition-colors">
                                <span className="material-symbols-outlined text-3xl">hourglass_top</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Long-term Removal</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Biochar offers storage stability of over 100 years, qualifying as a permanent removal solution in high-integrity registries.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-green-500/30 transition-colors group">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-slate-50 text-green-500 group-hover:bg-green-500/10 transition-colors">
                                <span className="material-symbols-outlined text-3xl">currency_exchange</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Strong Credit Value</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Biochar Carbon Removal (BCR) credits trade at a premium in voluntary markets due to their measurability and co-benefits.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:border-green-500/30 transition-colors group">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-slate-50 text-green-500 group-hover:bg-green-500/10 transition-colors">
                                <span className="material-symbols-outlined text-3xl">agriculture</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Farmer-Friendly Scale</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Decentralized production models allow for seamless integration into existing agricultural operations without massive infrastructure overhaul.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section (Vertical Framework) */}
            <section className="py-20 bg-slate-50 border-y border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
                        {/* Section Header Sticky */}
                        <div className="lg:sticky lg:top-24 h-fit">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">What We Build</h2>
                            <p className="text-slate-600 mb-8 max-w-sm">
                                We deploy a rigorous, four-stage development cycle to ensure project viability and credit integrity.
                            </p>
                            <a className="inline-flex items-center text-green-500 font-bold hover:text-green-600 transition-colors group" href="#">
                                Explore full methodology
                                <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
                            </a>
                        </div>
                        {/* Vertical Process List */}
                        <div className="space-y-6 relative">
                            {/* Vertical Line Connector */}
                            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200 hidden sm:block"></div>
                            {/* Step 1 */}
                            <div className="relative flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm z-10">
                                <div className="hidden sm:flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-green-500 text-green-500 font-bold z-10">
                                    01
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="sm:hidden text-green-500 font-bold">01.</span>
                                        <h3 className="text-xl font-bold text-slate-900">Feedstock Analysis</h3>
                                    </div>
                                    <p className="text-slate-600 mb-4">
                                        Comprehensive assessment of biomass availability, moisture content, and chemical composition. We conduct sustainability verification to ensure no negative impact on soil health or food systems.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Biomass sourcing</li>
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Lab testing</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="relative flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm z-10">
                                <div className="hidden sm:flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-slate-400 font-bold z-10">
                                    02
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="sm:hidden text-slate-500 font-bold">02.</span>
                                        <h3 className="text-xl font-bold text-slate-900">Kiln Procurement Support</h3>
                                    </div>
                                    <p className="text-slate-600 mb-4">
                                        Technical due diligence on pyrolysis technology. We handle vendor management, selecting kilns optimized for your specific feedstock and operational scale.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Technology selection</li>
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> CAPEX modeling</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="relative flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm z-10">
                                <div className="hidden sm:flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-slate-400 font-bold z-10">
                                    03
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="sm:hidden text-slate-500 font-bold">03.</span>
                                        <h3 className="text-xl font-bold text-slate-900">MRV Design</h3>
                                    </div>
                                    <p className="text-slate-600 mb-4">
                                        Establishing robust Measurement, Reporting, and Verification (MRV) protocols. We select the appropriate methodology (e.g., Puro.earth, Verra) and perform full Life-Cycle Assessments (LCA).
                                    </p>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Methodology alignment</li>
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Digital monitoring</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="relative flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm z-10">
                                <div className="hidden sm:flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-slate-400 font-bold z-10">
                                    04
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="sm:hidden text-slate-500 font-bold">04.</span>
                                        <h3 className="text-xl font-bold text-slate-900">Credit Issuance Processes</h3>
                                    </div>
                                    <p className="text-slate-600 mb-4">
                                        Finalizing the path to revenue. We manage registry account setup, validation audits, and the execution of credit issuance and sales.
                                    </p>
                                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Audit coordination</li>
                                        <li className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-lg">check_circle</span> Registry listing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes & For Whom Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* For Whom */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">For Whom</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-4 p-4 rounded-md border border-gray-100 bg-gray-50">
                                    <span className="material-symbols-outlined text-slate-500">agriculture</span>
                                    <span className="font-semibold text-slate-900">Farmers</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-md border border-gray-100 bg-gray-50">
                                    <span className="material-symbols-outlined text-slate-500">public</span>
                                    <span className="font-semibold text-slate-900">NGOs</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-md border border-gray-100 bg-gray-50">
                                    <span className="material-symbols-outlined text-slate-500">factory</span>
                                    <span className="font-semibold text-slate-900">Agro-industries</span>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-md border border-gray-100 bg-gray-50">
                                    <span className="material-symbols-outlined text-slate-500">account_balance</span>
                                    <span className="font-semibold text-slate-900">Municipal bodies</span>
                                </div>
                            </div>
                        </div>
                        {/* Outcomes */}
                        <div className="bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold tracking-tight mb-6">Key Outcomes</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                                            <span className="material-symbols-outlined text-green-500">verified</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Verified Credits</h4>
                                            <p className="text-slate-400 text-sm mt-1">Issuance of high-quality CO2 Removal Certificates (CORCs) tradable on global markets.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20">
                                            <span className="material-symbols-outlined text-green-500">payments</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">New Revenue Streams</h4>
                                            <p className="text-slate-400 text-sm mt-1">Diversified income for agricultural partners through carbon finance and biochar soil amendment sales.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative background element */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="border-t border-gray-100 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">Ready to deploy infrastructure?</h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-8">
                        Partner with us to navigate the complexities of biochar project development and unlock the value of carbon removal.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-md bg-green-500 px-8 text-base font-bold text-white shadow-md hover:bg-green-600 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500">
                            Partner with us
                        </button>
                        <button className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-base font-medium text-slate-700 shadow-sm hover:bg-gray-50 transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarbonRemovalPage;