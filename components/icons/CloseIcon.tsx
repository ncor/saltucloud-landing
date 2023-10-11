import Image from 'next/image';
import CloseIconImage from '@/public/close-icon.svg';


export default function CloseIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ CloseIconImage }
            alt=""
            className="fill-inherit"
            fill
        />
    </div>
}
