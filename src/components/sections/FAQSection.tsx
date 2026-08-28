'use client';

import { ArrowRight, Plus } from 'lucide-react';
import { useState } from 'react';
import { faqContent, faqItems } from '@/content/page-content';

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (id: number) => {
        setOpenItems((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id],
        );
    };

    return (
        <section
            id="pitanja"
            className="section-panel section-paper field-guide-lifeline field-guide-lifeline--red"
        >
            <div
                className="section-symbol section-symbol--right"
                aria-hidden="true"
            >
                +
            </div>
            <div className="section-container section-container--narrow">
                <header className="section-heading section-heading--split">
                    <div data-reveal>
                        <p className="eyebrow">
                            <span />
                            05
                        </p>
                        <h2 className="display-title">{faqContent.title}</h2>
                    </div>
                    <p className="section-intro" data-reveal>
                        {faqContent.description}
                    </p>
                </header>

                <div className="faq-list" data-reveal>
                    {faqItems.map((item, index) => {
                        const isOpen = openItems.includes(item.id);
                        const questionId = `faq-question-${item.id}`;
                        const answerId = `faq-answer-${item.id}`;
                        return (
                            <article
                                key={item.id}
                                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                            >
                                <button
                                    id={questionId}
                                    type="button"
                                    onClick={() => toggleItem(item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                >
                                    <span className="faq-item__number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="faq-item__question">
                                        {item.question}
                                    </span>
                                    <span className="faq-item__toggle">
                                        <Plus aria-hidden="true" />
                                    </span>
                                </button>
                                <section
                                    id={answerId}
                                    className="faq-item__answer"
                                    aria-labelledby={questionId}
                                    aria-hidden={!isOpen}
                                >
                                    <div>
                                        <p>{item.answer}</p>
                                    </div>
                                </section>
                            </article>
                        );
                    })}
                </div>

                <aside className="faq-cta" data-reveal>
                    <div>
                        <span className="faq-cta__mark" aria-hidden="true">
                            +
                        </span>
                        <h3>{faqContent.ctaTitle}</h3>
                        <p>{faqContent.ctaDescription}</p>
                    </div>
                    <a
                        className="editorial-button editorial-button--paper"
                        href="#kontakt"
                    >
                        {faqContent.ctaLabel}
                        <ArrowRight aria-hidden="true" />
                    </a>
                </aside>
            </div>
        </section>
    );
}
