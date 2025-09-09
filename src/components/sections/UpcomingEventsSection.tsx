import { Card, CardContent } from '@/components/ui/shadcn/card'
import { Calendar, Clock, MapPin } from 'lucide-react'

interface Action {
    date: Date
    title: string
    description: string,
    time?: string | null,
    location?: string | null,
    address: string | null
}

interface UpcomingEventsSectionProps {
    actions: Action[]
}

export function UpcomingEventsSection({ actions }: UpcomingEventsSectionProps) {
    return (
        <section id="sljedece-akcije" className="py-20 px-6 bg-gray-50">
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
                    {actions.filter((action) => action.date >= new Date()).map((action, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                                            <Calendar className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{action.title}</h3>
                                            {action.time && (
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{action.time}</span>
                                                </div>
                                            )}
                                            {action.location && action.address && (
                                                <div className="space-y-1">
                                                    <div className="flex items-start gap-2 text-gray-900">
                                                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                        <div>
                                                            <div className="font-medium">{action.location}</div>
                                                            <div className="text-sm text-gray-600">{action.address}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {(!action.address || !action.location || !action.time) && (
                                                <p className="text-gray-600">{action.description}</p>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
