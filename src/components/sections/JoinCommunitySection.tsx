import type { CSSProperties } from 'react';
import { SocialCard } from '@/components/social/social-card';
import { EditorialIcon } from '@/components/ui/editorial-icon';
import {
    communityChannels,
    communityContent,
    communityValues,
} from '@/content/page-content';

export function JoinCommunitySection() {
    return (
        <section id="pridruzi" className="section-panel section-paper">
            <div
                className="section-symbol section-symbol--left"
                aria-hidden="true"
            >
                −
            </div>
            <div className="section-container">
                <header className="community-heading">
                    <div data-reveal>
                        <p className="eyebrow">
                            <span />
                            02
                        </p>
                        <h2 className="display-title">
                            {communityContent.title}
                        </h2>
                    </div>
                    <div className="community-heading__copy" data-reveal>
                        <p className="section-intro">
                            {communityContent.description}
                        </p>
                        <div className="badge-row">
                            {communityContent.badges.map((badge) => (
                                <span key={badge}>{badge}</span>
                            ))}
                        </div>
                    </div>
                </header>

                <div className="community-values">
                    {communityValues.map((value, index) => (
                        <article
                            key={value.title}
                            className="community-value"
                            data-reveal
                            style={
                                {
                                    '--reveal-delay': `${index * 80}ms`,
                                } as CSSProperties
                            }
                        >
                            <div className="community-value__icon">
                                <EditorialIcon name={value.icon} />
                            </div>
                            <div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="social-grid">
                    {communityChannels.map((channel, index) => (
                        <div
                            key={channel.href}
                            data-reveal
                            style={
                                {
                                    '--reveal-delay': `${(index % 3) * 70}ms`,
                                } as CSSProperties
                            }
                        >
                            <SocialCard channel={channel} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
