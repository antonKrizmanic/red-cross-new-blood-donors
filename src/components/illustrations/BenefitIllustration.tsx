import { DROP_PATH } from '@/components/ui/DropShape';
import type { IconName } from '@/content/page-content';
import styles from './BenefitIllustration.module.css';

type BenefitIllustrationProps = {
    icon: IconName;
    className?: string;
};

const HEART_PATH =
    'M50 112C24 92 18 80 18 68C18 56 27 49 36 49C42 49 47 52 50 58C53 52 58 49 64 49C73 49 82 56 82 68C82 80 76 92 50 112Z';

/** One donation becomes three drops, and three beating hearts. */
function ThreeLives({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 400 170"
            aria-hidden="true"
            className={`${styles.lives} ${className ?? ''}`}
        >
            <path
                className={styles.source}
                d={DROP_PATH}
                transform="translate(150 20)"
            />
            {[0, 1, 2].map((index) => (
                <g
                    key={index}
                    className={styles.life}
                    transform={`translate(${index * 136 + 2} 15)`}
                >
                    <g
                        className={styles.lifeInner}
                        style={
                            {
                                '--from-x': `${(1 - index) * 136}px`,
                                '--delay': `${0.55 + index * 0.12}s`,
                            } as React.CSSProperties
                        }
                    >
                        <path d={DROP_PATH} />
                        <path
                            className={styles.heart}
                            d={HEART_PATH}
                            style={
                                {
                                    '--beat-delay': `${index * 0.25}s`,
                                } as React.CSSProperties
                            }
                        />
                    </g>
                </g>
            ))}
        </svg>
    );
}

/** Ten minutes swept out of a clock face. */
function TenMinutes({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 200"
            aria-hidden="true"
            className={`${styles.clock} ${className ?? ''}`}
        >
            <circle className={styles.face} cx="100" cy="100" r="96" />
            <circle
                className={styles.sector}
                cx="100"
                cy="100"
                r="42"
                pathLength="60"
                transform="rotate(-90 100 100)"
            />
            {Array.from({ length: 12 }, (_, hour) => (
                <rect
                    key={hour}
                    className={styles.tick}
                    x="97"
                    y="12"
                    width="6"
                    height="14"
                    rx="3"
                    transform={`rotate(${hour * 30} 100 100)`}
                />
            ))}
            <rect
                className={styles.hand}
                x="96"
                y="24"
                width="8"
                height="80"
                rx="4"
            />
            <circle className={styles.pin} cx="100" cy="100" r="9" />
        </svg>
    );
}

/** A shield traced by a line, then filled. */
function SafeShield({ className }: { className?: string }) {
    const shield =
        'M90 8C112 26 138 32 166 32C168 96 152 150 90 186C28 150 12 96 14 32C42 32 68 26 90 8Z';
    return (
        <svg
            viewBox="0 0 180 194"
            aria-hidden="true"
            className={`${styles.shield} ${className ?? ''}`}
        >
            <path className={styles.shieldFill} d={shield} />
            <path className={styles.shieldLine} d={shield} pathLength="1" />
            <path
                className={styles.shieldCheck}
                d="M52 96L80 124L130 68"
                pathLength="1"
            />
        </svg>
    );
}

/** A present whose lid lifts to let hearts out. */
function Gift({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 280 210"
            aria-hidden="true"
            className={`${styles.gift} ${className ?? ''}`}
        >
            {[0, 1, 2].map((index) => (
                <path
                    key={index}
                    className={styles.giftHeart}
                    d={HEART_PATH}
                    transform={`translate(${[62, 112, 164][index]} ${[8, -22, 14][index]}) scale(${[0.42, 0.55, 0.36][index]})`}
                />
            ))}
            <rect
                className={styles.box}
                x="46"
                y="104"
                width="188"
                height="102"
                rx="10"
            />
            <rect
                className={styles.ribbon}
                x="124"
                y="104"
                width="32"
                height="102"
            />
            <g className={styles.lid}>
                <rect
                    className={styles.box}
                    x="32"
                    y="74"
                    width="216"
                    height="38"
                    rx="10"
                />
                <rect
                    className={styles.ribbon}
                    x="124"
                    y="74"
                    width="32"
                    height="38"
                />
            </g>
        </svg>
    );
}

export function BenefitIllustration({
    icon,
    className,
}: BenefitIllustrationProps) {
    switch (icon) {
        case 'heart':
            return <ThreeLives className={className} />;
        case 'clock':
            return <TenMinutes className={className} />;
        case 'shield':
            return <SafeShield className={className} />;
        default:
            return <Gift className={className} />;
    }
}
