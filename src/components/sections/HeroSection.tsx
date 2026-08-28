import { ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { heroContent } from '@/content/page-content';

export function HeroSection() {
    const [titleLead, titleAccent] = heroContent.title.split(', ');

    return (
        <section id="pocetna" className="hero-section">
            <div className="hero-section__inner">
                <header className="hero-masthead" data-reveal>
                    <p className="eyebrow">
                        <span />
                        Crveni Križ Buje
                    </p>
                    <h1 className="display-title hero-title">
                        <span>{titleLead},</span>
                        <span className="accent">{titleAccent}</span>
                    </h1>
                </header>

                <div className="hero-visual" data-reveal="delay-1">
                    <div className="hero-visual__frame">
                        <Image
                            src="/hero-donor.webp"
                            alt="Darivanje krvi u svijetloj transfuzijskoj ambulanti"
                            fill
                            priority
                            sizes="(max-width: 760px) 94vw, (max-width: 1200px) 92vw, 1280px"
                            className="hero-visual__image"
                        />
                        <div className="hero-visual__pulse" aria-hidden="true">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>

                <div className="hero-copy" data-reveal>
                    <p className="hero-description">
                        {heroContent.description}
                    </p>
                    <div className="hero-actions">
                        <a
                            className="editorial-button editorial-button--red"
                            href={heroContent.primaryCta.href}
                        >
                            {heroContent.primaryCta.label}
                            <ArrowRight aria-hidden="true" />
                        </a>
                        <a
                            className="editorial-button editorial-button--ink"
                            href={heroContent.secondaryCta.href}
                        >
                            {heroContent.secondaryCta.label}
                            <ArrowDown aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>

            <a className="hero-scroll" href="#zasto-dariti-krv">
                <span aria-hidden="true">01</span>
                <ArrowDown aria-hidden="true" />
            </a>
        </section>
    );
}
