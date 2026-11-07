import { donationActions } from '@/content/page-content';
import { buildActionIcs, getActionDay } from '@/lib/donation-actions';

export const dynamicParams = false;

export function generateStaticParams() {
    return donationActions.map((action) => ({ date: getActionDay(action) }));
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ date: string }> },
) {
    const { date } = await params;
    const action = donationActions.find(
        (candidate) => getActionDay(candidate) === date,
    );
    if (!action) return new Response(null, { status: 404 });

    return new Response(buildActionIcs(action), {
        headers: {
            'Content-Type': 'text/calendar; charset=utf-8',
            'Content-Disposition': `attachment; filename="darivanje-krvi-${date}.ics"`,
        },
    });
}
