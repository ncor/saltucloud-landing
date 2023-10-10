import Image from 'next/image';
import ActionIconImage from '@/public/action-icon.svg';


export default function ActionIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ ActionIconImage }
            alt=""
            className="fill-inherit"
            fill
        />
    </div>
}
