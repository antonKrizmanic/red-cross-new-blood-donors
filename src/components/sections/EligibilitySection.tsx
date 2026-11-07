import { EligibilityCheck } from '@/components/eligibility/EligibilityCheck';
import { SplitWords } from '@/components/ui/SplitWords';
import { eligibilityContent } from '@/content/page-content';
import styles from './EligibilitySection.module.css';

export function EligibilitySection() {
    return (
        <section id="mogu-li-darivati" className={styles.eligibility}>
            <div className={`container ${styles.layout}`}>
                <header className={styles.heading}>
                    <h2 className="display display--lg" data-reveal="words">
                        <SplitWords text={eligibilityContent.title} />
                    </h2>
                    <p className="lede" data-reveal>
                        {eligibilityContent.description}
                    </p>
                </header>
                <div data-reveal="paper">
                    <EligibilityCheck />
                </div>
            </div>
        </section>
    );
}
