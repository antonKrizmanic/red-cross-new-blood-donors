import styles from './QuizIllustration.module.css';

const options = [
    { y: 112, correct: true },
    { y: 160, correct: false },
    { y: 208, correct: true },
];

/** A quiz card with two of three answers marked correct. */
export function QuizIllustration({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 360 290"
            aria-hidden="true"
            className={`${styles.quiz} ${className ?? ''}`}
        >
            <g className={styles.card}>
                <rect
                    className={styles.paper}
                    x="20"
                    y="30"
                    width="300"
                    height="240"
                    rx="22"
                />
                <rect
                    className={styles.line}
                    x="48"
                    y="60"
                    width="190"
                    height="14"
                    rx="7"
                />
                <rect
                    className={styles.line}
                    x="48"
                    y="82"
                    width="130"
                    height="14"
                    rx="7"
                />
                {options.map((option, index) => (
                    <g
                        key={option.y}
                        className={styles.option}
                        data-correct={option.correct}
                        style={
                            {
                                '--delay': `${0.25 + index * 0.12}s`,
                                '--mark-delay': `${0.9 + index * 0.18}s`,
                            } as React.CSSProperties
                        }
                    >
                        <rect
                            className={styles.answer}
                            x="48"
                            y={option.y}
                            width="244"
                            height="38"
                            rx="19"
                        />
                        <circle
                            className={styles.dot}
                            cx="67"
                            cy={option.y + 19}
                            r="11"
                        />
                        {option.correct && (
                            <path
                                className={styles.check}
                                d={`M61 ${option.y + 19}l4.5 4.5L74 ${option.y + 14}`}
                                pathLength="1"
                            />
                        )}
                        <rect
                            className={styles.answerLine}
                            x="90"
                            y={option.y + 14}
                            width={[150, 120, 170][index]}
                            height="10"
                            rx="5"
                        />
                    </g>
                ))}
            </g>
            <g className={styles.badge}>
                <circle cx="306" cy="48" r="40" />
                <path
                    className={styles.question}
                    d="M293 38a13 13 0 1 1 20 11c-4 3-7 5-7 10v2"
                />
                <circle
                    className={styles.questionDot}
                    cx="306"
                    cy="73"
                    r="4.5"
                />
            </g>
        </svg>
    );
}
