import { useTranslations } from "next-intl";
import Link from "../common/Link";
import LogoIcon from "../icons/LogoIcon";


export default function Footer() {
    const t = useTranslations();

    return <div className="mt-auto w-full px-6 py-6 md:py-0 md:h-[72px] flex justify-center border-neutral-900 border-t-[1px] bg-[#030303]">
        <div className="w-full max-w-6xl flex flex-col md:flex-row md:justify-between md:items-center gap-9 text-[16px]">
            <a href="/" className="flex gap-2">
                <LogoIcon/>
                <div className="text-neutral-400">
                    © 2023
                </div>
            </a>
            <div className="flex flex-col md:flex-row gap-8 md:gap-6">
                <Link href="/#contacts">
                    { t('navigation.contacts') }
                </Link>
                <Link href="https://t.me/saltu_sup_bot" target="_blank">
                    { t('navigation.support') }
                </Link>
                <Link href="/policy">
                    { t('navigation.policy') }
                </Link>
            </div>
            <div className="flex gap-1">
                <div className="text-neutral-400">
                    by
                </div>
                <a href="https://bento.me/ensi" className="font-medium">
                    ensi
                </a>
            </div>
        </div>
    </div>;
}
