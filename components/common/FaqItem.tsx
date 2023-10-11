import { ReactNode, useEffect, useRef, useState } from "react";
import ExpandIcon from "../icons/ExpandIcon";
import HideIcon from "../icons/HideIcon";
import { motion } from "framer-motion";


export interface FaqItemProps {
    label: string,
    children?: ReactNode,
    last?: boolean
}

export default function FaqItem({
    label, children, last=false
}: FaqItemProps) {
    const ref = useRef(null);

    const [ expanded, setExpanded ] = useState(true);
    const [ contentHeight, setContentHeight ] = useState(-1);

    useEffect(() => {
        if (ref && expanded && contentHeight < 0) {
            console.log(ref);
            setContentHeight((ref as any)?.current?.offsetHeight);
            setExpanded(false);
        }
    }, [ ref, expanded, contentHeight ])


    return <div className={
        `flex flex-col${ !last ? ' border-b-[1px] border-neutral-800' : '' }`
    }>
        <div className="flex justify-between py-4 cursor-pointer" onClick={ () => setExpanded(!expanded) }>
            <div className={
                `transition-all duration-200 ${expanded ? 'text-peach' : 'text-white'}`
            }>{ label }</div>

            { expanded ? <HideIcon/> : <ExpandIcon/> }
        </div>

        <motion.div
            ref={ ref }
            variants={{
                open: {
                    opacity: 1,
                    height: contentHeight,
                    display: 'block',
                    transition: {
                        duration: 0.2
                    }
                },
                closed: {
                    opacity: 0,
                    height: 0,
                    padding: 0,
                    display: 'none',
                    transition: {
                        duration: 0.3,
                        display: {
                            delay: 0.3
                        }
                    }
                }
            }}
            animate={ expanded ? 'open' : 'closed' }
            className="pb-4 text-neutral-400"
        >
            { children }
        </motion.div>
    </div>
}
