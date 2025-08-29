import WebPageIcon from "../ui/icons/web-page-icon";
import { SocialCard } from "./social-card";

export function WebPageCard() {
    return (
        <SocialCard
            href="https://www.crvenikrizbuje.hr"
            ctaText="Pogledajte našu web stranicu"
            icon={<WebPageIcon className="size-10 fill-white" />}
            bgColor="bg-gradient-to-br from-red-50 to-red-100 border-red-200"
            bgIconColor="bg-red-500"
            navigateIconColor="text-red-600"
        />
    )
}