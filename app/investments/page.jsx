import React from 'react';

const InvestmentsPage = () => {
    return (
        <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col font-sans">
            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5 px-4 lg:px-20 xl:px-40">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-8">
                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between items-end gap-3 p-4 border-b border-slate-200 pb-6">
                            <div className="flex min-w-72 flex-col gap-3">
                                <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em]">Renewable Project Investments</h1>
                                <p className="text-slate-500 text-base font-normal leading-normal max-w-2xl">
                                    Access qualified operational and ready-to-build (RTB) assets. Review metrics, analyze risks, and request data rooms directly through our secure platform.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-medium hover:bg-slate-50">
                                    <span className="material-symbols-outlined text-[20px] mr-2">download</span>
                                    Market Report
                                </button>
                                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-[20px] mr-2">add</span>
                                    List an Asset
                                </button>
                            </div>
                        </div>

                        {/* Section A: Operational Solar Assets */}
                        <section className="flex flex-col gap-4">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em]">Operational Solar Assets</h2>
                                <div className="flex gap-2">
                                    <button className="p-2 text-slate-500 hover:text-green-500">
                                        <span className="material-symbols-outlined">filter_list</span>
                                    </button>
                                    <button className="p-2 text-slate-500 hover:text-green-500">
                                        <span className="material-symbols-outlined">sort</span>
                                    </button>
                                </div>
                            </div>
                            <div className="px-4 py-2 @container">
                                <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                                    <div className="w-full overflow-x-auto">
                                        <table className="w-full min-w-[900px] text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50 border-b border-slate-200">
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">Asset Name</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[120px]">Capacity</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">Location</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[100px]">COD</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">PPA Type</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[120px]">IRR Range</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-[120px]">Ticket Size</th>
                                                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right w-[180px]">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200">
                                                {/* Row 1 */}
                                                <tr className="hover:bg-slate-50 transition-colors group">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                                                                <span className="material-symbols-outlined text-lg">sunny</span>
                                                            </div>
                                                            <span className="font-medium text-slate-900">Solar Farm Alpha</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-semibold">50 MW</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">Rajasthan, IN</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">2021</td>
                                                    <td className="px-6 py-4 text-sm">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                                            Corporate PPA
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">11-13%</td>
                                                    <td className="px-6 py-4 text-sm text-slate-900">$15M</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-green-500 hover:text-green-600 text-sm font-bold tracking-wide hover:underline focus:outline-none">
                                                            Request Data Room
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 2 */}
                                                <tr className="hover:bg-slate-50 transition-colors group">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                                                                <span className="material-symbols-outlined text-lg">sunny</span>
                                                            </div>
                                                            <span className="font-medium text-slate-900">Project Helios</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-semibold">32 MW</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">Karnataka, IN</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">2020</td>
                                                    <td className="px-6 py-4 text-sm">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                                                            Utility PPA
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">10-12%</td>
                                                    <td className="px-6 py-4 text-sm text-slate-900">$10M</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-green-500 hover:text-green-600 text-sm font-bold tracking-wide hover:underline focus:outline-none">
                                                            Request Data Room
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 3 */}
                                                <tr className="hover:bg-slate-50 transition-colors group">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                                                                <span className="material-symbols-outlined text-lg">sunny</span>
                                                            </div>
                                                            <span className="font-medium text-slate-900">Desert Sun IV</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-semibold">100 MW</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">Arizona, US</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">2022</td>
                                                    <td className="px-6 py-4 text-sm">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700">
                                                            Merchant
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">12-14%</td>
                                                    <td className="px-6 py-4 text-sm text-slate-900">$45M</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-green-500 hover:text-green-600 text-sm font-bold tracking-wide hover:underline focus:outline-none">
                                                            Request Data Room
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Row 4 */}
                                                <tr className="hover:bg-slate-50 transition-colors group">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-8 w-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center mr-3">
                                                                <span className="material-symbols-outlined text-lg">sunny</span>
                                                            </div>
                                                            <span className="font-medium text-slate-900">Coastal Ray</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-semibold">15 MW</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">Valencia, ES</td>
                                                    <td className="px-6 py-4 text-sm text-slate-500">2019</td>
                                                    <td className="px-6 py-4 text-sm">
                                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                                                            FIT
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">9-11%</td>
                                                    <td className="px-6 py-4 text-sm text-slate-900">$8M</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-green-500 hover:text-green-600 text-sm font-bold tracking-wide hover:underline focus:outline-none">
                                                            Request Data Room
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section B: Ready-to-Build (RTB) Opportunities */}
                        <section className="flex flex-col gap-6 mt-4">
                            <div className="px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em]">Ready-to-Build (RTB) Projects</h2>
                                {/* Segmented Control */}
                                <div className="inline-flex bg-slate-200/50 p-1 rounded-lg">
                                    <button className="px-4 py-1.5 rounded-md text-sm font-semibold text-slate-900 bg-white shadow-sm transition-all">RTB Solar</button>
                                    <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900 transition-all cursor-not-allowed opacity-60">RTB Wind <span className="text-[10px] ml-1 bg-gray-200 px-1 rounded">Soon</span></button>
                                    <button className="px-4 py-1.5 rounded-md text-sm font-medium text-slate-500 hover:text-slate-900 transition-all cursor-not-allowed opacity-60">Hybrid <span className="text-[10px] ml-1 bg-gray-200 px-1 rounded">Soon</span></button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                                {/* Card 1 */}
                                <div className="flex flex-col rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden">
                                    <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-start bg-gradient-to-r from-white to-green-50">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-slate-900 text-lg">Project Gamma</h3>
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700 tracking-wide">Verified</span>
                                            </div>
                                            <div className="flex items-center text-slate-500 text-sm gap-1">
                                                <span className="material-symbols-outlined text-base">location_on</span>
                                                Andhra Pradesh, IN
                                            </div>
                                        </div>
                                        <div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-green-500">solar_power</span>
                                        </div>
                                    </div>
                                    <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-2">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Land Status</span>
                                            <span className="text-sm font-semibold text-slate-900 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                                100% Acquired
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Evacuation</span>
                                            <span className="text-sm font-semibold text-slate-900">Grid Conn. Secured</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Exp. IRR</span>
                                            <span className="text-sm font-semibold text-green-500">14-16%</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Capex</span>
                                            <span className="text-sm font-semibold text-slate-900">$1.2M / MW</span>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4 bg-slate-50/50 border-t border-slate-200 mt-auto">
                                        <button className="w-full flex items-center justify-center rounded-lg h-9 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-bold hover:bg-slate-50 hover:border-green-500/50 transition-colors">
                                            View Teaser
                                        </button>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="flex flex-col rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden">
                                    <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-start bg-gradient-to-r from-white to-green-50">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-slate-900 text-lg">Project Delta</h3>
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-yellow-100 text-yellow-700 tracking-wide">Negotiating</span>
                                            </div>
                                            <div className="flex items-center text-slate-500 text-sm gap-1">
                                                <span className="material-symbols-outlined text-base">location_on</span>
                                                Texas, US
                                            </div>
                                        </div>
                                        <div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-green-500">solar_power</span>
                                        </div>
                                    </div>
                                    <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-2">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Land Status</span>
                                            <span className="text-sm font-semibold text-slate-900">Lease Signed</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Evacuation</span>
                                            <span className="text-sm font-semibold text-slate-900">Study Complete</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Exp. IRR</span>
                                            <span className="text-sm font-semibold text-green-500">13-15%</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Capex</span>
                                            <span className="text-sm font-semibold text-slate-900">$0.9M / MW</span>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4 bg-slate-50/50 border-t border-slate-200 mt-auto">
                                        <button className="w-full flex items-center justify-center rounded-lg h-9 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-bold hover:bg-slate-50 hover:border-green-500/50 transition-colors">
                                            View Teaser
                                        </button>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="flex flex-col rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow duration-200 overflow-hidden">
                                    <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-start bg-gradient-to-r from-white to-green-50">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-slate-900 text-lg">Project Epsilon</h3>
                                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700 tracking-wide">Verified</span>
                                            </div>
                                            <div className="flex items-center text-slate-500 text-sm gap-1">
                                                <span className="material-symbols-outlined text-base">location_on</span>
                                                Sicily, IT
                                            </div>
                                        </div>
                                        <div className="h-10 w-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                                            <span className="material-symbols-outlined text-green-500">solar_power</span>
                                        </div>
                                    </div>
                                    <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-2">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Land Status</span>
                                            <span className="text-sm font-semibold text-slate-900">Owned</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Evacuation</span>
                                            <span className="text-sm font-semibold text-slate-900">Approved</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Exp. IRR</span>
                                            <span className="text-sm font-semibold text-green-500">10-12%</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-slate-500 uppercase font-medium">Capex</span>
                                            <span className="text-sm font-semibold text-slate-900">€0.75M / MW</span>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4 bg-slate-50/50 border-t border-slate-200 mt-auto">
                                        <button className="w-full flex items-center justify-center rounded-lg h-9 px-4 bg-white border border-slate-200 text-slate-900 text-sm font-bold hover:bg-slate-50 hover:border-green-500/50 transition-colors">
                                            View Teaser
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section C: Developer Services */}
                        <section className="flex flex-col gap-6 mt-6">
                            <h2 className="text-slate-900 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4">Developer Services</h2>
                            <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Service 1 */}
                                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500/30 transition-colors">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">real_estate_agent</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm mb-1">SPV Sale Advisory</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">End-to-end support for selling project SPVs to global investors.</p>
                                    </div>
                                </div>
                                {/* Service 2 */}
                                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500/30 transition-colors">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">attach_money</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm mb-1">Capital Raise Support</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">Structuring equity and debt financing for greenfield projects.</p>
                                    </div>
                                </div>
                                {/* Service 3 */}
                                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500/30 transition-colors">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">fact_check</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm mb-1">Due Diligence</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">Technical and financial vetting of assets for bankability.</p>
                                    </div>
                                </div>
                                {/* Service 4 */}
                                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500/30 transition-colors">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">handshake</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm mb-1">PPA Brokerage</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">Connecting generators with credit-worthy corporate off-takers.</p>
                                    </div>
                                </div>
                                {/* Service 5 */}
                                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500/30 transition-colors">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">engineering</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm mb-1">EPC Evaluation</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">Vendor selection and contract negotiation for construction.</p>
                                    </div>
                                </div>
                                {/* Service 6 */}
                                <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-green-500/30 transition-colors">
                                    <div className="flex-shrink-0 size-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">calculate</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-sm mb-1">Financial Modelling</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">Detailed cash flow projections and sensitivity analysis.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section D: Investor Onboarding Form */}
                        <section className="flex flex-col gap-6 mt-8 mb-12">
                            <div className="px-4">
                                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                                        <h2 className="text-slate-900 text-lg font-bold leading-tight">Investor Onboarding</h2>
                                        <p className="text-slate-500 text-sm">Tell us your investment criteria to get matched with exclusive deal flow.</p>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <form className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                            {/* Ticket Size */}
                                            <div className="md:col-span-6 flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-900">Ticket Size Preference</label>
                                                <div className="flex items-center gap-2">
                                                    <input className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 text-sm p-2.5 focus:border-green-500 focus:ring-1 focus:ring-green-500" placeholder="Min $1M" type="text" />
                                                    <span className="text-slate-500">-</span>
                                                    <input className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 text-sm p-2.5 focus:border-green-500 focus:ring-1 focus:ring-green-500" placeholder="Max $100M" type="text" />
                                                </div>
                                            </div>
                                            {/* Asset Type */}
                                            <div className="md:col-span-6 flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-900">Preferred Asset Type</label>
                                                <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 text-sm p-2.5 focus:border-green-500 focus:ring-1 focus:ring-green-500" defaultValue="Select Asset Class...">
                                                    <option>Select Asset Class...</option>
                                                    <option>Solar PV (Utility Scale)</option>
                                                    <option>Onshore Wind</option>
                                                    <option>Energy Storage (BESS)</option>
                                                    <option>Hybrid Systems</option>
                                                </select>
                                            </div>
                                            {/* IRR Expectation */}
                                            <div className="md:col-span-4 flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-900">Min. IRR Expectation (%)</label>
                                                <div className="relative">
                                                    <input className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 text-sm p-2.5 pl-3 pr-8 focus:border-green-500 focus:ring-1 focus:ring-green-500" placeholder="e.g. 10" type="number" />
                                                    <span className="absolute right-3 top-2.5 text-slate-500 text-sm">%</span>
                                                </div>
                                            </div>
                                            {/* Location Preference */}
                                            <div className="md:col-span-4 flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-900">Geography</label>
                                                <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 text-sm p-2.5 focus:border-green-500 focus:ring-1 focus:ring-green-500" defaultValue="Global">
                                                    <option>Global</option>
                                                    <option>North America</option>
                                                    <option>Europe</option>
                                                    <option>Asia Pacific</option>
                                                    <option>Emerging Markets</option>
                                                </select>
                                            </div>
                                            {/* Investment Horizon */}
                                            <div className="md:col-span-4 flex flex-col gap-2">
                                                <label className="text-sm font-semibold text-slate-900">Investment Horizon</label>
                                                <select className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 text-sm p-2.5 focus:border-green-500 focus:ring-1 focus:ring-green-500" defaultValue="Medium Term (3-7 Years)">
                                                    <option>Short Term (&lt; 3 Years)</option>
                                                    <option>Medium Term (3-7 Years)</option>
                                                    <option>Long Term (7+ Years)</option>
                                                    <option>Perpetual</option>
                                                </select>
                                            </div>
                                            <div className="md:col-span-12 pt-2 flex justify-end border-t border-slate-200 mt-2">
                                                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-green-500 hover:bg-green-600 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm" type="button">
                                                    Save Criteria
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentsPage;
