import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { contactContent } from '@/content/page-content';

export function ContactSection() {
    return (
        <section
            id="kontakt"
            className="section-panel section-ink contact-section field-guide-lifeline field-guide-lifeline--red"
        >
            <div
                className="section-symbol section-symbol--left"
                aria-hidden="true"
            >
                +
            </div>
            <div className="section-container section-container--narrow">
                <header className="section-heading section-heading--split">
                    <div data-reveal>
                        <p className="eyebrow eyebrow--light">
                            <span />
                            06
                        </p>
                        <h2 className="display-title display-title--light">
                            {contactContent.title}
                        </h2>
                    </div>
                    <p
                        className="section-intro section-intro--light"
                        data-reveal
                    >
                        {contactContent.description}
                    </p>
                </header>

                <div className="contact-grid">
                    <a
                        href={contactContent.phoneHref}
                        className="contact-link"
                        data-reveal
                    >
                        <span className="contact-link__icon">
                            <Phone aria-hidden="true" />
                        </span>
                        <span className="contact-link__copy">
                            <span>{contactContent.phoneLabel}</span>
                            <strong>{contactContent.phone}</strong>
                        </span>
                        <ArrowUpRight aria-hidden="true" />
                    </a>

                    <a
                        href={contactContent.emailHref}
                        className="contact-link"
                        data-reveal
                    >
                        <span className="contact-link__icon">
                            <Mail aria-hidden="true" />
                        </span>
                        <span className="contact-link__copy">
                            <span>{contactContent.emailLabel}</span>
                            <strong>{contactContent.email}</strong>
                        </span>
                        <ArrowUpRight aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
