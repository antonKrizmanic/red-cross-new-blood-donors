import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
    title: 'HCK GDCK Buje - Daruj krv, spasi život',
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
        { name: 'Hrvatski Crveni Križ - Gradsko društvo Crvenog križa Buje' },
    ],
    creator: 'Hrvatski Crveni Križ',
    publisher: 'Hrvatski Crveni Križ',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.crvenikrizbujedarivatelji.gdckapp.com'), // Replace with your actual domain
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'hr_HR',
        url: 'https://www.crvenikrizbujedarivatelji.gdckapp.com', // Replace with your actual domain
        title: 'HCK GDCK Buje - Daruj krv, spasi život',
        description:
            'Stranica Hrvatskog Crvenog križa, Gradskog društva Crvenog križa Buje za promicanje darivanja krvi na području Bujštine (Umag, Buje, Novigrad).',
        siteName: 'Hrvatski Crveni Križ - GDCK Buje',
        images: [
            {
                url: '/logo.webp', // You'll need to add this image to your public folder
                width: 1024,
                height: 1024,
                alt: 'Hrvatski Crveni Križ GDCK Buje - Daruj krv, spasi život',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HCK GDCK Buje - Daruj krv, spasi život',
        description:
            'Stranica Hrvatskog Crvenog križa, Gradskog društva Crvenog križa Buje za promicanje darivanja krvi na području Bujštine (Umag, Buje, Novigrad).',
        images: ['/logo.webp'], // Same image as Open Graph
        creator: '@crvenikriz', // Replace with actual Twitter handle if available
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
                url: '/apple-touch-icon.png', // You'll need to add this icon
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
        <html lang="hr">
            <body className={`${roboto.variable} antialiased`}>{children}</body>
        </html>
    );
}
