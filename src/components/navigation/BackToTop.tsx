'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let frame = 0;

        const handleScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                frame = 0;
                setIsVisible(window.scrollY > 300);
            });
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <a
            href="#pocetna"
            aria-label="Povratak na vrh"
            className={`back-to-top ${isVisible ? 'is-visible' : ''}`}
        >
            <ArrowUp aria-hidden="true" />
        </a>
    );
}
