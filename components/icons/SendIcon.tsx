import Image from 'next/image';
import SendIconImage from '@/public/send-icon.svg';


export default function SendIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ SendIconImage }
            alt=""
            className="fill-inherit"
            fill
        />
    </div>
}
