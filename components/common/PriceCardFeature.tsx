import { ReactNode } from "react"
import DotIcon from "../icons/DotIcon"


export interface PriceCardFeatureProps {
    text: string,
    subtext?: string
}

export default function PriceCardFeature(
    { text, subtext }: PriceCardFeatureProps
) {
    return <div className="flex gap-2">
        <DotIcon/>
        <div className="font-semibold">{ text }</div>
        { subtext && <div className="text-neutral-400 mix-blend-mode: plus-lighter;">{ subtext }</div> }
    </div>
}
