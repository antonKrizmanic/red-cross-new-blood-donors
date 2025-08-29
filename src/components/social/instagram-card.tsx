import { InstagramIcon } from "../ui/icons/instagram-icon";
import { SocialCard } from "./social-card";

export function InstagramCard() {
    return (

        <SocialCard
            href="https://www.instagram.com/crvenikrizbuje"
            ctaText="Pridružite nam se na Instagramu"
            icon={<InstagramIcon className="size-10 fill-white" />}
            bgColor="bg-gradient-to-br from-red-50 to-orange-50 border-red-200"
            bgIconColor="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
            navigateIconColor="text-[#fcb045]"
        />
    )
}