import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { EditorialIcon } from '@/components/ui/editorial-icon';
import { benefits, whyDonateContent } from '@/content/page-content';

export function WhyDonateSection() {
    return (
        <section id="zasto-dariti-krv" className="section-panel section-red">
            <div
                className="section-symbol section-symbol--right"
                aria-hidden="true"
            >
                +
            </div>
            <div className="section-container">
                <header className="section-heading section-heading--split">
                    <div data-reveal>
                        <p className="eyebrow eyebrow--light">
                            <span />
                            01
                        </p>
                        <h2 className="display-title display-title--light">
                            {whyDonateContent.title}
                        </h2>
                    </div>
                    <p
                        className="section-intro section-intro--light"
                        data-reveal
                    >
                        {whyDonateContent.description}
                    </p>
                </header>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <article
                            key={benefit.title}
                            className="benefit-card"
                            data-reveal
                            style={
                                {
                                    '--reveal-delay': `${index * 80}ms`,
                                } as CSSProperties
                            }
                        >
                            <div className="benefit-card__top">
                                <span className="benefit-card__number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <EditorialIcon
                                    name={benefit.icon}
                                    className="benefit-card__icon"
                                />
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                            {benefit.link && (
                                <a
                                    href={benefit.link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {benefit.link.label}
                                    <ArrowUpRight aria-hidden="true" />
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
