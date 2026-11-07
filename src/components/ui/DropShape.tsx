import type { SVGProps } from 'react';

export const DROP_PATH =
    'M50 0C50 0 95 47 95 85A45 45 0 1 1 5 85C5 47 50 0 50 0Z';

export function DropShape(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 100 130" aria-hidden="true" {...props}>
            <path d={DROP_PATH} fill="currentColor" />
        </svg>
    );
}
