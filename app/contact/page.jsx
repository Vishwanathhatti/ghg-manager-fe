import React from 'react'

const page = () => {
    return (
        <main className="flex-grow">
            {/* Page Title Section */}
            <section className="bg-surface-light dark:bg-surface-dark py-16 border-b border-gray-100 dark:border-[#2a4034]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                            Partner with us for a sustainable future
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                            Get in touch with our expert consultants to discuss your carbon strategy, offset investments, and renewable energy transitions.
                        </p>
                    </div>
                </div>
            </section>
            {/* Content Split */}
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Our team is available to assist with complex inquiries regarding carbon markets and regulatory compliance. Reach out through your preferred channel.
                            </p>
                            <div className="space-y-6">
                                {/* Email */}
                                <a className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-[#203429] border border-transparent hover:border-gray-100 dark:hover:border-[#2a4034] transition-all" href="mailto:inquiries@carbonconsult.com">
                                    <div className="bg-[#17CF5A]/10 p-2.5 rounded-md text-[#17CF5A] group-hover:bg-[#17CF5A] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Email Us</p>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1 group-hover:text-[#17CF5A] transition-colors">inquiries@carbonconsult.com</p>
                                    </div>
                                </a>
                                {/* WhatsApp */}
                                <a className="flex items-start gap-4 group p-4 rounded-xl hover:bg-white dark:hover:bg-[#203429] border border-transparent hover:border-gray-100 dark:hover:border-[#2a4034] transition-all" href="https://wa.me/15550123456" target="_blank">
                                    <div className="bg-[#17CF5A]/10 p-2.5 rounded-md text-[#17CF5A] group-hover:bg-[#17CF5A] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">chat</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">WhatsApp Support</p>
                                        <p className="text-slate-600 dark:text-slate-400 mt-1 group-hover:text-[#17CF5A] transition-colors">+1 (555) 012-3456</p>
                                        <p className="text-xs text-slate-400 mt-1">Available 9am-5pm EST</p>
                                    </div>
                                </a>
                                {/* Office */}
                                <div className="flex items-start gap-4 p-4 rounded-xl">
                                    <div className="bg-[#17CF5A]/10 p-2.5 rounded-md text-[#17CF5A]">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Registered Office</p>
                                        <address className="text-slate-600 dark:text-slate-400 mt-1 not-italic leading-relaxed">
                                            123 Sustainability Blvd, Suite 400<br />
                                            Green City, NY 10012
                                        </address>
                                        <a className="inline-flex items-center gap-1 mt-2 text-[#17CF5A] text-sm font-medium hover:underline" href="#">
                                            View on Map <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Trust Signals */}
                        <div className="pt-8 border-t border-gray-200 dark:border-[#2a4034]">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Accredited &amp; Certified By</p>
                            <div className="flex flex-wrap gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                {/* ISO Logo Placeholder */}
                                <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[10px] text-slate-500 font-bold" data-alt="ISO Certification Logo">ISO 14064</div>
                                {/* VCS Logo Placeholder */}
                                <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[10px] text-slate-500 font-bold" data-alt="Verified Carbon Standard Logo">VCS STD</div>
                                {/* Gold Standard Logo Placeholder */}
                                <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[10px] text-slate-500 font-bold" data-alt="Gold Standard Logo">GOLD STD</div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Enquiry form */}
                    <div className="lg:col-span-7">
                        <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-[#2a4034] rounded-2xl p-8 lg:p-10 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us an enquiry</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Full Name */}
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Full Name</span>
                                        <input className="w-full h-12 px-4 rounded-md border border-gray-300 dark:border-[#2a4034] bg-white dark:bg-[#112117] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#17CF5A] focus:ring-1 focus:ring-[#17CF5A] focus:outline-none transition-all" placeholder="John Doe" required="" type="text" />
                                    </label>
                                    {/* Business Email */}
                                    <label className="flex flex-col gap-2">
                                        <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Business Email</span>
                                        <input className="w-full h-12 px-4 rounded-md border border-gray-300 dark:border-[#2a4034] bg-white dark:bg-[#112117] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#17CF5A] focus:ring-1 focus:ring-[#17CF5A] focus:outline-none transition-all" placeholder="john@company.com" required="" type="email" />
                                    </label>
                                </div>
                                {/* Company Name */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Company / Organization</span>
                                    <input className="w-full h-12 px-4 rounded-md border border-gray-300 dark:border-[#2a4034] bg-white dark:bg-[#112117] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#17CF5A] focus:ring-1 focus:ring-[#17CF5A] focus:outline-none transition-all" placeholder="Company Name Ltd." type="text" />
                                </label>
                                {/* Area of Interest (Select) */}
                                <label className="flex flex-col gap-2 relative">
                                    <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">Area of Interest</span>
                                    <div className="relative">
                                        <select className="w-full h-12 px-4 rounded-md border border-gray-300 dark:border-[#2a4034] bg-white dark:bg-[#112117] text-slate-900 dark:text-white focus:border-[#17CF5A] focus:ring-1 focus:ring-[#17CF5A] focus:outline-none appearance-none cursor-pointer transition-all">
                                            <option disabled="" defaultValue="" value="">Select a topic</option>
                                            <option value="carbon_credits">Carbon Credits &amp; Offsets</option>
                                            <option value="renewable">Renewable Energy Investments</option>
                                            <option value="advisory">Strategic Advisory</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                    </div>
                                </label>
                                {/* Message */}
                                <label className="flex flex-col gap-2">
                                    <span className="text-slate-900 dark:text-slate-200 text-sm font-medium">How can we help?</span>
                                    <textarea className="w-full p-4 rounded-md border border-gray-300 dark:border-[#2a4034] bg-white dark:bg-[#112117] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-[#17CF5A] focus:ring-1 focus:ring-[#17CF5A] focus:outline-none resize-none transition-all" placeholder="Please describe your inquiry..." rows="4"></textarea>
                                </label>
                                <div className="flex items-center gap-3 py-2">
                                    <input className="w-4 h-4 text-[#17CF5A] bg-white border-gray-300 rounded focus:ring-[#17CF5A] dark:focus:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" id="consent" type="checkbox" />
                                    <label className="text-sm text-slate-500 dark:text-slate-400" htmlFor="consent">
                                        I agree to CarbonConsult's <a className="text-[#17CF5A] hover:underline" href="#">Privacy Policy</a> and consent to being contacted.
                                    </label>
                                </div>
                                {/* Submit Button */}
                                <button className="w-full bg-[#17CF5A] hover:bg-green-500 text-white dark:text-[#0e1b13] font-bold text-base h-12 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm" type="submit">
                                    <span>Submit Enquiry</span>
                                    <span className="material-symbols-outlined text-[20px]">send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page