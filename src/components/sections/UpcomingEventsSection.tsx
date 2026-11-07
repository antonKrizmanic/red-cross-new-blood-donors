import { ArrowDown, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import type { CSSProperties } from 'react';
import { AddToCalendar } from '@/components/events/AddToCalendar';
import { SplitWords } from '@/components/ui/SplitWords';
import type { DonationAction } from '@/content/page-content';
import { bloodSupplyLink, eventsContent } from '@/content/page-content';
import styles from './UpcomingEventsSection.module.css';

type UpcomingEventsSectionProps = {
    actions: DonationAction[];
};

const ACTION_TITLE = /^(\d{2}\.\d{2}\.)(\d{4}\.)( – )(.+)$/;

function ActionTitle({ title }: { title: string }) {
    const match = title.match(ACTION_TITLE);
    if (!match) return <h3 className={styles.place}>{title}</h3>;

    const [, dayAndMonth, year, separator, place] = match;
    return (
        <h3 className={styles.title}>
            <span className={styles.date}>
                {dayAndMonth}
                <small>{year}</small>
            </span>
            <span className="sr-only">{separator}</span>
            <span className={styles.place}>{place}</span>
        </h3>
    );
}

function mapsUrl(action: DonationAction) {
    const query = `${action.location}, ${action.address}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function UpcomingEventsSection({ actions }: UpcomingEventsSectionProps) {
    return (
        <section id="sljedece-akcije" className={styles.events}>
            <div className="container">
                <header className={styles.heading}>
                    <h2 className="display display--lg" data-reveal="words">
                        <SplitWords text={eventsContent.title} />
                    </h2>
                    <p className="lede" data-reveal>
                        {eventsContent.description}
                    </p>
                    <a
                        className={styles.supplyLink}
                        href={bloodSupplyLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-reveal
                    >
                        {bloodSupplyLink.label}
                        <ArrowUpRight aria-hidden="true" />
                    </a>
                </header>

                {actions.length === 0 && (
                    <div className={styles.empty} data-reveal="paper">
                        <h3 className="display">{eventsContent.emptyTitle}</h3>
                        <p>{eventsContent.emptyDescription}</p>
                        <a
                            className="button button--paper"
                            data-direction="down"
                            href="#pridruzi"
                        >
                            {eventsContent.emptyCtaLabel}
                            <ArrowDown aria-hidden="true" />
                        </a>
                    </div>
                )}

                <ol className={styles.list}>
                    {actions.map((action, index) => (
                        <li
                            key={action.date.toISOString()}
                            className={styles.row}
                            data-next={index === 0}
                            data-reveal={index === 0 ? 'paper' : ''}
                            style={
                                {
                                    '--reveal-delay': `${Math.min(index, 4) * 50}ms`,
                                    '--reveal-rotate': '-1.2deg',
                                } as CSSProperties
                            }
                        >
                            <ActionTitle title={action.title} />
                            <div className={styles.meta}>
                                {action.time && (
                                    <span className={styles.metaItem}>
                                        <Clock aria-hidden="true" />
                                        {action.time}
                                    </span>
                                )}
                                {action.location && action.address && (
                                    <a
                                        className={styles.metaItem}
                                        href={mapsUrl(action)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MapPin aria-hidden="true" />
                                        <span>
                                            <strong>{action.location}</strong>
                                            {action.address}
                                        </span>
                                        <ArrowUpRight
                                            className={styles.external}
                                            aria-hidden="true"
                                        />
                                    </a>
                                )}
                                {(!action.address ||
                                    !action.location ||
                                    !action.time) && (
                                    <p>{action.description}</p>
                                )}
                                <AddToCalendar action={action} />
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
