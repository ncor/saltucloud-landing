import Image from 'next/image';
import IntegrationsImage from '@/public/integrations.svg';


export default function Integrations() {
    return <div className="w-full px-6 flex justify-center bg-black overflow-x-hidden">
        <div className="reverse w-full py-[84px] flex justify-center">
            <Image src={ IntegrationsImage } alt="Интеграции"/>
        </div>
    </div>;
}
