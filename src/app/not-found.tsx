import type { Metadata } from 'next';
import styles from './not-found.module.css';

export const metadata: Metadata = {
    title: '404: Stranica nije pronađena',
};

export default function NotFound() {
    return (
        <main className={styles.page}>
            <h1 className="display">404</h1>
            <p className="lede">Ova stranica nije pronađena.</p>
            <a className="button button--solid" href="/">
                Naslovnica
            </a>
        </main>
    );
}
