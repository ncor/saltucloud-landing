import { ReactNode } from "react"


export interface LinkProps {
    href: string,
    children?: ReactNode,
    target?: string
}

export default function Link({ href, children, target='_parent' }: LinkProps) {
    return <a
        href={ href } target={ target }
        className="md:py-3 md:px-4 leading-4 rounded-full text-neutral-400 text-[16px]
            hover:text-neutral-200 md:hover:bg-neutral-900 transition-all duration-200"
    >
        { children }
    </a>
}