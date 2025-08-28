'use client'

import { ApplicationCard } from '@/components/social/application-card'
import { FacebookCard } from '@/components/social/facebook-card'
import { InstagramCard } from '@/components/social/instagram-card'
import { ViberCard } from '@/components/social/viber-card'
import { WhatsAppCard } from '@/components/social/whats-app-card'
import { Badge } from '@/components/ui/shadcn/badge'
import { Button } from '@/components/ui/shadcn/button'
import { Card, CardContent } from '@/components/ui/shadcn/card'
import { ArrowRight, BellRing, Calendar, CheckCircle2, Clock, Droplet, Gift, Heart, Mail, Phone, Shield } from 'lucide-react'

export default function Home() {

  const actions = [
    {
      date: new Date('2025-02-02'),
      title: '02.02.2025. – Grad Buje, Crveni križ',
      description: 'Pridružite nam se u Crvenom križu u Bujama',
    },
    {
      date: new Date('2025-09-12'),
      title: '12.09.2025. – Buje, Dom kulture',
      description: 'Pridružite nam se u Domu kulture u Bujama',
    },
    {
      date: new Date('2025-09-26'),
      title: '26.09.2025. – Umag, Crveni križ',
      description: 'Posjetite nas u prostorijama Crvenog križa u Umagu',
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/70 to-red-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Daruj krv,
              <span className="block text-red-200">spasi život</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto leading-relaxed">
              Pridružite se našoj zajednici darivatelja krvi i pomozite spasiti živote
            </p>
            <Button
              size="lg"
              className="bg-white text-red-700 hover:bg-red-50 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('pridruzi')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Pridruži se
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-white/15 backdrop-blur-sm rounded-full border border-white/25 shadow-lg">
                <span className="text-white font-medium text-sm">Hrvatski Crveni križ - Gradsko društvo Crvenog križa Buje</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="h-full w-full bg-center bg-cover md:bg-fixed opacity-30 responsive-bg-image"
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Droplet className="h-7 w-7" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Zašto darivati krvi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Otkrijte kako vaše darivanje krvi može napraviti ogromnu razliku
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300 shrink-0">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Jedna doza spašava 3 života</h3>
                <p className="text-gray-600">Vaša donacija može spasiti živote djece, odraslih i starijih osoba</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shrink-0">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Traje samo 10 minuta</h3>
                <p className="text-gray-600">Brzo i jednostavno - manje vremena nego što trebate za kavu</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300 shrink-0">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Sigurno i bezbolno</h3>
                <p className="text-gray-600">Profesionalni tim osigurava vašu sigurnost i udobnost</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300 shrink-0">
                  <Gift className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Pogodnosti za darivatelje</h3>
                <p className="text-gray-600">Besplatno dopunsko zdravstveno osiguranje i posebne povlastice</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section id="pridruzi" className="relative min-h-screen py-20 px-6 text-white overflow-hidden flex flex-col items-center justify-center">
        {/* Background image + red overlay */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-center bg-cover md:bg-fixed responsive-bg-image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/70 to-red-900/80" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pridruži se zajednici</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Budi dio naše zajednice darivatelja krvi i primi obavijesti o nadolazećim akcijama darivanja krvi.
              Otvoreno je za sve - i za one koji već daruju i za one koji se tek planiraju pridružiti.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-6">
              <Badge className="bg-white/15 text-white border-white/20">Besplatno</Badge>
              <Badge className="bg-white/15 text-white border-white/20">Na vrijeme</Badge>
              <Badge className="bg-white/15 text-white border-white/20">Možete se odjaviti u svakom trenutku</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-10 items-start">
            {/* Left: Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 bg-white/15">
                  <BellRing className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Pozivnice za akcije</h3>
                  <p className="text-red-100">Prvi saznajte termin i lokaciju sljedeće akcije darivanja u vašem gradu.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 bg-white/15">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Podsjetnici</h3>
                  <p className="text-red-100">Obavijesti da ne propustite priliku za darivanje krvi.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 bg-white/15">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Jednostavno odjavljivanje</h3>
                  <p className="text-red-100">U svakom trenutku možete prestati primati obavijesti — bez obveza.</p>
                </div>
              </div>
            </div>

            {/* Right: Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <FacebookCard />
              <InstagramCard />
              <WhatsAppCard />
              <ViberCard />
              <ApplicationCard />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sljedeće akcije darivanja
            </h2>
            <p className="text-xl text-gray-600">
              Planirajte svoj doprinos i pridružite nam se
            </p>
          </div>

          <div className="space-y-6">
            {actions.filter((action) => action.date >= new Date()).map((action) => (
              <>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                          <Calendar className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{action.title}</h3>
                          <p className="text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Javite nam se za sve informacije o darivanju krvi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Telefon</h3>
                <p className="text-lg text-gray-600">052 xxx xxx</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
                <p className="text-lg text-gray-600">info@crvenikriz-buje.hr</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Crveni križ Buje</h3>
          <p className="text-gray-300 mb-6">
            Spašavamo živote zajedno - jedna kap krvi po kap
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Crveni križ Buje. Sva prava pridržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}