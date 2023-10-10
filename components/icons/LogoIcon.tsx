import Image from 'next/image';
import LogoIconImage from '@/public/logo-icon.svg';


export default function LogoIcon() {
    return <div className="h-6 w-[21.56px] relative">
        <Image
            src={ LogoIconImage }
            alt="Saltu Cloud"
            className="fill-inherit"
            fill
        />
    </div>
}
