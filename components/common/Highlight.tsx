import HighlightWhiteImage from '@/public/highlight-white.svg';
import HighlightPeachImage from '@/public/highlight-peach.svg';
import HighlightMagentaImage from '@/public/highlight-magenta.svg';
import Image from 'next/image';


export const highlightImages = {
    'white': HighlightWhiteImage,
    'peach': HighlightPeachImage,
    'magenta': HighlightMagentaImage
}

export type HightlightColors = keyof (typeof highlightImages);

export type HighlightProps = {
    color: HightlightColors
} & Pick<
    React.HTMLAttributes<HTMLDivElement>, 'className'
>;

export default function Highlight({ color, className }: HighlightProps) {
    return <div className={
        `${className} absolute w-[775px] h-[775px] opacity-[0.2] -z-10`
    }>
        <Image src={ highlightImages[color] } alt="" fill/>
    </div>
}
