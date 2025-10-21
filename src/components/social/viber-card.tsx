import { ViberIcon } from '../ui/icons/viber-icon';
import { SocialCard } from './social-card';

export function ViberCard() {
    return (
        <SocialCard
            href="https://invite.viber.com/?g2=AQBwX6qBJ9VnL1WBfTnK6ZhDXlxnOPtLHoCSuxxVj089tyaNP34cpCzMZceI0dPu"
            ctaText="Pridružite nam se na Viber-u"
            icon={<ViberIcon className="size-10 fill-white" />}
            bgColor="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
            bgIconColor="bg-purple-500"
            navigateIconColor="text-purple-600"
        />
    );
}
