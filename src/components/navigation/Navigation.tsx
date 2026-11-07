'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { navigationItems } from '@/content/page-content';
import styles from './Navigation.module.css';

const sectionIds = navigationItems.map((item) => item.href.slice(1));

export function Navigation() {
    const [activeSection, setActiveSection] = useState(sectionIds[0]);
    const [isCompact, setIsCompact] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const openButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const menuWasOpenRef = useRef(false);

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);
        let frame = 0;
        let lastY = window.scrollY;

        const update = () => {
            frame = 0;
            const y = window.scrollY;
            const marker = window.innerHeight * 0.45;
            let current = sectionIds[0];
            for (const section of sections) {
                if (section.getBoundingClientRect().top <= marker) {
                    current = section.id;
                }
            }
            setActiveSection(current);
            setIsCompact(y > 24);
            if (Math.abs(y - lastY) > 6) {
                setIsHidden(y > lastY && y > 320);
                lastY = y;
            }
        };

        const schedule = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule, { passive: true });
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen) {
            if (menuWasOpenRef.current) {
                openButtonRef.current?.focus({ preventScroll: true });
                menuWasOpenRef.current = false;
            }
            return;
        }

        menuWasOpenRef.current = true;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                return;
            }
            if (event.key !== 'Tab') return;

            const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
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
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header
                className={styles.header}
                data-compact={isCompact}
                data-hidden={isHidden && !isMenuOpen}
            >
                <a
                    href="#pocetna"
                    className={styles.brand}
                    aria-label="Crveni Križ Buje — Naslovnica"
                >
                    <Image
                        src="/logo-transparent.webp"
                        alt=""
                        width={44}
                        height={44}
                        priority
                    />
                    <span>Crveni Križ Buje</span>
                </a>

                <nav className={styles.links} aria-label="Glavna navigacija">
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.href.slice(1);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                data-featured={item.featured}
                                aria-current={isActive ? 'location' : undefined}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <button
                    ref={openButtonRef}
                    type="button"
                    className={styles.menuButton}
                    aria-label="Menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Menu aria-hidden="true" />
                </button>
            </header>

            <div
                ref={menuRef}
                id="mobile-navigation"
                className={styles.menu}
                data-open={isMenuOpen}
                inert={!isMenuOpen}
            >
                <button
                    ref={closeButtonRef}
                    type="button"
                    className={styles.closeButton}
                    aria-label="Zatvori"
                    onClick={closeMenu}
                >
                    <X aria-hidden="true" />
                </button>
                <nav aria-label="Glavna navigacija">
                    {navigationItems.map((item, index) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={closeMenu}
                            style={{ transitionDelay: `${90 + index * 45}ms` }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
