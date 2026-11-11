import { ArrowUpRight } from 'lucide-react';
import { QuizIllustration } from '@/components/illustrations/QuizIllustration';
import { SplitWords } from '@/components/ui/SplitWords';
import { quizContent } from '@/content/page-content';
import styles from './QuizSection.module.css';

export function QuizSection() {
    return (
        <section id="kviz" className={styles.quiz}>
            <div className={`container ${styles.layout}`}>
                <div className={styles.art} data-reveal="paper">
                    <QuizIllustration />
                </div>
                <div className={styles.copy}>
                    <h2 className="display display--lg" data-reveal="words">
                        <SplitWords text={quizContent.title} />
                    </h2>
                    <p className="lede" data-reveal>
                        {quizContent.description}
                    </p>
                    <div data-reveal>
                        <a
                            className="button button--paper"
                            href={quizContent.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {quizContent.ctaLabel}
                            <ArrowUpRight aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
