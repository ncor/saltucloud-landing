import Image from 'next/image';
import IntegrationsImage from '@/public/integrations.svg';


export default function Integrations() {
    return <div className="-z-10 w-full px-6 flex justify-center backdrop-blur-[160px] overflow-x-hidden">
        <div className="reverse w-full py-[84px] flex justify-center">
            <Image src={ IntegrationsImage } alt="Интеграции"/>
        </div>
    </div>;
}
