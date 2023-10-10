import Image from 'next/image';
import ExpandIconImage from '@/public/expand-icon.svg';


export default function ExpandIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ ExpandIconImage }
            alt=""
            className="fill-inherit"
            fill
        />
    </div>
}
