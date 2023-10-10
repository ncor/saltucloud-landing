'use client';

import { OverlayContext } from "@/contexts/overlayContext"
import { ReactNode, useState } from "react"


export default function Providers({
    children
}: {
    children: ReactNode
}) {
    const [ visible, setVisible ] = useState(false);
    const [ dialogElement, setDialogElement ] = useState<ReactNode>(null);
    
    const showDialog = (element: ReactNode) => {
        setVisible(true);
        setDialogElement(element);
    }

    return <OverlayContext.Provider value={{
        visible, setVisible,
        dialogElement, setDialogElement,
        showDialog
    }}>
        { children }
    </OverlayContext.Provider>
}
