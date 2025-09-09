import { ImageWithFallback } from "../ImageWithFallback";
import { Clock, UserCheck, Droplets, Coffee } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: UserCheck,
      title: "Registracija",
      description: "Registracija, popunjavanje ankete i zdravstveni pregled",
      time: "10-15 min"
    },
    {
      icon: Droplets,
      title: "Donacija krvi",
      description: "Stvarni proces donacije krvi",
      time: "8-12 min"
    },
    {
      icon: Coffee,
      title: "Odmor i osvježenje",
      description: "Opustite se uz grickalice i piće dok se oporavljate",
      time: "10-15 min"
    }
  ];

  return (
    <section id="proces" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Proces darivanja
              </h2>
              <p className="text-xl text-gray-600">
                Proces donacije je jednostavan, siguran i traje manje od sat vremena od početka do kraja.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg text-gray-900">{step.title}</h3>
                      <span className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {step.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg text-blue-900 mb-2">Prije Dolaska</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Pojedite zdrav obrok i ostanite hidrirani</li>
                <li>• Dobro se naspavajte</li>
                <li>• Ponesite valjanu osobnu iskaznicu s fotografijom</li>
                <li>• Izbjegavajte alkohol 24 sata prije donacije</li>
              </ul>
            </div>
          </div>

          <div className="lg:order-first">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvY2VzcyUyMHN0ZXAlMjBndWlkZXxlbnwxfHx8fDE3NTc0MTY5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Medical process steps guide"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}