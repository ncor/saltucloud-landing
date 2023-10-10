import Image from 'next/image';
import CubeIconWhiteImage from '@/public/cube-icon-white.svg';
import CubeIconPeachImage from '@/public/cube-icon-peach.svg';
import CubeIconMagentaImage from '@/public/cube-icon-magenta.svg';


export const cubeIconImages = {
    'white': CubeIconWhiteImage,
    'peach': CubeIconPeachImage,
    'magenta': CubeIconMagentaImage
}

export type CubeIconColors = keyof (typeof cubeIconImages);

export default function CubeIcon({ color }: {
    color: CubeIconColors
}) {
    return <div className="h-6 w-6 relative">
        <Image
            src={ cubeIconImages[color] }
            alt=""
            fill
        />
    </div>
}
