import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import { Card, CardHeader } from "../ui/shadcn/card";

export type SocialCardProps = {
	href: string;
	ctaText: string;
	icon: ReactNode;
	bgColor: string;
	bgIconColor: string;
	navigateIconColor: string;
};

export function SocialCard({
	href,
	ctaText,
	icon,
	bgColor,
	bgIconColor,
	navigateIconColor,
}: SocialCardProps) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			<Card
				className={cn(
					"h-full flex flex-row rounded-xl items-center justify-between shadow hover:shadow-xl transition-all duration-300",
					bgColor,
				)}
			>
				<CardHeader className={cn("flex flex-row gap-4 items-center")}>
					<div
						className={cn(
							"size-16 shrink-0 rounded-full flex items-center justify-center shadow-lg",
							bgIconColor,
						)}
					>
						{icon}
					</div>
				</CardHeader>
				<div className="text-lg font-bold leading-tight flex-1 ml-8">
					{ctaText}
				</div>
				<div className="pt-2 mr-4">
					<ChevronRight className={cn("size-8 shrink-0", navigateIconColor)} />
				</div>
			</Card>
		</a>
	);
}
