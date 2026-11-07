'use client';

import { useEffect } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * The page's only animation script.
 *  - `[data-reveal]` gets `is-visible` as it enters the viewport.
 *  - `[data-trigger]` gets `is-visible` once it reaches mid-screen. If it is
 *    already above the viewport, its animation skips straight to the end.
 *  - `[data-scroll]` gets its progress through the viewport written to `--p`.
 */
export function MotionDirector() {
    useEffect(() => {
        const revealItems = document.querySelectorAll('[data-reveal]');

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            for (const item of revealItems) item.classList.add('is-visible');
            return;
        }

        const revealObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            },
            { rootMargin: '0px 0px -8% 0px' },
        );
        for (const item of revealItems) revealObserver.observe(item);

        const triggerObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const isAbove = entry.boundingClientRect.top < 0;
                    if (!entry.isIntersecting && !isAbove) continue;

                    entry.target.classList.add('is-visible');
                    triggerObserver.unobserve(entry.target);
                    if (isAbove) {
                        const animations = entry.target.getAnimations({
                            subtree: true,
                        });
                        for (const animation of animations) animation.finish();
                    }
                }
            },
            { rootMargin: '0px 0px -50% 0px' },
        );
        for (const element of document.querySelectorAll('[data-trigger]')) {
            triggerObserver.observe(element);
        }

        const nearViewport = new Set<HTMLElement>();
        let frame = 0;

        const update = () => {
            frame = 0;
            const viewport = window.innerHeight;
            for (const element of nearViewport) {
                const { top, height } = element.getBoundingClientRect();
                const progress = (viewport - top) / (viewport + height);
                element.style.setProperty('--p', clamp(progress).toFixed(4));
            }
        };

        const schedule = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };

        const scrollObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const element = entry.target as HTMLElement;
                    if (entry.isIntersecting) nearViewport.add(element);
                    else nearViewport.delete(element);
                }
                schedule();
            },
            { rootMargin: '25% 0px' },
        );
        const tracked = document.querySelectorAll<HTMLElement>('[data-scroll]');
        for (const element of tracked) {
            // Start from the true position so nothing flashes its final state.
            element.style.setProperty('--p', '0');
            scrollObserver.observe(element);
        }

        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule, { passive: true });

        return () => {
            revealObserver.disconnect();
            triggerObserver.disconnect();
            scrollObserver.disconnect();
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    return null;
}
