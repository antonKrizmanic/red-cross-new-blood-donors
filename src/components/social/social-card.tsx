import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import type { ChannelIcon, CommunityChannel } from '@/content/page-content';
import { FacebookIcon } from '../ui/icons/facebook-icon';
import { InstagramIcon } from '../ui/icons/instagram-icon';
import SmartphoneIcon from '../ui/icons/smartphone-icon';
import { ViberIcon } from '../ui/icons/viber-icon';
import WebPageIcon from '../ui/icons/web-page-icon';
import { WhatsAppIcon } from '../ui/icons/whats-app-icon';

const iconMap: Record<ChannelIcon, ReactNode> = {
    application: <SmartphoneIcon />,
    whatsapp: <WhatsAppIcon />,
    viber: <ViberIcon />,
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    website: <WebPageIcon />,
};

type SocialCardProps = {
    channel: CommunityChannel;
};

export function SocialCard({ channel }: SocialCardProps) {
    return (
        <a
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-card social-card--${channel.accent}`}
        >
            <span className="social-card__icon">{iconMap[channel.icon]}</span>
            <span className="social-card__label">{channel.ctaText}</span>
            <ArrowUpRight className="social-card__arrow" aria-hidden="true" />
        </a>
    );
}
