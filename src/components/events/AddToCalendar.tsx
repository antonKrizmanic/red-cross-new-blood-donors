import { ArrowUpRight, CalendarPlus, Download } from 'lucide-react';
import type { DonationAction } from '@/content/page-content';
import { eventsContent } from '@/content/page-content';
import { getActionDay, getGoogleCalendarUrl } from '@/lib/donation-actions';
import styles from './AddToCalendar.module.css';

type AddToCalendarProps = {
    action: DonationAction;
};

export function AddToCalendar({ action }: AddToCalendarProps) {
    return (
        <details className={styles.calendar}>
            <summary>
                <CalendarPlus aria-hidden="true" />
                {eventsContent.addToCalendarLabel}
                <span className="sr-only">: {action.title}</span>
            </summary>
            <div className={styles.options}>
                <a
                    href={getGoogleCalendarUrl(action)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {eventsContent.googleCalendarLabel}
                    <ArrowUpRight aria-hidden="true" />
                </a>
                <a href={`/kalendar/${getActionDay(action)}`} download>
                    {eventsContent.calendarFileLabel}
                    <Download aria-hidden="true" />
                </a>
            </div>
        </details>
    );
}
