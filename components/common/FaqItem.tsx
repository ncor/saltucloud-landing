import { ReactNode, useState } from "react";
import ExpandIcon from "../icons/ExpandIcon";
import HideIcon from "../icons/HideIcon";

export interface FaqItemProps {
    label: string,
    children?: ReactNode,
    last?: boolean
}

export default function FaqItem({
    label, children, last=false
}: FaqItemProps) {
    const [ expanded, setExpanded ] = useState(false);

    return <div className={
        `flex flex-col${ !last ? ' border-b-[1px] border-neutral-800' : '' }`
    }>
        <div className="flex justify-between py-4 cursor-pointer" onClick={ () => setExpanded(!expanded) }>
            <div className={ expanded ? 'text-peach' : '' }>{ label }</div>
            { expanded ? <HideIcon/> : <ExpandIcon/> }
        </div>
        { expanded && <div className="pb-4 text-neutral-400">
            { children }
        </div> }
    </div>
}
