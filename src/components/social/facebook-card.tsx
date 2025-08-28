
import { FacebookIcon } from "../ui/icons/facebook-icon";
import { SocialCard } from "./social-card";

export function FacebookCard() {
    return (
        <SocialCard
            href="https://www.facebook.com/CrveniKrizBuje"
            ctaText="Pridružite nam se na Facebooku"
            icon={<FacebookIcon className="size-10 fill-white" />}
            bgColor="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"
            bgIconColor="bg-[#1877F2]"
            navigateIconColor="text-blue-600"
        />
    )
}
