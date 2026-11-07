import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { BenefitIllustration } from '@/components/illustrations/BenefitIllustration';
import { DropShape } from '@/components/ui/DropShape';
import { benefits, whyDonateContent } from '@/content/page-content';
import styles from './WhyDonateSection.module.css';

const tilts = ['-2.5deg', '2deg', '1.5deg', '-2deg'];

export function WhyDonateSection() {
    return (
        <section className={styles.why}>
            {/* Plays once on arrival: one drop falls and fills the section. */}
            <div id="zasto-dariti-krv" className={styles.portal} data-trigger>
                <DropShape className={styles.drop} />
                <header className={`container ${styles.heading}`}>
                    <h2 className="display display--lg">
                        {whyDonateContent.title}
                    </h2>
                    <p className="lede">{whyDonateContent.description}</p>
                </header>
            </div>

            <div className={`container ${styles.posters}`}>
                {benefits.map((benefit, index) => (
                    <article
                        key={benefit.title}
                        className={styles.poster}
                        data-reveal="paper"
                        style={
                            {
                                '--reveal-rotate': tilts[index],
                                '--reveal-delay': `${(index % 2) * 90}ms`,
                            } as CSSProperties
                        }
                    >
                        <BenefitIllustration
                            icon={benefit.icon}
                            className={styles.art}
                        />
                        <div className={styles.text}>
                            <h3 className="display">{benefit.title}</h3>
                            <p>{benefit.description}</p>
                            {benefit.link && (
                                <a
                                    href={benefit.link.href}
                                    className={styles.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {benefit.link.label}
                                    <ArrowUpRight aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
