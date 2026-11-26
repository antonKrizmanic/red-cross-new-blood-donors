'use client';

import { ArrowUpRight, Check, Share2, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { useState, useSyncExternalStore } from 'react';
import { mobileAppContent } from '@/content/page-content';
import {
    ANDROID_OPEN_APP_URL,
    APP_STORE_URL,
    GOOGLE_PLAY_URL,
    MOBILE_APP_DOWNLOAD_URL,
    WEB_APP_URL,
} from '@/lib/mobile-app';
import styles from './DownloadOptions.module.css';
import { type Store, StoreBadges } from './StoreBadges';

/** `unknown` is the server render and the first client render. */
type Platform = 'ios' | 'android' | 'android-chromium' | 'other' | 'unknown';

function detectPlatform(): Platform {
    const { userAgent, maxTouchPoints } = navigator;
    if (/Android/i.test(userAgent)) {
        return /Chrome\//i.test(userAgent) && !/; wv\)/i.test(userAgent)
            ? 'android-chromium'
            : 'android';
    }
    // iPadOS presents itself as a Mac; only the touch screen gives it away.
    if (
        /iPhone|iPad|iPod/.test(userAgent) ||
        (/Macintosh/.test(userAgent) && maxTouchPoints > 1)
    ) {
        return 'ios';
    }
    return 'other';
}

const subscribe = () => () => {};

/**
 * Store choices for the visitor's device. Nothing happens on load: phones see
 * their own store first, and every visitor can still pick the other store,
 * the web app, or pass the link on.
 */
export function DownloadOptions() {
    const browserPlatform = useSyncExternalStore<Platform>(
        subscribe,
        detectPlatform,
        () => 'unknown',
    );
    const platform =
        browserPlatform === 'android-chromium' ? 'android' : browserPlatform;

    const stores: Store[] =
        platform === 'ios'
            ? ['app-store']
            : platform === 'android'
              ? ['google-play']
              : ['app-store', 'google-play'];
    const isPhone = platform === 'ios' || platform === 'android';

    return (
        <div className={styles.options} data-platform={platform}>
            <div className={styles.stores}>
                <p className={styles.platform}>
                    <Smartphone aria-hidden="true" />
                    {
                        mobileAppContent.platformLabels[
                            isPhone ? platform : 'other'
                        ]
                    }
                </p>
                <StoreBadges stores={stores} size="lg" />

                <ul className={styles.links}>
                    {browserPlatform === 'android-chromium' && (
                        <li>
                            <a href={ANDROID_OPEN_APP_URL}>
                                {mobileAppContent.openAppLabel}
                                <ArrowUpRight aria-hidden="true" />
                            </a>
                        </li>
                    )}
                    {isPhone && (
                        <li>
                            <a
                                href={
                                    platform === 'ios'
                                        ? GOOGLE_PLAY_URL
                                        : APP_STORE_URL
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {mobileAppContent.otherStoreLabels[platform]}
                                <ArrowUpRight aria-hidden="true" />
                            </a>
                        </li>
                    )}
                    <li>
                        <a
                            href={WEB_APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {mobileAppContent.webAppLabel}
                            <ArrowUpRight aria-hidden="true" />
                        </a>
                    </li>
                </ul>

                {platform !== 'unknown' && <ShareButton />}
            </div>

            {!isPhone && (
                <figure className={styles.qr}>
                    <Image
                        src="/eknjizica/download-qr.svg"
                        alt={mobileAppContent.qrAlt}
                        width={37}
                        height={37}
                        unoptimized
                    />
                    <figcaption>
                        <strong>{mobileAppContent.qrTitle}</strong>
                        {mobileAppContent.qrDescription}
                    </figcaption>
                </figure>
            )}
        </div>
    );
}

function ShareButton() {
    const [copied, setCopied] = useState(false);

    const share = async () => {
        const data = {
            title: mobileAppContent.shareTitle,
            url: MOBILE_APP_DOWNLOAD_URL,
        };
        if (navigator.share && navigator.canShare?.(data) !== false) {
            try {
                await navigator.share(data);
            } catch {
                // The visitor closed the share sheet.
            }
            return;
        }
        try {
            await navigator.clipboard.writeText(MOBILE_APP_DOWNLOAD_URL);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2500);
        } catch {
            // Clipboard access was refused; the address bar still has the link.
        }
    };

    return (
        <button
            type="button"
            className={`button button--outline ${styles.share}`}
            onClick={share}
        >
            {copied ? (
                <Check aria-hidden="true" />
            ) : (
                <Share2 aria-hidden="true" />
            )}
            <span aria-live="polite">
                {copied
                    ? mobileAppContent.copiedLabel
                    : mobileAppContent.shareLabel}
            </span>
        </button>
    );
}
