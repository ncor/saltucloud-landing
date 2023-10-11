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
    color: HightlightColors,
    size?: number,
} & Pick<
    React.HTMLAttributes<HTMLDivElement>, 'className'
>;

export default function Highlight({ color, className, size=1000 }: HighlightProps) {
    return <div className={
        `absolute opacity-[0.2] -z-10 ${className} pointer-events-none mix-blend-plus-lighter`
    } style={{
        width: size + 'px',
        height: size + 'px'
    }}>
        <Image src={ highlightImages[color] } alt="" fill/>
    </div>
}
