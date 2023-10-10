import { ReactNode, useContext } from "react";
import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import { OverlayContext } from "@/contexts/overlayContext";
import MenuDialog from "../MenuDialog";
import Link from "../common/Link";


export default function Header() {
    const { showDialog } = useContext(OverlayContext);

    return <div className="w-full px-6 flex justify-center border-neutral-900 border-b-[1px] backdrop-blur-[160px]">
        <div className="w-full max-w-6xl py-6 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
                <LogoIcon/>
                <div className="font-bold text-xl leading-6">
                    cloud
                </div>
            </a>
            <button className="md:hidden" onClick={ () => showDialog(<MenuDialog key={ Math.random() }/>) }>
                <MenuIcon/>
            </button>
            <div className="hidden md:flex gap-6 text-neutral-400">
                <Link href="/#contacts">
                    Контакты
                </Link>
                <Link href="https://t.me/saltu_sup_bot" target="_blank">
                    Поддержка
                </Link>
                <Link href="/policy">
                    Правила
                </Link>
            </div>
        </div>
    </div>
}
