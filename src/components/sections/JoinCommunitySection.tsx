import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties, ReactNode } from 'react';
import { EditorialIcon } from '@/components/ui/editorial-icon';
import { FacebookIcon } from '@/components/ui/icons/facebook-icon';
import { InstagramIcon } from '@/components/ui/icons/instagram-icon';
import SmartphoneIcon from '@/components/ui/icons/smartphone-icon';
import { ViberIcon } from '@/components/ui/icons/viber-icon';
import WebPageIcon from '@/components/ui/icons/web-page-icon';
import { WhatsAppIcon } from '@/components/ui/icons/whats-app-icon';
import { SplitWords } from '@/components/ui/SplitWords';
import type { ChannelAccent, ChannelIcon } from '@/content/page-content';
import {
    communityChannels,
    communityContent,
    communityValues,
} from '@/content/page-content';
import styles from './JoinCommunitySection.module.css';

const channelIcons: Record<ChannelIcon, ReactNode> = {
    application: <SmartphoneIcon />,
    whatsapp: <WhatsAppIcon />,
    viber: <ViberIcon />,
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    website: <WebPageIcon />,
};

const accentColors: Record<ChannelAccent, string> = {
    red: 'var(--red)',
    green: '#128c4f',
    purple: '#6d3fb8',
    blue: '#1e66b8',
    instagram: '#c1267a',
};

export function JoinCommunitySection() {
    return (
        <section id="pridruzi" className={styles.join}>
            <div className={`container ${styles.layout}`}>
                <div className={styles.intro}>
                    <h2 className="display display--lg" data-reveal="words">
                        <SplitWords text={communityContent.title} />
                    </h2>
                    <p className="lede" data-reveal>
                        {communityContent.description}
                    </p>
                    <ul className={styles.badges} data-reveal>
                        {communityContent.badges.map((badge) => (
                            <li key={badge}>{badge}</li>
                        ))}
                    </ul>
                    <ul className={styles.values}>
                        {communityValues.map((value, index) => (
                            <li
                                key={value.title}
                                data-reveal
                                style={
                                    {
                                        '--reveal-delay': `${index * 70}ms`,
                                    } as CSSProperties
                                }
                            >
                                <EditorialIcon name={value.icon} />
                                <div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <ul className={styles.channels}>
                    {communityChannels.map((channel, index) => (
                        <li
                            key={channel.href}
                            data-reveal="paper"
                            style={
                                {
                                    '--reveal-delay': `${index * 60}ms`,
                                    '--reveal-rotate': `${index % 2 ? 1.2 : -1.2}deg`,
                                } as CSSProperties
                            }
                        >
                            <a
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.channel}
                                style={
                                    {
                                        '--accent':
                                            accentColors[channel.accent],
                                    } as CSSProperties
                                }
                            >
                                <span className={styles.channelIcon}>
                                    {channelIcons[channel.icon]}
                                </span>
                                <span className={styles.channelLabel}>
                                    {channel.ctaText}
                                </span>
                                <ArrowUpRight
                                    className={styles.channelArrow}
                                    aria-hidden="true"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
