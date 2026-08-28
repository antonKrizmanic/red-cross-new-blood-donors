import { Check, Clock } from 'lucide-react';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { EditorialIcon } from '@/components/ui/editorial-icon';
import { processContent, processSteps } from '@/content/page-content';

export function ProcessSection() {
    return (
        <section
            id="proces"
            className="section-panel section-paper process-section field-guide-lifeline field-guide-lifeline--red"
        >
            <div className="section-container">
                <header className="section-heading section-heading--split">
                    <div data-reveal>
                        <p className="eyebrow">
                            <span />
                            03
                        </p>
                        <h2 className="display-title">
                            {processContent.title}
                        </h2>
                    </div>
                    <p className="section-intro" data-reveal>
                        {processContent.description}
                    </p>
                </header>

                <div className="process-layout">
                    <div className="process-visual" data-reveal>
                        <div className="process-visual__frame">
                            <Image
                                src="/process-donor.webp"
                                alt="Medical process steps guide"
                                fill
                                sizes="(max-width: 900px) 92vw, 46vw"
                                className="process-visual__image"
                            />
                            <div
                                className="process-visual__index"
                                aria-hidden="true"
                            >
                                03
                            </div>
                        </div>
                    </div>

                    <div className="process-content">
                        <ol className="process-steps">
                            {processSteps.map((step, index) => (
                                <li
                                    key={step.title}
                                    data-reveal
                                    style={
                                        {
                                            '--reveal-delay': `${index * 90}ms`,
                                        } as CSSProperties
                                    }
                                >
                                    <span className="process-step__number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="process-step__icon">
                                        <EditorialIcon name={step.icon} />
                                    </span>
                                    <div className="process-step__copy">
                                        <div>
                                            <h3>{step.title}</h3>
                                            <span className="time-chip">
                                                <Clock aria-hidden="true" />
                                                {step.time}
                                            </span>
                                        </div>
                                        <p>{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>

                        <aside className="preparation-panel" data-reveal>
                            <h3>{processContent.preparationTitle}</h3>
                            <ul>
                                {processContent.preparationItems.map((item) => (
                                    <li key={item}>
                                        <Check aria-hidden="true" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}
