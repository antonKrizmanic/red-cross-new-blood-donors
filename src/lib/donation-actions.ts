import type { DonationAction } from '@/content/page-content';
import { contactContent, footerContent } from '@/content/page-content';

export const SITE_URL = 'https://www.crvenikrizbujedarivatelji.gdckapp.com';

const TIME_ZONE = 'Europe/Zagreb';
const TIME_RANGE = /(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/;

/** The action's day as YYYY-MM-DD. Actions are stored at midnight UTC. */
export function getActionDay(action: DonationAction) {
    return action.date.toISOString().slice(0, 10);
}

function getActionPlace(action: DonationAction) {
    return action.title.split(' – ').at(-1) ?? action.title;
}

function getActionLocation(action: DonationAction) {
    return [action.location, action.address].filter(Boolean).join(', ');
}

/** Reads the opening hours from a time such as "09:00 - 17:00 (pauza ...)". */
function getActionHours(action: DonationAction) {
    const match = action.time?.match(TIME_RANGE);
    if (!match) return null;
    const [, startHour, startMinute, endHour, endMinute] = match;
    return {
        start: { hour: startHour, minute: startMinute },
        end: { hour: endHour, minute: endMinute },
    };
}

function getEventTitle(action: DonationAction) {
    return `Darivanje krvi – ${getActionPlace(action)}`;
}

function getEventDetails(action: DonationAction) {
    return [
        action.time,
        footerContent.organization,
        `${contactContent.phoneLabel}: ${contactContent.phone}`,
    ]
        .filter(Boolean)
        .join('\n');
}

function compactDay(day: string) {
    return day.replaceAll('-', '');
}

function dayAfter(day: string) {
    const next = new Date(`${day}T00:00:00Z`);
    next.setUTCDate(next.getUTCDate() + 1);
    return next.toISOString().slice(0, 10);
}

export function getGoogleCalendarUrl(action: DonationAction) {
    const day = getActionDay(action);
    const hours = getActionHours(action);
    const dates = hours
        ? `${compactDay(day)}T${hours.start.hour}${hours.start.minute}00/${compactDay(day)}T${hours.end.hour}${hours.end.minute}00`
        : `${compactDay(day)}/${compactDay(dayAfter(day))}`;

    const query = new URLSearchParams({
        action: 'TEMPLATE',
        text: getEventTitle(action),
        dates,
        ctz: TIME_ZONE,
        location: getActionLocation(action),
        details: getEventDetails(action),
    });
    return `https://calendar.google.com/calendar/render?${query}`;
}

function escapeIcsText(value: string) {
    return value
        .replaceAll('\\', '\\\\')
        .replaceAll(';', ';')
        .replaceAll(',', '\\,')
        .replaceAll('\n', '\\n');
}

/** Folds a line to the 75 octets the iCalendar format allows. */
function foldIcsLine(line: string) {
    const encoder = new TextEncoder();
    const parts: string[] = [];
    let current = '';
    let size = 0;

    for (const character of line) {
        const width = encoder.encode(character).length;
        if (size + width > 74) {
            parts.push(current);
            current = ' ';
            size = 1;
        }
        current += character;
        size += width;
    }
    parts.push(current);
    return parts.join('\r\n');
}

export function buildActionIcs(action: DonationAction) {
    const day = getActionDay(action);
    const hours = getActionHours(action);
    const stamp = new Date().toISOString().replace(/[-:]|\.\d{3}/g, '');

    const timing = hours
        ? [
              `DTSTART;TZID=${TIME_ZONE}:${compactDay(day)}T${hours.start.hour}${hours.start.minute}00`,
              `DTEND;TZID=${TIME_ZONE}:${compactDay(day)}T${hours.end.hour}${hours.end.minute}00`,
          ]
        : [
              `DTSTART;VALUE=DATE:${compactDay(day)}`,
              `DTEND;VALUE=DATE:${compactDay(dayAfter(day))}`,
          ];

    return [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//GDCK Buje//Darivanje krvi//HR',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VTIMEZONE',
        `TZID:${TIME_ZONE}`,
        'BEGIN:DAYLIGHT',
        'TZOFFSETFROM:+0100',
        'TZOFFSETTO:+0200',
        'TZNAME:CEST',
        'DTSTART:19700329T020000',
        'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
        'END:DAYLIGHT',
        'BEGIN:STANDARD',
        'TZOFFSETFROM:+0200',
        'TZOFFSETTO:+0100',
        'TZNAME:CET',
        'DTSTART:19701025T030000',
        'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
        'END:STANDARD',
        'END:VTIMEZONE',
        'BEGIN:VEVENT',
        `UID:darivanje-krvi-${day}@crvenikrizbuje.hr`,
        `DTSTAMP:${stamp}`,
        ...timing,
        `SUMMARY:${escapeIcsText(getEventTitle(action))}`,
        `LOCATION:${escapeIcsText(getActionLocation(action))}`,
        `DESCRIPTION:${escapeIcsText(getEventDetails(action))}`,
        `URL:${SITE_URL}/#sljedece-akcije`,
        'BEGIN:VALARM',
        'ACTION:DISPLAY',
        `DESCRIPTION:${escapeIcsText(getEventTitle(action))}`,
        'TRIGGER:-P1D',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR',
        '',
    ]
        .map(foldIcsLine)
        .join('\r\n');
}

/** Zagreb's UTC offset on a given day, such as "+01:00". */
function getZagrebOffset(day: string) {
    const name = new Intl.DateTimeFormat('en', {
        timeZone: TIME_ZONE,
        timeZoneName: 'longOffset',
    })
        .formatToParts(new Date(`${day}T12:00:00Z`))
        .find((part) => part.type === 'timeZoneName')?.value;
    return name?.replace('GMT', '') || '+00:00';
}

function getSchemaLocation(action: DonationAction) {
    const address = action.address?.match(/^(.*),\s*(\d{5})\s+(.+)$/);
    return {
        '@type': 'Place',
        name: action.location ?? getActionPlace(action),
        address: address
            ? {
                  '@type': 'PostalAddress',
                  streetAddress: address[1],
                  postalCode: address[2],
                  addressLocality: address[3],
                  addressCountry: 'HR',
              }
            : {
                  '@type': 'PostalAddress',
                  addressLocality: getActionPlace(action),
                  addressCountry: 'HR',
              },
    };
}

/** schema.org data that lets search engines show the actions as events. */
export function getActionsStructuredData(actions: DonationAction[]) {
    return actions.map((action) => {
        const day = getActionDay(action);
        const hours = getActionHours(action);
        const offset = getZagrebOffset(day);

        return {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: getEventTitle(action),
            description: `Akcija darivanja krvi: ${footerContent.organization}.`,
            startDate: hours
                ? `${day}T${hours.start.hour}:${hours.start.minute}:00${offset}`
                : day,
            ...(hours && {
                endDate: `${day}T${hours.end.hour}:${hours.end.minute}:00${offset}`,
            }),
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode:
                'https://schema.org/OfflineEventAttendanceMode',
            isAccessibleForFree: true,
            location: getSchemaLocation(action),
            image: [`${SITE_URL}/logo.webp`],
            url: `${SITE_URL}/#sljedece-akcije`,
            organizer: {
                '@type': 'Organization',
                name: footerContent.organization,
                url: SITE_URL,
            },
        };
    });
}
