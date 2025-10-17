import { BellRing, Calendar, CheckCircle2 } from "lucide-react";
import { ApplicationCard } from "@/components/social/application-card";
import { FacebookCard } from "@/components/social/facebook-card";
import { InstagramCard } from "@/components/social/instagram-card";
import { ViberCard } from "@/components/social/viber-card";
import { WebPageCard } from "@/components/social/web-page-card";
import { WhatsAppCard } from "@/components/social/whats-app-card";
import { Badge } from "@/components/ui/shadcn/badge";

export function JoinCommunitySection() {
	return (
		<section
			id="pridruzi"
			className="relative min-h-screen py-20 px-6 text-white overflow-hidden flex flex-col items-center justify-center"
		>
			{/* Background image + red overlay */}
			<div className="absolute inset-0">
				<div className="h-full w-full bg-center bg-cover md:bg-fixed responsive-bg-image" />
				<div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/70 to-red-900/80" />
			</div>
			<div className="relative z-10 container mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
						Pridruži se zajednici
					</h2>
					<p className="text-xl text-white/90 max-w-3xl mx-auto">
						Budi dio naše zajednice darivatelja krvi i primi obavijesti o
						nadolazećim akcijama darivanja krvi. Otvoreno je za sve - i za one
						koji već daruju i za one koji se tek planiraju pridružiti.
					</p>
					<div className="flex flex-wrap justify-center gap-2 mt-4 md:mt-6">
						<Badge className="bg-white/15 text-white border-white/20">
							Besplatno
						</Badge>
						<Badge className="bg-white/15 text-white border-white/20">
							Na vrijeme
						</Badge>
						<Badge className="bg-white/15 text-white border-white/20">
							Možete se odjaviti u svakom trenutku
						</Badge>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-8 md:gap-10 items-start">
					{/* Left: Value props */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 bg-white/15">
								<BellRing className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-xl font-semibold">Pozivnice za akcije</h3>
								<p className="text-red-100">
									Prvi saznajte termin i lokaciju sljedeće akcije darivanja u
									vašem gradu.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 bg-white/15">
								<Calendar className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-xl font-semibold">Podsjetnici</h3>
								<p className="text-red-100">
									Obavijesti da ne propustite priliku za darivanje krvi.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-full shrink-0 bg-white/15">
								<CheckCircle2 className="h-6 w-6" />
							</div>
							<div>
								<h3 className="text-xl font-semibold">
									Jednostavno odjavljivanje
								</h3>
								<p className="text-red-100">
									U svakom trenutku možete prestati primati obavijesti — bez
									obveza.
								</p>
							</div>
						</div>
					</div>

					{/* Right: Channels */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						<ApplicationCard />
						<WhatsAppCard />
						<ViberCard />
						<FacebookCard />
						<InstagramCard />
						<WebPageCard />
					</div>
				</div>
			</div>
		</section>
	);
}
