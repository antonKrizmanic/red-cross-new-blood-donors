import { ArrowDown, ArrowRight, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import { DropShape } from '@/components/ui/DropShape';
import { SplitWords } from '@/components/ui/SplitWords';
import type { DonationAction } from '@/content/page-content';
import { eventsContent, heroContent } from '@/content/page-content';
import styles from './HeroSection.module.css';

type HeroSectionProps = {
    nextAction?: DonationAction;
};

export function HeroSection({ nextAction }: HeroSectionProps) {
    const [titleLead, titleAccent] = heroContent.title.split(', ');

    return (
        <section id="pocetna" className={styles.hero}>
            <div className={`container ${styles.layout}`}>
                <div className={styles.copy}>
                    <h1 className="display display--xl" data-reveal="words">
                        <span className={styles.titleLine}>
                            <SplitWords text={`${titleLead},`} />
                        </span>{' '}
                        <span
                            className={`${styles.titleLine} ${styles.accent}`}
                        >
                            <SplitWords text={titleAccent} delay={160} />
                        </span>
                    </h1>
                    <p
                        className={`lede ${styles.description}`}
                        data-reveal
                        style={{ '--reveal-delay': '450ms' } as CSSVars}
                    >
                        {heroContent.description}
                    </p>
                    <div
                        className={styles.actions}
                        data-reveal
                        style={{ '--reveal-delay': '560ms' } as CSSVars}
                    >
                        <a
                            className="button button--solid"
                            href={heroContent.primaryCta.href}
                        >
                            {heroContent.primaryCta.label}
                            <ArrowRight aria-hidden="true" />
                        </a>
                        <a
                            className="button button--outline"
                            data-direction="down"
                            href={heroContent.secondaryCta.href}
                        >
                            {heroContent.secondaryCta.label}
                            <ArrowDown aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className={styles.art}>
                    <DropShape className={styles.pulse} />
                    <DropShape className={styles.pulse} data-late="true" />
                    <DropShape className={styles.backing} />
                    <div className={styles.photo}>
                        <Image
                            src="/hero-donor.webp"
                            alt="Darivanje krvi u svijetloj transfuzijskoj ambulanti"
                            width={1440}
                            height={1920}
                            priority
                            sizes="(max-width: 56rem) 190vw, 80vw"
                        />
                    </div>
                </div>
            </div>

            {nextAction && (
                <a href="#sljedece-akcije" className={styles.next}>
                    <span className={`container ${styles.nextInner}`}>
                        <span className={styles.nextLabel}>
                            <DropShape className={styles.nextDrop} />
                            {eventsContent.title}
                        </span>
                        <strong className={styles.nextTitle}>
                            {nextAction.title}
                        </strong>
                        {nextAction.time && (
                            <span className={styles.nextMeta}>
                                <Clock aria-hidden="true" />
                                {nextAction.time}
                            </span>
                        )}
                        {nextAction.location && (
                            <span className={styles.nextMeta}>
                                <MapPin aria-hidden="true" />
                                {nextAction.location}
                            </span>
                        )}
                        <ArrowDown
                            className={styles.nextArrow}
                            aria-hidden="true"
                        />
                    </span>
                </a>
            )}
        </section>
    );
}

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;
