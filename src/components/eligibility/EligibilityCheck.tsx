'use client';

import { ArrowDown, ArrowLeft, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { DropShape } from '@/components/ui/DropShape';
import {
    eligibilityContent as content,
    eligibilityQuestions as questions,
} from '@/content/page-content';
import styles from './EligibilityCheck.module.css';

/**
 * Answers stay in this component's state: they are never stored or sent.
 * The question order and rules live in page-content.ts.
 */
export function EligibilityCheck() {
    const [step, setStep] = useState(0);
    const [stopReason, setStopReason] = useState<string | null>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const hasInteracted = useRef(false);

    const isFinished = step >= questions.length;
    const showsResult = isFinished || stopReason !== null;
    const viewKey = showsResult ? 'result' : `question-${step}`;

    // Keeps keyboard and screen reader users on the content that just changed.
    // biome-ignore lint/correctness/useExhaustiveDependencies: runs for each new view.
    useEffect(() => {
        if (hasInteracted.current) {
            headingRef.current?.focus({ preventScroll: true });
        }
    }, [viewKey]);

    const answer = (reason?: string) => {
        hasInteracted.current = true;
        if (reason) setStopReason(reason);
        else setStep((current) => current + 1);
    };

    const goBack = () => {
        hasInteracted.current = true;
        setStep((current) => current - 1);
    };

    const restart = () => {
        hasInteracted.current = true;
        setStep(0);
        setStopReason(null);
    };

    return (
        <div className={styles.card}>
            <div className={styles.progress} aria-hidden="true">
                {questions.map((item, index) => (
                    <DropShape
                        key={item.question}
                        className={styles.progressDrop}
                        data-state={
                            index < step || isFinished
                                ? 'done'
                                : index === step
                                  ? 'current'
                                  : 'todo'
                        }
                    />
                ))}
            </div>

            <div key={viewKey} className={styles.view}>
                {showsResult ? (
                    <>
                        <h3
                            ref={headingRef}
                            tabIndex={-1}
                            className={`display ${styles.title}`}
                        >
                            {stopReason ? content.stopTitle : content.passTitle}
                        </h3>
                        <p>{stopReason ?? content.passDescription}</p>
                        <div className={styles.actions}>
                            <a
                                className="button button--solid"
                                data-direction="down"
                                href={
                                    stopReason ? '#kontakt' : '#sljedece-akcije'
                                }
                            >
                                {stopReason
                                    ? content.stopCtaLabel
                                    : content.passCtaLabel}
                                <ArrowDown aria-hidden="true" />
                            </a>
                            <button
                                type="button"
                                className={styles.textButton}
                                onClick={restart}
                            >
                                <RotateCcw aria-hidden="true" />
                                {content.restartLabel}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className={styles.step}>
                            {content.stepLabel} {step + 1}{' '}
                            {content.stepSeparator} {questions.length}
                        </p>
                        <h3
                            ref={headingRef}
                            tabIndex={-1}
                            className={`display ${styles.title}`}
                        >
                            {questions[step].question}
                        </h3>
                        <div className={styles.options}>
                            {questions[step].options.map((option) => (
                                <button
                                    key={option.label}
                                    type="button"
                                    className={styles.option}
                                    onClick={() => answer(option.stopReason)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                        {step > 0 && (
                            <button
                                type="button"
                                className={styles.textButton}
                                onClick={goBack}
                            >
                                <ArrowLeft aria-hidden="true" />
                                {content.backLabel}
                            </button>
                        )}
                    </>
                )}
            </div>

            <p className={styles.disclaimer}>{content.disclaimer}</p>
        </div>
    );
}
