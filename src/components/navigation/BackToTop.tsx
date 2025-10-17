"use client";

import { Button } from "@/components/ui/shadcn/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsVisible(scrollTop > 300); // Prikaži gumb nakon 300px scrolla
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			onClick={scrollToTop}
			size="lg"
			className={`fixed bottom-8 right-8 z-40 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-10 pointer-events-none"
			} bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white`}
		>
			<ArrowUp className="h-5 w-5" />
		</Button>
	);
}
