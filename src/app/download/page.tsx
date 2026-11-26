import {
    ArrowLeft,
    ArrowRight,
    CalendarPlus,
    Droplets,
    HandHeart,
    History,
    type LucideIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { DownloadOptions } from '@/components/mobile-app/DownloadOptions';
import { Footer } from '@/components/sections';
import { DropShape } from '@/components/ui/DropShape';
import {
    getUpcomingActions,
    type MobileAppFeature,
    mobileAppContent,
    mobileAppFeatures,
} from '@/content/page-content';
import { MOBILE_APP_DOWNLOAD_PATH } from '@/lib/mobile-app';
import styles from './download.module.css';

// Rebuild hourly so the next action stays current, like the home page.
export const revalidate = 3600;

const title = 'eKnjižica – mobilna aplikacija | HCK GDCK Buje';
const description =
    'Preuzmite eKnjižicu za iPhone ili Android: broj i povijest darivanja krvi, najavljene akcije i zalihe krvi na jednom mjestu.';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: MOBILE_APP_DOWNLOAD_PATH },
    openGraph: {
        type: 'website',
        locale: 'hr_HR',
        url: MOBILE_APP_DOWNLOAD_PATH,
        title,
        description,
        siteName: 'Hrvatski Crveni križ – GDCK Buje',
        images: [
            {
                url: '/logo.webp',
                width: 1024,
                height: 1024,
                alt: 'Hrvatski Crveni križ GDCK Buje',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title,
        description,
        images: ['/logo.webp'],
    },
};

const featureIcons: Record<MobileAppFeature['icon'], LucideIcon> = {
    history: History,
    calendar: CalendarPlus,
    droplets: Droplets,
    'hand-heart': HandHeart,
};

export default function DownloadPage() {
    const nextAction = getUpcomingActions()[0];

    return (
        <>
            <header className={`container ${styles.header}`}>
                <a href="/" className={styles.brand}>
                    <Image
                        src="/logo-transparent.webp"
                        alt=""
                        width={44}
                        height={44}
                        priority
                    />
                    <span>Crveni križ Buje</span>
                </a>
                <a href="/" className={styles.home}>
                    <ArrowLeft aria-hidden="true" />
                    {mobileAppContent.homeLabel}
                </a>
            </header>

            <main id="pocetna">
                <section className={`container ${styles.hero}`}>
                    <div className={styles.copy}>
                        <p className={styles.eyebrow}>
                            {mobileAppContent.eyebrow}
                        </p>
                        <h1 className="display display--xl">
                            {mobileAppContent.name}
                        </h1>
                        <p className="lede">{mobileAppContent.description}</p>
                        <ul className={styles.badges}>
                            {mobileAppContent.badges.map((badge) => (
                                <li key={badge}>{badge}</li>
                            ))}
                        </ul>
                        <DownloadOptions />
                    </div>

                    <div className={styles.art}>
                        <DropShape className={styles.drop} />
                        <figure className={styles.phone}>
                            <Image
                                src="/eknjizica/zalihe-krvi.png"
                                alt={mobileAppContent.screenshotAlt}
                                width={1080}
                                height={1920}
                                priority
                                sizes="(max-width: 56rem) 70vw, 22rem"
                            />
                        </figure>
                    </div>
                </section>

                <section
                    className={styles.features}
                    aria-labelledby="mogucnosti"
                >
                    <div className="container">
                        <h2 id="mogucnosti" className="display display--lg">
                            {mobileAppContent.featuresTitle}
                        </h2>
                        <ul className={styles.featureList}>
                            {mobileAppFeatures.map((feature) => {
                                const Icon = featureIcons[feature.icon];
                                return (
                                    <li key={feature.title}>
                                        <Icon aria-hidden="true" />
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <p className={styles.access}>
                            {mobileAppContent.access}
                        </p>
                    </div>
                </section>

                <a href="/#sljedece-akcije" className={styles.next}>
                    <span className={`container ${styles.nextInner}`}>
                        <span className={styles.nextLabel}>
                            <DropShape className={styles.nextDrop} />
                            {mobileAppContent.nextActionLabel}
                        </span>
                        <strong className={styles.nextTitle}>
                            {nextAction?.title ??
                                mobileAppContent.nextActionFallback}
                        </strong>
                        <ArrowRight
                            className={styles.nextArrow}
                            aria-hidden="true"
                        />
                    </span>
                </a>
            </main>
            <Footer />
        </>
    );
}
