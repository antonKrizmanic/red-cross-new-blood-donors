import { MotionDirector } from '@/components/motion/MotionDirector';
import { Navigation } from '@/components/navigation';
import {
    ContactSection,
    EligibilitySection,
    FAQSection,
    Footer,
    HeroSection,
    JoinCommunitySection,
    ProcessSection,
    UpcomingEventsSection,
    WhyDonateSection,
} from '@/components/sections';
import { getUpcomingActions } from '@/content/page-content';
import { getActionsStructuredData } from '@/lib/donation-actions';

// Rebuild hourly so finished actions drop off without a new deployment.
export const revalidate = 3600;

export default function Home() {
    const upcomingActions = getUpcomingActions();
    // Escaped so that no value can close the script tag early.
    const structuredData = JSON.stringify(
        getActionsStructuredData(upcomingActions),
    ).replaceAll('<', '\\u003c');

    return (
        <>
            {upcomingActions.length > 0 && (
                <script
                    type="application/ld+json"
                    // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD built from our own content and escaped above.
                    dangerouslySetInnerHTML={{ __html: structuredData }}
                />
            )}
            <MotionDirector />
            <Navigation />
            <main>
                <HeroSection nextAction={upcomingActions[0]} />
                <WhyDonateSection />
                <EligibilitySection />
                <ProcessSection />
                <UpcomingEventsSection actions={upcomingActions} />
                <JoinCommunitySection />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
