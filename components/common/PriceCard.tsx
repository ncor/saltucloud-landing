import { ReactNode } from "react"
import CubeIcon, { CubeIconColors } from "../icons/CubeIcon"
import Lightbulb from "./Lightbulb"
import { Label } from "./Label";


export interface PriceCardInterface {
    name: string,
    price: string,
    description: string,
    oldPrice?: string,
    label?: string,
    color?: string,
    children?: ReactNode
}

/**
 * Pre-triggered dynamic styles.
 */
'bg-white';
'bg-peach';
'bg-magenta';
'text-white';
'text-peach';
'text-magenta';
'border-white';
'border-peach';
'border-magenta';

export default function PriceCard({
    name, price, description,
    oldPrice, label, children,
    color='white'
}: PriceCardInterface) {
    return <div className={
        `relative flex flex-col gap-6 p-6 md:p-9 border-[1px] border-${color} border-opacity-10 backdrop-blur-[64px] rounded-lg bg-${color} bg-opacity-[0.01]`
    }>
        { label && <Label text={ label } color={ color }/> }
        { label && <Lightbulb color={ color } className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"/> }
        <div className={ `flex flex-col gap-2` }>
            <div className={ `flex gap-2 font-bold text-${color}` }>
                <CubeIcon color={ color as CubeIconColors }/>
                { name }
            </div>
            <div className="flex text-3xl leading-[39px] font-bold gap-1">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
                    { price }
                </div>
                { oldPrice && <div className="text-neutral-600 line-through mix-blend-plus-lighter">
                    { oldPrice }
                </div> }
            </div>
            <div className="text-lg leading-[22px] text-neutral-400">
                { description } 
            </div>
        </div>
        <div className="flex flex-col gap-2">
            { children }
        </div>
    </div>
}
