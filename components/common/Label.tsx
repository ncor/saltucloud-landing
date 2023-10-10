export interface LabelProps {
    text: string,
    color: string,
    className?: string
}

/**
 * Pre-triggered dynamic styles.
 */
'bg-white';
'bg-peach';
'bg-magenta';

export function Label({ text, color, className }: LabelProps) {
    return <div className={
        `absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-black bg-${ color } px-4 py-2 rounded-full font-semibold whitespace-nowrap ${ className ? className : ''}`
    }>
        { text }
    </div>
}
