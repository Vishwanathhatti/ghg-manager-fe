import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white py-12 dark:bg-background-dark dark:border-white/10">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6 flex items-center gap-2 text-brand-slate dark:text-white">
                            <span className="material-symbols-outlined text-brand-green-start">eco</span>
                            <span className="text-lg font-bold">GHG Manager</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Mumbai • Pune • Jalna
                        </p>
                        <div className="mt-6 flex gap-4">
                            <a className="text-gray-400 hover:text-brand-green-start" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="text-gray-400 hover:text-brand-green-start" href="#"><span className="material-symbols-outlined">mail</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-slate dark:text-white">Services</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:text-brand-green-start" href="#">Carbon Markets</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">Renewable M&amp;A</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">PPA Structuring</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">ESG Advisory</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-slate dark:text-white">Company</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:text-brand-green-start" href="#">About Us</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">Leadership</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">Careers</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-slate dark:text-white">Legal</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:text-brand-green-start" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-brand-green-start" href="#">Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-100 pt-8 text-sm text-gray-400 md:flex-row dark:border-white/5">
                    <p>© 2025 GHG Manager. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Design for enterprise sustainability.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer