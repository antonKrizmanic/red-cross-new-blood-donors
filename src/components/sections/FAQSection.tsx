'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/shadcn/button'

interface FAQItem {
    id: number
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: "Zašto darivati krvi?",
        answer: "Krv nije moguće proizvesti, jedini izvor tog lijeka je čovjek – darivatelj krvi. Svakodnevno brojni bolesnici trebaju liječenje krvnim pripravcima, stoga, kako bi se osigurao dovoljan broj krvnih pripravaka, potrebno je uvijek imati dovoljan broj darivatelja. Darivati možete punu krv i/ili krvne sastojke na staničnom separatoru. Krvne sastojke možete darivati samo u HZTM-u, nakon što se više puta darivali punu krv."
    },
    {
        id: 2,
        question: "Tko može darivati krv?",
        answer: "Krv može darivati svaka osoba: dobrog općeg zdravstvenog stanja, u dobi od 18 do 65 godina, tjelesne težine iznad 55 kilograma, koja zadovoljava kriterije za odabir darivatelja krvi."
    },
    {
        id: 3,
        question: "Kada darivati krvi?",
        answer: "Stanje zaliha doza krvi Vaše krvne grupe možete saznati na stranici Hrvatskog zavoda za transfuzijski medicinu. Ako su trenutačne zalihe krvi Vaše krvne grupe ispod oznake premale zalihe, molimo Vas darujte krv. Ako su trenutačne količine krvi Vaše krvne grupe iznad oznake prevelike zalihe, molimo Vas privremeno odgodite darivanje dok se zalihe Vaše krvne grupe ne smanje. Muškarci mogu darivati krv svaka 3 mjeseca (do 7 dana ranije), a žene svaka 4 mjeseca (do 7 dana ranije). Podatak o datumu prethodnog darivanja nalazi se u Vašoj Iskaznici darivatelja. Ako nemate Iskaznicu darivatelja taj podatak možete dobiti na broj telefona 01/4600-337."
    },
    {
        id: 4,
        question: "Što se preopruča prije darivanja krvi?",
        answer: "Pojedite lagani obrok i uzmite dovoljno bezalkoholne tekućine. Pripremite osobnu iskaznicu ili putovnicu i zdravstvenu iskaznicu. Ponesite i Iskaznicu darivatelja krvi, kako bi Vam mogli upisati darivanje."
    },
    {
        id: 5,
        question: "Mora li se prije darivanja biti \"na tašte\"?",
        answer: "Prije davanja krvi nije potrebno biti natašte. Davanje krvi je sastavni dio svakodnevnog ljudskog načina života i čovjek na taj dan treba uobičajeno jesti i piti. Osjećati ćete se bolje ako nekoliko sati prije davanja krvi pojedete lagani obrok. Jedino Vas molimo da unutar 8 sati prije davanja krvi ne jedete izrazito masnu hranu i ne pijete alkohol jer njihovi sastojci mogu transfuzijom krvi biti uneseni u bolesnika i nanijeti mu štetu."
    },
    {
        id: 6,
        question: "Smiju li tetovirane osobe darivati krvi?",
        answer: "Smiju, ukoliko nisu tetovirani zadnja 4 mjeseca."
    },
    {
        id: 7,
        question: "Zašto se daruje 450ml krvi?",
        answer: "Organizam odrasle osobe, tjelesne težine iznad 55 kg ima više od 4,5 L krvi. Prosječno, krv čini 12% tjelesne težine čovjeka. Gubitak krvi do 15% organizam podnosi bez ikakvih popratnih pojava. Darivanjem 450mL krvi organizam gubi manje od 10% ukupne količine krvi."
    },
    {
        id: 8,
        question: "Zašto strani državljani ne mogu darivati krvi?",
        answer: "Transfuzijska služba svake zemlje prati epidemiološko stanje u zemlji, prati uvijete života darivatelja i prema tim pokazateljima određuje kako i kojim testovima ispitivati krv darivatelja na prisutnost uzročnika zaraznih bolesti. Zbog toga svaka zemlja može biti sigurna samo u krv i krvne pripravke dobivene od darivatelja krvi u toj zemlji. Pravilnikom o krvi i krvnim sastojcima od 16. prosinca 1998. (NN 14/99) u čl. 9, u stavku 2 je propisano da darivatelj krvi mora biti državljanin Republike Hrvatske."
    }
]

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    return (
        <section id="pitanja" className="py-20 px-6 bg-gradient-to-br from-red-50 via-white to-red-50">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Često postavljena pitanja
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Pronađite odgovore na najčešća pitanja o darivanju krvi i pomozite nam spasiti živote
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleItem(item.id)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:cursor-pointer"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                    {item.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-red-600 transition-transform duration-300 flex-shrink-0 ${openItems.includes(item.id) ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(item.id)
                                    ? 'min-h-24 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-6">
                                    <div className="border-t border-gray-100 pt-6">
                                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-red-900/80 via-red-800/70 to-red-900/80 rounded-3xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Još uvijek imate pitanja?
                        </h3>
                        <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                            Naš tim je tu da vam pomogne. Kontaktirajte nas i dobit ćete odgovor u najkraćem mogućem roku.
                        </p>
                        <Button
                            size="lg"
                            onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-red-700 hover:bg-red-50 px-8 py-7 text-lg font-semibold rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
                        >
                            Kontaktirajte nas
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
