import { ReactNode } from "react"

export type FaqItemsGroupProps = {
    label: string,
    children?: ReactNode,
    className?: string
}

export default function ItemsGroup({ label, children, className }: FaqItemsGroupProps) {
    return <div className="flex flex-col gap-6">
        <div className="text-neutral-600 font-medium">
            { label }
        </div>
        <div className={ `flex flex-col ${ className ? className : ''}` }>
            { children }
        </div>
    </div>
}
