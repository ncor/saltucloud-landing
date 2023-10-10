import Image from 'next/image';
import DotIconImage from '@/public/dot-icon.svg';


export default function DotIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ DotIconImage }
            alt=""
            className="fill-inherit"
            fill
        />
    </div>
}
