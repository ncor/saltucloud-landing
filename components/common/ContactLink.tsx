import RedirectIcon from "../icons/RedirectIcon"
import { Label } from "./Label"


export interface ContactLinkProps {
    text: string,
    subtext: string,
    url: string,
    disabled?: boolean,
    label?: string
}

export default function ContactLink(
    { text, subtext, url, label, disabled=false }: ContactLinkProps
) {
    const disabledStyles = ' pointer-events-none cursor-default'

    return <a href={ url } target="_blank" className={
        `w-full group relative flex justify-between p-6 bg-[#030303] rounded-lg hover:shadow-[0px_0px_16px_rgba(255,255,255,0.25)]
        hover:border-white transition-all duration-400 ${ disabled ? disabledStyles : 'border-[1px] border-neutral-900 ' }`
    }>
        { label && <Label text={ label } color="white"/> }
        <div className={ `flex flex-col${ disabled ? ' opacity-60' : '' }` }>
            <div className="text-xl font-medium">
                { text }
            </div>
            <div className="text-sm text-neutral-600">
                { subtext }
            </div>
        </div>
        <div className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-400">
            <RedirectIcon/>
        </div>
    </a>
}
