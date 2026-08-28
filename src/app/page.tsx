import {
    BackToTop,
    Navigation,
    RevealObserver,
    ScrollExperience,
    ScrollProgress,
} from '@/components/navigation';
import {
    ContactSection,
    FAQSection,
    Footer,
    HeroSection,
    JoinCommunitySection,
    UpcomingEventsSection,
    WhyDonateSection,
} from '@/components/sections';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { donationActions } from '@/content/page-content';

export default function Home() {
    return (
        <div className="site-shell">
            <RevealObserver />
            <ScrollExperience />
            <ScrollProgress />
            <Navigation />
            <main>
                <HeroSection />
                <WhyDonateSection />
                <JoinCommunitySection />
                <ProcessSection />
                <UpcomingEventsSection actions={donationActions} />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}
