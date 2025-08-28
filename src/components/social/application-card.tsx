import SmartphoneIcon from "../ui/icons/smartphone-icon";
import { SocialCard } from "./social-card";

export function ApplicationCard() {
    return (
        <SocialCard
            href="https://play.google.com/"
            ctaText="Pogledajte svoj profil darivatelja"
            icon={<SmartphoneIcon className="size-10 fill-white" />}
            bgColor="bg-gradient-to-br from-red-50 to-red-100 border-red-200"
            bgIconColor="bg-red-500"
            navigateIconColor="text-red-600"
        />
    )
}