import { OverlayContext } from "@/contexts/overlayContext";
import { ReactNode, useContext } from "react";


export default function Overlay({
    className
}: {
    className?: string
}) {
    const { visible, setVisible, dialogElement } = useContext(OverlayContext);

    return <div onClick={ () => setVisible(false) } className={
        `overlay flex items-center justify-center bg-[rgba(0,0,0,.5)] backdrop-blur-sm
        ${ !visible ? ' hidden' : '' }${ className ? className + ' ': '' }`
    }>
        { dialogElement }
    </div>
}
