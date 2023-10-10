import { ReactNode } from "react"


export interface LinkProps {
    href: string,
    children?: ReactNode,
    target?: string
}

export default function Link({ href, children, target='_parent' }: LinkProps) {
    return <a
        href={ href } target={ target }
        className="text-neutral-400 text-[16px] hover:text-white transition-all duration-200"
    >
        { children }
    </a>
}