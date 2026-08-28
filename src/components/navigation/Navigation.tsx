'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { navigationItems } from '@/content/page-content';

const sectionIds = navigationItems.map((item) => item.href.slice(1));

export function Navigation() {
    const [activeSection, setActiveSection] = useState('pocetna');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const menuWasOpenRef = useRef(false);

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);
        let frame = 0;

        const updateActiveSection = () => {
            frame = 0;
            const marker = window.innerHeight * 0.5;
            let nextActiveSection = sectionIds[0];

            for (let index = 0; index < sections.length; index += 1) {
                const section = sections[index];
                const bounds = section.getBoundingClientRect();
                const nextTop =
                    sections[index + 1]?.getBoundingClientRect().top ??
                    Number.POSITIVE_INFINITY;

                if (
                    bounds.top <= marker &&
                    bounds.bottom > marker &&
                    nextTop > marker
                ) {
                    nextActiveSection = section.id;
                }
            }

            setActiveSection((current) =>
                current === nextActiveSection ? current : nextActiveSection,
            );
        };

        const handleScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(updateActiveSection);
        };

        updateActiveSection();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) {
            if (menuWasOpenRef.current) {
                menuButtonRef.current?.focus();
                menuWasOpenRef.current = false;
            }
            return;
        }

        menuWasOpenRef.current = true;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const focusTimeout = window.setTimeout(() => {
            closeButtonRef.current?.focus();
        }, 50);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
                return;
            }

            if (event.key !== 'Tab') return;
            const menu = document.getElementById('mobile-navigation');
            const focusable = menu?.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled])',
            );
            if (!focusable?.length) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            window.clearTimeout(focusTimeout);
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMobileMenuOpen]);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a
                    href="#pocetna"
                    className="brand-lockup"
                    aria-label="Crveni Križ Buje — Naslovnica"
                >
                    <span className="brand-lockup__mark">
                        <Image
                            src="/logo-transparent.webp"
                            alt="Crveni Križ Buje"
                            width={64}
                            height={64}
                            priority
                        />
                    </span>
                    <span className="brand-lockup__name">Crveni Križ Buje</span>
                </a>

                <nav className="pill-navigation" aria-label="Glavna navigacija">
                    {navigationItems.map((item) => {
                        const id = item.href.slice(1);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`${
                                    activeSection === id ? 'is-active' : ''
                                } ${item.featured ? 'is-featured' : ''}`}
                                aria-current={
                                    activeSection === id ? 'page' : undefined
                                }
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <button
                    ref={menuButtonRef}
                    type="button"
                    className="menu-trigger"
                    aria-label="Menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu aria-hidden="true" />
                </button>
            </div>

            <div
                id="mobile-navigation"
                className={`mobile-navigation ${
                    isMobileMenuOpen ? 'is-open' : ''
                }`}
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="mobile-navigation__top">
                    <div className="brand-lockup brand-lockup--light">
                        <span className="brand-lockup__mark">
                            <Image
                                src="/logo-transparent.webp"
                                alt="Crveni Križ Buje"
                                width={64}
                                height={64}
                            />
                        </span>
                        <span className="brand-lockup__name">
                            Crveni Križ Buje
                        </span>
                    </div>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="menu-close"
                        aria-label="Zatvori"
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                        onClick={closeMenu}
                    >
                        <X aria-hidden="true" />
                    </button>
                </div>

                <nav
                    className="mobile-navigation__links"
                    aria-label="Glavna navigacija"
                >
                    {navigationItems.map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={item.featured ? 'is-featured' : ''}
                            onClick={closeMenu}
                            tabIndex={isMobileMenuOpen ? 0 : -1}
                        >
                            <span>{String(index + 1).padStart(2, '0')}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
