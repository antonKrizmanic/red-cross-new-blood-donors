import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { DonationAction } from '@/content/page-content';
import { eventsContent } from '@/content/page-content';

type UpcomingEventsSectionProps = {
    actions: DonationAction[];
};

function getDateParts(date: Date) {
    return {
        day: String(date.getDate()).padStart(2, '0'),
        month: String(date.getMonth() + 1).padStart(2, '0'),
    };
}

export function UpcomingEventsSection({ actions }: UpcomingEventsSectionProps) {
    const upcomingActions = actions.filter(
        (action) => action.date >= new Date(),
    );

    return (
        <section
            id="sljedece-akcije"
            className="section-panel section-red field-guide-lifeline field-guide-lifeline--paper"
        >
            <div className="section-container section-container--narrow">
                <header className="section-heading section-heading--split">
                    <div data-reveal>
                        <p className="eyebrow eyebrow--light">
                            <span />
                            04
                        </p>
                        <h2 className="display-title display-title--light">
                            {eventsContent.title}
                        </h2>
                    </div>
                    <p
                        className="section-intro section-intro--light"
                        data-reveal
                    >
                        {eventsContent.description}
                    </p>
                </header>

                <div className="events-list">
                    {upcomingActions.map((action, index) => {
                        const { day, month } = getDateParts(action.date);
                        return (
                            <article
                                key={action.date.toISOString()}
                                className="event-row"
                                data-reveal
                                style={
                                    {
                                        '--reveal-delay': `${index * 65}ms`,
                                    } as CSSProperties
                                }
                            >
                                <div className="event-date" aria-hidden="true">
                                    <strong>{day}</strong>
                                    <span>.{month}</span>
                                </div>
                                <div className="event-main">
                                    <h3>{action.title}</h3>
                                    <div className="event-meta">
                                        {action.time && (
                                            <span>
                                                <Clock aria-hidden="true" />
                                                {action.time}
                                            </span>
                                        )}
                                        {action.location && action.address && (
                                            <span>
                                                <MapPin aria-hidden="true" />
                                                <span>
                                                    <strong>
                                                        {action.location}
                                                    </strong>
                                                    {action.address}
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                    {(!action.address ||
                                        !action.location ||
                                        !action.time) && (
                                        <p>{action.description}</p>
                                    )}
                                </div>
                                <ArrowUpRight
                                    className="event-row__arrow"
                                    aria-hidden="true"
                                />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
