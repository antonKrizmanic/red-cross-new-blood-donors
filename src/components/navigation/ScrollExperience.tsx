'use client';

import { useEffect } from 'react';

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function ScrollExperience() {
    useEffect(() => {
        const root = document.documentElement;
        const hero = document.querySelector<HTMLElement>('.hero-section');
        const panels = Array.from(
            document.querySelectorAll<HTMLElement>('main > .section-panel'),
        );
        const stickyPanels = panels.slice(0, -1);
        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;
        let scrollFrame = 0;
        let glideFrame = 0;
        let previousWidth = window.innerWidth;
        let previousHeight = window.innerHeight;

        root.classList.add('scroll-experience-ready');

        const setStickyPositions = () => {
            for (const panel of stickyPanels) {
                panel.style.position = 'sticky';
                panel.style.top = `${Math.min(
                    0,
                    window.innerHeight - panel.offsetHeight,
                )}px`;
            }
        };

        const updateScrollEffects = () => {
            scrollFrame = 0;
            const viewportHeight = window.innerHeight;

            if (hero) {
                const progress = clamp(window.scrollY / viewportHeight);
                hero.style.visibility =
                    progress >= 0.999 ? 'hidden' : 'visible';

                if (!reducedMotion) {
                    hero.style.setProperty('--cover', progress.toFixed(3));
                    hero.style.transform = `translateY(${(
                        -48 * progress
                    ).toFixed(1)}px)`;
                }
            }

            for (let index = 0; index < stickyPanels.length; index += 1) {
                const panel = stickyPanels[index];
                const nextPanel = panels[index + 1];
                if (!nextPanel) continue;

                const nextTop = nextPanel.getBoundingClientRect().top;
                const progress = clamp(
                    (viewportHeight - nextTop) / viewportHeight,
                );

                panel.style.visibility =
                    progress >= 0.999 ? 'hidden' : 'visible';
                if (!reducedMotion) {
                    panel.style.setProperty('--cover', progress.toFixed(3));
                }
            }

            for (const element of document.querySelectorAll<HTMLElement>(
                '[data-reveal]:not(.is-visible)',
            )) {
                if (
                    element.getBoundingClientRect().bottom <
                    viewportHeight * 0.88
                ) {
                    element.classList.add('is-visible');
                }
            }
        };

        const requestScrollUpdate = () => {
            if (scrollFrame) return;
            scrollFrame = window.requestAnimationFrame(updateScrollEffects);
        };

        const handleResize = () => {
            const widthDelta = Math.abs(window.innerWidth - previousWidth);
            const heightDelta = Math.abs(window.innerHeight - previousHeight);

            if (widthDelta < 2 && heightDelta < 150) return;
            previousWidth = window.innerWidth;
            previousHeight = window.innerHeight;
            setStickyPositions();
            requestScrollUpdate();
        };

        const flowTopOf = (element: HTMLElement) => {
            const section = element.closest<HTMLElement>(
                'section[id], footer[id], main[id]',
            );
            if (!section) return element.offsetTop;

            let top = 0;
            let sibling = section.previousElementSibling;

            while (sibling) {
                if (sibling instanceof HTMLElement) {
                    const styles = window.getComputedStyle(sibling);
                    top +=
                        sibling.offsetHeight +
                        Number.parseFloat(styles.marginTop) +
                        Number.parseFloat(styles.marginBottom);
                }
                sibling = sibling.previousElementSibling;
            }

            top += Number.parseFloat(
                window.getComputedStyle(section).marginTop,
            );

            if (element === section) return Math.max(0, top);

            let node = element;

            while (node && node !== section) {
                top += node.offsetTop;
                node = node.offsetParent as HTMLElement;
            }

            return Math.max(0, top);
        };

        const glideTo = (target: number) => {
            if (glideFrame) window.cancelAnimationFrame(glideFrame);
            if (reducedMotion) {
                window.scrollTo(0, target);
                return;
            }

            const start = window.scrollY;
            const distance = target - start;
            if (Math.abs(distance) < 2) return;

            const duration = Math.max(
                350,
                Math.min(950, Math.abs(distance) * 0.35),
            );
            const startedAt = performance.now();
            const previousScrollBehavior = root.style.scrollBehavior;
            root.style.scrollBehavior = 'auto';

            const step = (timestamp: number) => {
                const progress = Math.min(
                    1,
                    (timestamp - startedAt) / duration,
                );
                const eased = 1 - (1 - progress) ** 3;
                window.scrollTo(0, start + distance * eased);

                if (progress < 1) {
                    glideFrame = window.requestAnimationFrame(step);
                    return;
                }

                glideFrame = 0;
                root.style.scrollBehavior = previousScrollBehavior;
            };

            glideFrame = window.requestAnimationFrame(step);
        };

        const handleAnchorClick = (event: MouseEvent) => {
            if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const link = (event.target as Element).closest<HTMLAnchorElement>(
                'a[href^="#"]',
            );
            if (!link) return;

            const id = link.hash.slice(1);
            const target = id ? document.getElementById(id) : null;
            if (!target) return;

            event.preventDefault();
            glideTo(flowTopOf(target));
            window.history.pushState(null, '', `#${id}`);
        };

        setStickyPositions();
        updateScrollEffects();
        window.addEventListener('scroll', requestScrollUpdate, {
            passive: true,
        });
        window.addEventListener('resize', handleResize, { passive: true });
        document.addEventListener('click', handleAnchorClick);

        return () => {
            root.classList.remove('scroll-experience-ready');
            root.style.scrollBehavior = '';
            window.removeEventListener('scroll', requestScrollUpdate);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleAnchorClick);
            if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
            if (glideFrame) window.cancelAnimationFrame(glideFrame);

            if (hero) {
                hero.style.removeProperty('--cover');
                hero.style.removeProperty('transform');
                hero.style.removeProperty('visibility');
            }

            for (const panel of stickyPanels) {
                panel.style.removeProperty('--cover');
                panel.style.removeProperty('position');
                panel.style.removeProperty('top');
                panel.style.removeProperty('visibility');
            }
        };
    }, []);

    return null;
}
