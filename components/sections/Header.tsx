import { useContext } from "react";
import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import { MobileMenuContext } from "@/contexts/mobileMenuContext";
import Link from "../common/Link";
import CloseIcon from "../icons/CloseIcon";
import MobileMenu from "../MobileMenu";
import { useTranslations } from "next-intl";


export default function Header() {
    const { visible, setVisible } = useContext(MobileMenuContext);
    const t = useTranslations();

    return <div className="relative w-full px-6 h-[64px] flex justify-center bg-black border-neutral-900 border-b-[1px]">
        <MobileMenu/>
        <div className="w-full max-w-6xl py-6 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
                <LogoIcon/>
                <div className="font-bold text-xl leading-6">
                    cloud
                </div>
            </a>
            <button className="md:hidden" onClick={ () => setVisible(!visible) }>
                { visible ? <CloseIcon/> : <MenuIcon/> }
            </button>
            <div className="hidden md:flex gap-2 text-neutral-400">
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
        </div>
    </div>
}
