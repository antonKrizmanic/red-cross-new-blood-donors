import { ArrowRight, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { StoreBadges } from '@/components/mobile-app/StoreBadges';
import { footerContent, mobileAppContent } from '@/content/page-content';
import { MOBILE_APP_DOWNLOAD_PATH } from '@/lib/mobile-app';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <p className={`display ${styles.tagline}`}>
                    {footerContent.tagline}
                </p>
                <div className={styles.brand}>
                    <span className={styles.logo}>
                        <Image
                            src="/logo-transparent.webp"
                            alt="Crveni križ Buje"
                            width={64}
                            height={64}
                        />
                    </span>
                    <h3>{footerContent.organization}</h3>
                </div>
                <div className={styles.app}>
                    <div className={styles.appCopy}>
                        <h3>{mobileAppContent.footerTitle}</h3>
                        <a href={MOBILE_APP_DOWNLOAD_PATH}>
                            {mobileAppContent.footerLinkLabel}
                            <ArrowRight aria-hidden="true" />
                        </a>
                    </div>
                    <StoreBadges />
                </div>
                <div className={styles.bottom}>
                    <div className={styles.legal}>
                        <p>{footerContent.copyright}</p>
                        <p className={styles.trademarks}>
                            {mobileAppContent.trademarks}
                        </p>
                    </div>
                    <a href="#pocetna" aria-label="Naslovnica">
                        <ArrowUp aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
