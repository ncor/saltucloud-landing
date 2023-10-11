import MenuDialogLink from "./common/MenuDialogLink";
import { MobileMenuContext } from '../contexts/mobileMenuContext';
import { useContext, useState } from "react";
import { motion } from "framer-motion";


export default function MobileMenu() {
    const { visible } = useContext(MobileMenuContext);

    return <motion.nav
        initial={{
            y: -10,
            opacity: 0,
            display: 'none'
        }}
        variants={{
            open: {
                y: 0,
                opacity: 1,
                display: 'block'
            },
            closed: {
                y: -10,
                opacity: 0,
                display: 'none',
                transition: {
                    display: {
                        delay: 0.2
                    }
                }
            }
        }}
        transition={{
            type: 'twin',
            duration: 0.2
        }}
        animate={ visible ? 'open' : 'closed' }
        className="fixed top-[71px] w-full max-w-screen h-full max-h-screen bg-black z-50"
    >
        <div className="w-full flex flex-col">
            <MenuDialogLink text="Контакты" url="/#contacts" local/>
            <MenuDialogLink text="Поддержка" url="https://t.me/saltu_sup_bot"/>
            <MenuDialogLink text="Правила" url="/policy" local last/>
        </div>
    </motion.nav>
}
