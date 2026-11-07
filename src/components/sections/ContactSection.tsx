import { Mail, Phone } from 'lucide-react';
import { DropShape } from '@/components/ui/DropShape';
import { SplitWords } from '@/components/ui/SplitWords';
import { contactContent } from '@/content/page-content';
import styles from './ContactSection.module.css';

export function ContactSection() {
    return (
        <section id="kontakt" className={styles.contact}>
            <DropShape className={styles.drop} />
            <div className={`container ${styles.inner}`}>
                <header className={styles.heading}>
                    <h2 className="display display--xl" data-reveal="words">
                        <SplitWords text={contactContent.title} />
                    </h2>
                    <p className="lede" data-reveal>
                        {contactContent.description}
                    </p>
                </header>

                <div className={styles.links}>
                    <a
                        href={contactContent.phoneHref}
                        className={styles.link}
                        data-reveal
                    >
                        <span className={styles.label}>
                            <Phone aria-hidden="true" />
                            {contactContent.phoneLabel}
                        </span>
                        <strong className="display">
                            {contactContent.phone}
                        </strong>
                    </a>
                    <a
                        href={contactContent.emailHref}
                        className={styles.link}
                        data-reveal
                    >
                        <span className={styles.label}>
                            <Mail aria-hidden="true" />
                            {contactContent.emailLabel}
                        </span>
                        <strong className="display">
                            {contactContent.email}
                        </strong>
                    </a>
                </div>
            </div>
        </section>
    );
}
