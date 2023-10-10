import Image from 'next/image';
import RedirectIconImage from '@/public/redirect-icon.svg';


export default function RedirectIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ RedirectIconImage }
            alt=""
            className="fill-inherit"
            fill
        />
    </div>
}
