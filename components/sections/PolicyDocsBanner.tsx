import { useTranslations } from "next-intl";
import Lightbulb from "../common/Highlight";


export default function PolicyDocsBanner() {
    const t = useTranslations();

    return <div className="w-full px-6 flex justify-center">
        <div className="w-full max-w-6xl flex py-[84px] text-center justify-center">
            <div className="relative text-5xl md:text-[80px] md:text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 lg:w-4/5">
                { t('policy.title') }
                <Lightbulb color="white" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </div>
        </div>
    </div>
}
