import { WhatsAppIcon } from '../ui/icons/whats-app-icon';
import { SocialCard } from './social-card';

export function WhatsAppCard() {
    return (
        <SocialCard
            href="https://chat.whatsapp.com/DoaoxRlipvV7A0IXkndyIF?mode=wwc"
            ctaText="Pridružite nam se na WhatsApp-u"
            icon={<WhatsAppIcon className="size-10 fill-white" />}
            bgColor="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
            bgIconColor="bg-green-500"
            navigateIconColor="text-green-600"
        />
    );
}
