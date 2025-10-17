import { Clock, Droplet, Gift, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/shadcn/card";

export function WhyDonateSection() {
	return (
		<section
			id="zasto-dariti-krv"
			className="py-20 px-6 bg-white relative overflow-hidden min-h-screen flex flex-col items-center justify-center"
		>
			{/* Background image */}
			<div className="pointer-events-none absolute inset-0">
				<div className="h-full w-full bg-center bg-cover md:bg-fixed opacity-30 responsive-bg-image" />
			</div>
			<div className="relative z-10 container mx-auto">
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
							<h3 className="text-xl font-semibold mb-3 text-gray-900">
								Jedna doza spašava 3 života
							</h3>
							<p className="text-gray-600">
								Vaša donacija dovoljna je za 3 doze krvi
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
						<CardContent className="p-6 md:p-8 text-center">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300 shrink-0">
								<Clock className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">
								Traje samo 10 minuta
							</h3>
							<p className="text-gray-600">
								Brzo i jednostavno - manje vremena nego što trebate za kavu
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
						<CardContent className="p-6 md:p-8 text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300 shrink-0">
								<Shield className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">
								Sigurno i bezbolno
							</h3>
							<p className="text-gray-600">
								Profesionalni tim osigurava vašu sigurnost i udobnost
							</p>
						</CardContent>
					</Card>

					<Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
						<CardContent className="p-6 md:p-8 text-center">
							<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300 shrink-0">
								<Gift className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-900">
								Pogodnosti za darivatelje
							</h3>
							<p className="text-gray-600">
								Besplatno dopunsko zdravstveno osiguranje i posebne povlastice
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
