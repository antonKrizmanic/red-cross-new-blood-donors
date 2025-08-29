import {
  ContactSection,
  Footer,
  HeroSection,
  JoinCommunitySection,
  UpcomingEventsSection,
  WhyDonateSection
} from '@/components/sections'

export default function Home() {
  const actions = [
    {
      date: new Date('2025-09-16'),
      title: '16.09.2025. – Grad Buje',
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
      date: new Date('2025-10-17'),
      title: '17.10.2025. – Grad Novigrad',
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
      date: new Date('2025-11-14'),
      title: '14.11.2025. – Grad Buje',
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    },
    {
      date: new Date('2025-12-29'),
      title: '29.12.2025. – Grad Buje',
      description: 'Za točnu lokaciju prati naše objave na društvenim mrežama i lokalnim medijima.',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      <HeroSection />
      <WhyDonateSection />
      <JoinCommunitySection />
      <UpcomingEventsSection actions={actions} />
      <ContactSection />
      <Footer />
    </div>
  )
}