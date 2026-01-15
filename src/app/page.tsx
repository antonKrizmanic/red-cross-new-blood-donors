import { BackToTop, Navigation, ScrollProgress } from '@/components/navigation';
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

export default function Home() {
    const actions = [
        // 2026
        {
            date: new Date('2026-01-16'),
            title: '16.01.2026. – Grad Novigrad',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Sportska dvorana',
            address: "Marketi 2, 52466 Novigrad",
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-02-13'),
            title: '13.02.2026. – Grad Buje',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Buje',
            address: 'Trg Josipa Broza Tita 17, 52460 Buje',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-03-24'),
            title: '24.03.2026. – Grad Umag',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Umag',
            address: 'Brolo 1, 52470 Umag',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-04-10'),
            title: '10.04.2026. – Grad Novigrad',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Sportska dvorana',
            address: "Marketi 2, 52466 Novigrad",
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-04-27'),
            title: '27.04.2026. – Grad Umag',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Umag',
            address: 'Brolo 1, 52470 Umag',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-05-13'),
            title: '13.05.2026. – Grad Buje',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Buje',
            address: 'Trg Josipa Broza Tita 17, 52460 Buje',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-06-23'),
            title: '23.06.2026. – Grad Umag',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Umag',
            address: 'Brolo 1, 52470 Umag',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-07-13'),
            title: '13.07.2026. – Grad Novigrad',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Sportska dvorana',
            address: "Marketi 2, 52466 Novigrad",
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },

        {
            date: new Date('2026-08-12'),
            title: '12.08.2026. – Grad Buje',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Buje',
            address: 'Trg Josipa Broza Tita 17, 52460 Buje',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-09-21'),
            title: '21.09.2026. – Grad Umag',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Umag',
            address: 'Brolo 1, 52470 Umag',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-10-12'),
            title: '12.10.2026. – Grad Novigrad',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Sportska dvorana',
            address: "Marketi 2, 52466 Novigrad",
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-11-09'),
            title: '09.11.2026. – Grad Buje',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Buje',
            address: 'Trg Josipa Broza Tita 17, 52460 Buje',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
        {
            date: new Date('2026-12-22'),
            title: '22.12.2026. – Grad Umag',
            time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
            location: 'Zajednica Talijana Umag',
            address: 'Brolo 1, 52470 Umag',
            description:
                'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
            <ScrollProgress />
            <Navigation />
            <HeroSection />
            <WhyDonateSection />
            <JoinCommunitySection />
            <ProcessSection />
            <UpcomingEventsSection actions={actions} />
            <FAQSection />
            <ContactSection />
            <Footer />
            <BackToTop />
        </div>
    );
}
