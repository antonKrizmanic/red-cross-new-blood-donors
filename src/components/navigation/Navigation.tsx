'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Navigation() {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 100); // Prikaži navigaciju nakon 100px scrolla
            setIsScrolled(scrollTop > 50); // Dodaj pozadinu nakon 50px scrolla
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setIsMobileMenuOpen(false);
    };

    const handleMobileNavClick = (sectionId?: string) => {
        if (sectionId) {
            scrollToSection(sectionId);
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            } ${
                isScrolled
                    ? 'md:bg-white/70 md:backdrop-blur-md md:border-b md:border-gray-200/50 md:shadow-lg'
                    : 'bg-transparent'
            } ${isMobileMenuOpen ? 'bg-white' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - hidden on mobile */}
                    <div className="hidden md:flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full shring-0 flex items-center justify-center">
                            <Image
                                src="/logo-transparent.webp"
                                alt="Crveni Križ Buje"
                                width={32}
                                height={32}
                            />
                        </div>
                        <span className="font-semibold text-gray-900">
                            Crveni Križ Buje
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                        >
                            Naslovnica
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('zasto-dariti-krv')}
                            className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                        >
                            Zašto darivati
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('pridruzi')}
                            className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                        >
                            Pridruži se
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('proces')}
                            className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                        >
                            Proces
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('sljedece-akcije')}
                            className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 font-medium"
                        >
                            Sljedeće akcije
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('pitanja')}
                            className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                        >
                            Pitanja
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection('kontakt')}
                            className="text-gray-700 hover:text-red-800 transition-colors duration-200 font-medium"
                        >
                            Kontakt
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex-1 flex justify-end">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="p-2 text-gray-700 hover:text-red-800 transition-colors duration-200"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <title>Menu</title>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-[9999] bg-white transition-all duration-300 ${
                    isMobileMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Menu Content */}
                <div className="absolute inset-0 bg-white min-h-screen">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 bg-white">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full shring-0 flex items-center justify-center">
                                <Image
                                    src="/logo-transparent.webp"
                                    alt="Crveni Križ Buje"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <span className="font-semibold text-gray-900">
                                Crveni Križ Buje
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-md text-gray-700 hover:text-red-800 transition-colors duration-200"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="p-6 space-y-6 bg-white">
                        <button
                            type="button"
                            onClick={() => scrollToTop()}
                            className="w-full text-left text-2xl font-semibold text-gray-900 hover:text-red-800 transition-colors duration-200 py-4"
                        >
                            Naslovnica
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                handleMobileNavClick('zasto-dariti-krv')
                            }
                            className="w-full text-left text-2xl font-semibold text-gray-900 hover:text-red-800 transition-colors duration-200 py-4"
                        >
                            Zašto darivati
                        </button>
                        <button
                            type="button"
                            onClick={() => handleMobileNavClick('pridruzi')}
                            className="w-full text-left text-2xl font-semibold text-gray-900 hover:text-red-800 transition-colors duration-200 py-4"
                        >
                            Pridruži se
                        </button>
                        <button
                            type="button"
                            onClick={() => handleMobileNavClick('proces')}
                            className="w-full text-left text-2xl font-semibold text-gray-900 hover:text-red-800 transition-colors duration-200 py-4"
                        >
                            Proces
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                handleMobileNavClick('sljedece-akcije')
                            }
                            className="w-full text-left text-2xl font-semibold text-gray-900 hover:text-red-800 transition-colors duration-200 py-4"
                        >
                            Sljedeće akcije
                        </button>
                        <button
                            type="button"
                            onClick={() => handleMobileNavClick('pitanja')}
                            className="w-full text-left text-2xl font-semibold text-gray-900 hover:text-red-800 transition-colors duration-200 py-4"
                        >
                            Pitanja
                        </button>
                        <button
                            type="button"
                            onClick={() => handleMobileNavClick('kontakt')}
                            className="w-full text-left text-2xl font-semibold text-gray-900 hover:text-red-800 transition-colors duration-200 py-4"
                        >
                            Kontakt
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
