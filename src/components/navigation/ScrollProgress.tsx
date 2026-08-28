'use client';

import { useEffect, useRef } from 'react';

export function ScrollProgress() {
    const indicatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frame = 0;

        const handleScroll = () => {
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                frame = 0;
                const documentHeight =
                    document.documentElement.scrollHeight - window.innerHeight;
                const progress = documentHeight
                    ? Math.min(1, window.scrollY / documentHeight)
                    : 0;
                indicatorRef.current?.style.setProperty(
                    'transform',
                    `scaleX(${progress})`,
                );
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
        <div className="scroll-progress" aria-hidden="true">
            <div ref={indicatorRef} />
        </div>
    );
}
