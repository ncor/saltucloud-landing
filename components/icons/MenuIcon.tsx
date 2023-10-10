import Image from 'next/image';
import MenuIconImage from '@/public/menu-icon.svg';


export default function MenuIcon() {
    return <div className="h-6 w-6 relative">
        <Image
            src={ MenuIconImage }
            alt="Меню"
            className="fill-inherit"
            fill
        />
    </div>
}
