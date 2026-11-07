import { ArrowDown, ArrowUpRight, Plus } from 'lucide-react';
import { SplitWords } from '@/components/ui/SplitWords';
import type { FAQItem } from '@/content/page-content';
import { faqContent, faqItems } from '@/content/page-content';
import styles from './FAQSection.module.css';

function FAQLink({ link }: { link: NonNullable<FAQItem['link']> }) {
    const isExternal = link.href.startsWith('http');
    return (
        <a
            className={styles.answerLink}
            href={link.href}
            {...(isExternal && {
                target: '_blank',
                rel: 'noopener noreferrer',
            })}
        >
            {link.label}
            {isExternal ? (
                <ArrowUpRight aria-hidden="true" />
            ) : (
                <ArrowDown aria-hidden="true" />
            )}
        </a>
    );
}

export function FAQSection() {
    return (
        <section id="pitanja" className={styles.faq}>
            <div className={`container ${styles.layout}`}>
                <div className={styles.aside}>
                    <h2 className="display display--lg" data-reveal="words">
                        <SplitWords text={faqContent.title} />
                    </h2>
                    <p className="lede" data-reveal>
                        {faqContent.description}
                    </p>
                </div>

                <div className={styles.main}>
                    <div className={styles.list} data-reveal>
                        {faqItems.map((item) => (
                            <details key={item.id} className={styles.item}>
                                <summary>
                                    <span>{item.question}</span>
                                    <span className={styles.toggle}>
                                        <Plus aria-hidden="true" />
                                    </span>
                                </summary>
                                <p>{item.answer}</p>
                                {item.link && <FAQLink link={item.link} />}
                            </details>
                        ))}
                    </div>

                    <aside className={styles.cta} data-reveal="paper">
                        <h3 className="display">{faqContent.ctaTitle}</h3>
                        <p>{faqContent.ctaDescription}</p>
                        <a
                            className="button button--paper"
                            data-direction="down"
                            href="#kontakt"
                        >
                            {faqContent.ctaLabel}
                            <ArrowDown aria-hidden="true" />
                        </a>
                    </aside>
                </div>
            </div>
        </section>
    );
}
