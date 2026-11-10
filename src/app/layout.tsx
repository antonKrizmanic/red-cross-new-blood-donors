import type { Metadata } from 'next';
import { Bricolage_Grotesque, Literata } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
    variable: '--font-bricolage',
    subsets: ['latin', 'latin-ext'],
    axes: ['opsz', 'wdth'],
});

const literata = Literata({
    variable: '--font-literata',
    subsets: ['latin', 'latin-ext'],
    axes: ['opsz'],
});

export const metadata: Metadata = {
    title: 'HCK GDCK Buje – Daruj krv, spasi život',
    description:
        'Stranica Hrvatskog Crvenog križa, Gradskog društva Crvenog križa Buje za promicanje darivanja krvi na području Bujštine (Umag, Buje, Novigrad).',
    keywords: [
        'darivanje krvi',
        'crveni križ',
        'buje',
        'umag',
        'novigrad',
        'doniranje krvi',
        'hrvatski crveni križ',
    ],
    authors: [
        { name: 'Hrvatski Crveni križ – Gradsko društvo Crvenog križa Buje' },
    ],
    creator: 'Hrvatski Crveni križ',
    publisher: 'Hrvatski Crveni križ',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.crvenikrizbujedarivatelji.gdckapp.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'hr_HR',
        url: 'https://www.crvenikrizbujedarivatelji.gdckapp.com',
        title: 'HCK GDCK Buje – Daruj krv, spasi život',
        description:
            'Stranica Hrvatskog Crvenog križa, Gradskog društva Crvenog križa Buje za promicanje darivanja krvi na području Bujštine (Umag, Buje, Novigrad).',
        siteName: 'Hrvatski Crveni križ – GDCK Buje',
        images: [
            {
                url: '/logo.webp',
                width: 1024,
                height: 1024,
                alt: 'Hrvatski Crveni križ GDCK Buje – Daruj krv, spasi život',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'HCK GDCK Buje – Daruj krv, spasi život',
        description:
            'Stranica Hrvatskog Crvenog križa, Gradskog društva Crvenog križa Buje za promicanje darivanja krvi na području Bujštine (Umag, Buje, Novigrad).',
        images: ['/logo.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            {
                url: '/logo.ico',
                type: 'image/x-icon',
            },
        ],
        apple: [
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="hr"
            className={`${bricolage.variable} ${literata.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
