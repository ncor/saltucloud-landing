import { OverlayContext } from "@/contexts/overlayContext"
import { useContext } from "react"
import RedirectIcon from "./icons/RedirectIcon";
import MenuDialogLink from "./common/MenuDialogLink";
import { motion } from "framer-motion";


export default function MenuDialog() {
    return <motion.div
        initial={{
            y: 100
        }}
        animate={{
            y: 0
        }}
        transition={{
            type: 'twin',
            duration: 0.2
        }}
        className="w-full h-full flex justify-center items-end"
    >
        <div className="flex flex-col bg-black mb-6 rounded-lg min-w-[396px]">
            <MenuDialogLink text="Контакты" url="/#contacts" local/>
            <MenuDialogLink text="Поддержка" url="https://t.me/saltu_sup_bot"/>
            <MenuDialogLink text="Правила" url="/policy" local last/>
        </div>
    </motion.div>
}
