"use client"
import { Leaf, ChevronDown, BarChart3, Recycle, Wallet, Coins, BookOpen, Info, Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#services-dropdown-container')) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Investments', href: '/investments', icon: <Wallet size={18} /> },
        { name: 'Credits', href: '/credits', icon: <Coins size={18} /> },
        { name: 'Resources', href: '/resources', icon: <BookOpen size={18} /> },
        { name: 'About', href: '/about', icon: <Info size={18} /> },
    ];

    const serviceLinks = [
        {
            name: 'Carbon Accounting',
            href: '/services/carbon-accounting',
            description: 'Track and manage your carbon footprint accurately.',
            icon: <BarChart3 className="text-brand-green-start" size={18} />
        },
        {
            name: 'Carbon Removal',
            href: '/services/carbon-removal',
            description: 'Implement effective carbon sequestration strategies.',
            icon: <Recycle className="text-brand-green-start" size={18} />
        }
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md dark:bg-background-dark/95 dark:border-white/10">
                <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
                    <Link href="/" className="flex items-center gap-4 text-brand-slate dark:text-white group">
                        <div className="size-8 text-brand-green-start transition-transform group-hover:rotate-12">
                            <Leaf size={24} />
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight">GHG Manager</h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 items-center justify-center gap-2 lg:gap-8">
                        {/* Services Dropdown */}
                        <div className="relative" id="services-dropdown-container">
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 ${isServicesOpen || pathname.startsWith('/services')
                                        ? 'text-brand-green-start'
                                        : 'text-brand-slate/80 dark:text-white/80'
                                    }`}
                            >
                                Services
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {isServicesOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-background-dark">
                                    {serviceLinks.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            onClick={() => setIsServicesOpen(false)}
                                            className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-brand-green-start/5"
                                        >
                                            <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-green-start/10 transition-colors group-hover:bg-brand-green-start/20">
                                                {service.icon}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-brand-slate dark:text-white">{service.name}</div>
                                                <p className="mt-0.5 text-xs text-brand-slate/60 dark:text-white/40 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Regular Links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 ${pathname === link.href
                                        ? 'text-brand-green-start'
                                        : 'text-brand-slate/80 dark:text-white/80 hover:text-brand-green-start'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="hidden md:block text-sm font-medium text-brand-slate hover:text-brand-green-start dark:text-white"
                        >
                            Login
                        </Link>
                        <Link href="/contact" className="hidden sm:block">
                            <button className="flex h-10 cursor-pointer items-center justify-center rounded-full bg-brand-slate px-6 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 dark:bg-primary dark:text-brand-slate">
                                <span className="truncate">Contact Us</span>
                            </button>
                        </Link>

                        {/* Hamburger Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex size-10 items-center justify-center rounded-lg transition-colors md:hidden text-brand-slate dark:text-white"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Dropdown below navbar */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 dark:border-white/10 bg-white dark:bg-background-dark">
                        <nav className="max-w-[1280px] mx-auto px-6 py-4 space-y-1">
                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                    className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-brand-slate dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-white/5"
                                >
                                    <span>Services</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {isMobileServicesOpen && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {serviceLinks.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="block px-4 py-2 text-sm text-brand-slate/70 dark:text-white/60 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 hover:text-brand-green-start"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Regular Mobile Links */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3 text-sm font-medium rounded-lg ${pathname === link.href
                                            ? 'bg-brand-green-start/10 text-brand-green-start'
                                            : 'text-brand-slate dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Actions */}
                            <div className="pt-4 space-y-2 border-t border-gray-100 dark:border-white/10">
                                <Link
                                    href="/login"
                                    className="block px-4 py-3 text-sm font-medium text-center rounded-lg border border-gray-200 dark:border-white/10 text-brand-slate dark:text-white"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block px-4 py-3 text-sm font-bold text-center rounded-lg bg-brand-slate text-white dark:bg-primary dark:text-brand-slate"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    )
}

export default Navbar
