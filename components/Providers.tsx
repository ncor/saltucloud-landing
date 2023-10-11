import { ReactNode } from "react"
import MobileMenuProvider from "./MobileMenuProvider";


export default function Providers({ children }: {
    children: ReactNode
}) {
    return <MobileMenuProvider>
        { children }
    </MobileMenuProvider>
}
