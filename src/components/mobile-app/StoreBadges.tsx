import Image from 'next/image';
import { mobileAppContent } from '@/content/page-content';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/mobile-app';
import styles from './StoreBadges.module.css';

export type Store = 'app-store' | 'google-play';

type StoreBadgesProps = {
    /** Stores to show, in order. Both by default. */
    stores?: Store[];
    size?: 'md' | 'lg';
};

/**
 * The official Croatian store badges, unaltered. Apple asks for at least 40px
 * of height on screen and clear space of a quarter of the badge height.
 */
export function StoreBadges({
    stores = ['app-store', 'google-play'],
    size = 'md',
}: StoreBadgesProps) {
    return (
        <ul className={styles.badges} data-size={size}>
            {stores.map((store) => (
                <li key={store}>
                    <StoreBadge store={store} />
                </li>
            ))}
        </ul>
    );
}

function StoreBadge({ store }: { store: Store }) {
    if (store === 'app-store') {
        return (
            <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badge}
            >
                <Image
                    src="/eknjizica/app-store-badge-hr.svg"
                    alt={mobileAppContent.appStoreLabel}
                    width={130}
                    height={41}
                    unoptimized
                />
            </a>
        );
    }

    return (
        <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.badge}
        >
            <Image
                src="/eknjizica/google-play-badge-hr.png"
                alt={mobileAppContent.googlePlayLabel}
                width={646}
                height={250}
            />
        </a>
    );
}
