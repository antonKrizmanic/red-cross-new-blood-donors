import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { footerContent } from '@/content/page-content';
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
                <div className={styles.bottom}>
                    <p>{footerContent.copyright}</p>
                    <a href="#pocetna" aria-label="Naslovnica">
                        <ArrowUp aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
