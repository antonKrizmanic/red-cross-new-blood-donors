import { BackToTop, Navigation, ScrollProgress } from '@/components/navigation'
import {
  ContactSection,
  FAQSection,
  Footer,
  HeroSection,
  JoinCommunitySection,
  UpcomingEventsSection,
  WhyDonateSection
} from '@/components/sections'
import { ProcessSection } from '@/components/sections/ProcessSection'

export default function Home() {
  const actions = [
    {
      date: new Date('2025-09-16'),
      title: '16.09.2025. – Grad Buje',
      time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
      location: 'Zajednica Talijana Umag',
      address: 'Brolo 1, Umag',
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
      date: new Date('2025-10-17'),
      title: '17.10.2025. – Grad Novigrad',
      time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
      location: 'Sportska dvorana',
      address: null,
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
      date: new Date('2025-11-14'),
      title: '14.11.2025. – Grad Buje',
      time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
      location: 'Zajednica Talijana Buje',
      address: 'Trg Josipa Broza Tita 17',
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
      date: new Date('2025-12-29'),
      title: '29.12.2025. – Grad Buje',
      time: '09:00 - 17:00 (pauza 13:00 - 14:00)',
      location: 'Sportska dvorana',
      address: null,
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    }
  ]

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
  )
}