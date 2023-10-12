'use client';

import { useTranslations } from "next-intl";
import Button from "../common/Button";
import ActionIcon from "../icons/ActionIcon";
import SendIcon from "../icons/SendIcon";


export default function Banner() {
    const t = useTranslations();

    return <div className="w-full px-6 flex justify-center">
        <div className="w-full max-w-6xl pt-16 pb-[84px] flex flex-col gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="text-5xl md:text-[80px] md:text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 lg:w-4/5">
                    { t('banner.title') }
                </div>
                <div className="text-2xl md:text-center leading-[29px] text-neutral-400 mix-blend-plus-lighter md:w-4/5 lg:w-2/3">
                    { t('banner.description') }
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:self-center">
                <Button
                    text={ t('banner.actions.rent') } icon={ <ActionIcon/> }
                    url="/#contacts" className="md:self-center"
                    local
                />
                <Button
                    text={ t('banner.actions.support') } icon={ <SendIcon/> }
                    url="https://t.me/saltu_sup_bot"
                    className="md:self-center" secondary
                />
            </div>
        </div>
    </div>;
}
