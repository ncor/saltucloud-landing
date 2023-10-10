import Image from 'next/image';
import HideIconImage from '@/public/hide-icon.svg';


export default function HideIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ HideIconImage }
            alt=""
            className="fill-inherit"
            fill
        />
    </div>
}
