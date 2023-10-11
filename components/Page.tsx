import { ReactNode } from "react"
import Providers from "./Providers"
import Header from "./sections/Header"
import Footer from "./sections/Footer"
import { motion } from "framer-motion"


export interface PageProps {
    children: ReactNode
}

export default function Page({ children }: PageProps) {
    return <Providers>
        <main className="page">
            <div className="wrap">
                <Header/>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'just', duration: 1 }}
                    className="content"
                >
                    { children }
                </motion.div>
                <Footer/>
            </div>
        </main>
    </Providers>
}
