import Image from 'next/image';
import { footerContent } from '@/content/page-content';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__brand">
                    <Image
                        src="/logo-transparent.webp"
                        alt="Crveni križ Buje"
                        width={80}
                        height={80}
                    />
                    <h3>{footerContent.organization}</h3>
                </div>
                <p className="site-footer__tagline">{footerContent.tagline}</p>
                <div className="site-footer__bottom">
                    <p>{footerContent.copyright}</p>
                    <a href="#pocetna" aria-label="Naslovnica">
                        +
                    </a>
                </div>
            </div>
        </footer>
    );
}
