import { Fragment } from 'react';

type SplitWordsProps = {
    text: string;
    /** Delay added before the first word, in milliseconds. */
    delay?: number;
};

/** Wraps each word so headings can rise into place word by word. */
export function SplitWords({ text, delay = 0 }: SplitWordsProps) {
    return text.split(' ').map((word, index) => (
        <Fragment key={`${word}-${index}`}>
            {index > 0 && ' '}
            <span className="word">
                <span
                    className="word__inner"
                    style={{ transitionDelay: `${delay + index * 70}ms` }}
                >
                    {word}
                </span>
            </span>
        </Fragment>
    ));
}
