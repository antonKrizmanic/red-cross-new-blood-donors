import { Check, Clock } from 'lucide-react';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { DropShape } from '@/components/ui/DropShape';
import { EditorialIcon } from '@/components/ui/editorial-icon';
import { SplitWords } from '@/components/ui/SplitWords';
import { processContent, processSteps } from '@/content/page-content';
import styles from './ProcessSection.module.css';

export function ProcessSection() {
    return (
        <section id="proces" className={styles.process}>
            <div className={`container ${styles.layout}`}>
                <div className={styles.aside}>
                    <header className={styles.heading}>
                        <h2 className="display display--lg" data-reveal="words">
                            <SplitWords text={processContent.title} />
                        </h2>
                        <p className="lede" data-reveal>
                            {processContent.description}
                        </p>
                    </header>
                    <div className={styles.visual} data-reveal="paper">
                        <div className={styles.sun} />
                        <div className={styles.photo}>
                            <Image
                                src="/process-donor.webp"
                                alt="Ruka darivatelja tijekom darivanja krvi"
                                fill
                                sizes="(max-width: 56rem) 90vw, 38vw"
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.journey}>
                    <aside className={styles.preparation} data-reveal="paper">
                        <h3 className="display">
                            {processContent.preparationTitle}
                        </h3>
                        <ul>
                            {processContent.preparationItems.map(
                                (item, index) => (
                                    <li
                                        key={item}
                                        style={
                                            {
                                                '--tick-delay': `${300 + index * 130}ms`,
                                            } as CSSProperties
                                        }
                                    >
                                        <span className={styles.tick}>
                                            <Check aria-hidden="true" />
                                        </span>
                                        {item}
                                    </li>
                                ),
                            )}
                        </ul>
                    </aside>

                    <div className={styles.tubeWrap}>
                        <div
                            className={styles.tube}
                            aria-hidden="true"
                            data-scroll
                        >
                            <div className={styles.tubeFill} />
                            <div className={styles.tubeDropTrack}>
                                <DropShape className={styles.tubeDrop} />
                            </div>
                        </div>
                        <ol className={styles.steps}>
                            {processSteps.map((step) => (
                                <li key={step.title} data-reveal>
                                    <span className={styles.node}>
                                        <EditorialIcon name={step.icon} />
                                    </span>
                                    <div>
                                        <h3 className="display">
                                            {step.title}
                                        </h3>
                                        <p>{step.description}</p>
                                        <span className={styles.time}>
                                            <Clock aria-hidden="true" />
                                            {step.time}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
