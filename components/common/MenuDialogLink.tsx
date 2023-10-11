import { useContext } from "react"
import RedirectIcon from "../icons/RedirectIcon"
import { MobileMenuContext } from "@/contexts/mobileMenuContext"


export interface MenuDialogLinkProps {
    text: string,
    url: string,
    last?: boolean,
    local?: boolean
}

export default function MenuDialogLink({
    text, url, last=false, local=false
}: MenuDialogLinkProps) {
    const { setVisible } = useContext(MobileMenuContext);

    return <a href={ url } target={ local ? '_parent' : '_blank' } onClick={ () => setVisible(false) } className={
        `px-6 h-[64px] group flex items-center justify-between ${ !last ? ' border-b-[1px] border-neutral-800' : '' }`
    }>
        <div className="text-neutral-400 group-hover:text-white transition-all duration-400">
            { text }
        </div>
        <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-400">
            <RedirectIcon/>
        </div>
    </a>
}
