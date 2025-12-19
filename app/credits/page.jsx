import React from 'react';

const CreditsPage = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans antialiased overflow-x-hidden min-h-screen flex flex-col">
            <div className="layout-container flex h-full grow flex-col">
                <div className="w-full flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 sm:px-8">
                        {/* Page Heading */}
                        <div className="flex flex-col gap-2 py-8 md:py-12 text-center md:text-left">
                            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                Carbon Credits Marketplace
                            </h1>
                            <p className="text-green-700 dark:text-gray-400 text-lg md:text-xl font-normal leading-normal">
                                Secure transactions for Buyers and Sellers
                            </p>
                        </div>

                        {/* Main Split Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                            {/* Left Column: For Buyers */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 pb-2 border-b border-green-100 dark:border-green-900">
                                    <span className="material-symbols-outlined text-green-500">shopping_bag</span>
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">For Buyers</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {/* Card Item */}
                                    <div className="group flex items-center gap-4 rounded-xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-900 p-5 hover:border-green-500/50 hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">cloud_off</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-slate-900 dark:text-white text-base font-bold">Carbon removal credits</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">High-quality engineered removal solutions</p>
                                        </div>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-green-500 transition-colors">arrow_forward</span>
                                    </div>
                                    {/* Card Item */}
                                    <div className="group flex items-center gap-4 rounded-xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-900 p-5 hover:border-green-500/50 hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">forest</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-slate-900 dark:text-white text-base font-bold">Nature-based credits</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Forestry, agriculture, and land use</p>
                                        </div>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-green-500 transition-colors">arrow_forward</span>
                                    </div>
                                    {/* Card Item */}
                                    <div className="group flex items-center gap-4 rounded-xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-900 p-5 hover:border-green-500/50 hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">factory</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-slate-900 dark:text-white text-base font-bold">Industrial credits</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Energy efficiency and waste management</p>
                                        </div>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-green-500 transition-colors">arrow_forward</span>
                                    </div>
                                    {/* Card Item */}
                                    <div className="group flex items-center gap-4 rounded-xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-900 p-5 hover:border-green-500/50 hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">verified_user</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-slate-900 dark:text-white text-base font-bold">Due diligence and verification</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Independent audits and risk assessment</p>
                                        </div>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-green-500 transition-colors">arrow_forward</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: For Sellers */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 pb-2 border-b border-green-100 dark:border-green-900">
                                    <span className="material-symbols-outlined text-green-500">storefront</span>
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">For Sellers</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {/* Card Item */}
                                    <div className="group flex items-center gap-4 rounded-xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-900 p-5 hover:border-green-500/50 hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">how_to_reg</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-slate-900 dark:text-white text-base font-bold">Project registration support</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">End-to-end guidance for certification</p>
                                        </div>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-green-500 transition-colors">arrow_forward</span>
                                    </div>
                                    {/* Card Item */}
                                    <div className="group flex items-center gap-4 rounded-xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-900 p-5 hover:border-green-500/50 hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">science</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-slate-900 dark:text-white text-base font-bold">Methodology selection</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Aligning projects with global standards</p>
                                        </div>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-green-500 transition-colors">arrow_forward</span>
                                    </div>
                                    {/* Card Item */}
                                    <div className="group flex items-center gap-4 rounded-xl border border-green-100 dark:border-green-900 bg-white dark:bg-slate-900 p-5 hover:border-green-500/50 hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">publish</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className="text-slate-900 dark:text-white text-base font-bold">Issuance and registry onboarding</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Seamless credit generation and listing</p>
                                        </div>
                                        <span className="material-symbols-outlined ml-auto text-gray-400 group-hover:text-green-500 transition-colors">arrow_forward</span>
                                    </div>
                                    {/* Placeholder Image for Visual Balance (Using external URL provided in design) */}
                                    <div className="hidden lg:block relative h-24 mt-2 overflow-hidden rounded-xl border border-green-100 dark:border-green-900">
                                        <img
                                            alt="Abstract green leaf texture representing nature and growth"
                                            className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-700"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOajnRYTrgR5g7UZXeYb1O3laRnPLSgwEAycV7lcTNRKXIbutBiP06IpkYxLtWJmYV0JvVjv2S04zmWitXcepm9KgI2tdIoSqbU864KO_fK3o43vPLq_EfIJ4rdt8BWjaEMyCo_zPREcRonvC1bcBmJHD8roT0nnpsgEc1W-xojJPgvtcOvKd-yGd8PEuCeVPVPIFZ92n6ql5mWduxCauhgvDhfs1Eb7njZOpjRZ_-UgUHRoUj20v6b1V3hQyWh7U7lKi-tlPyRr4"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center px-6">
                                            <span className="text-white font-medium text-sm tracking-wide uppercase">Trusted by 500+ Enterprises</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Work With Us Section */}
                        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 mb-16 border border-green-100 dark:border-green-900 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                                <div className="mb-4 md:mb-0 md:w-1/4">
                                    <h2 className="text-slate-900 dark:text-white text-2xl font-black leading-tight tracking-tight">Why Work With Us</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Accelerating the transition to net zero with integrity.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-1 w-full">
                                    {/* Feature 1 */}
                                    <div className="flex flex-col gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-950/50">
                                        <div className="text-green-500">
                                            <span className="material-symbols-outlined text-3xl">shield_moon</span>
                                        </div>
                                        <h3 className="text-slate-900 dark:text-white font-bold">Quality screening</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">Rigorous vetting process ensuring high-integrity credits.</p>
                                    </div>
                                    {/* Feature 2 */}
                                    <div className="flex flex-col gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-950/50">
                                        <div className="text-green-500">
                                            <span className="material-symbols-outlined text-3xl">price_check</span>
                                        </div>
                                        <h3 className="text-slate-900 dark:text-white font-bold">Transparent pricing</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">Clear fee structures with no hidden costs for either party.</p>
                                    </div>
                                    {/* Feature 3 */}
                                    <div className="flex flex-col gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-950/50">
                                        <div className="text-green-500">
                                            <span className="material-symbols-outlined text-3xl">bolt</span>
                                        </div>
                                        <h3 className="text-slate-900 dark:text-white font-bold">Fast execution</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">Streamlined workflows to close transactions efficiently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="flex flex-col items-center justify-center gap-6 py-12 px-4 text-center border-t border-green-100 dark:border-green-900">
                            <div className="max-w-2xl">
                                <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-3">Ready to make an impact?</h2>
                                <p className="text-green-700 dark:text-gray-400 mb-8">Join the leading marketplace for carbon credits and renewable energy investments.</p>
                                <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                                    Submit your requirement
                                    <span className="material-symbols-outlined ml-2 text-xl">send</span>
                                </button>
                            </div>
                            {/* Trust Indicators */}
                            <div className="flex flex-wrap justify-center gap-6 mt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-base">verified</span> VERRA CERTIFIED
                                </div>
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-base">verified</span> GOLD STANDARD
                                </div>
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                                    <span className="material-symbols-outlined text-base">verified</span> AMERICAN CARBON REGISTRY
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditsPage;
