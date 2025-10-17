import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/shadcn/card';

export function ContactSection() {
    return (
        <section id="kontakt" className="py-20 px-6 bg-white">
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
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Telefon
                            </h3>
                            <p className="text-lg text-gray-600">
                                +385 (0)52 772 446
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                        <CardContent className="p-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                                <Mail className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                Email
                            </h3>
                            <p className="text-lg text-gray-600">
                                info@crvenikrizbuje.hr
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
