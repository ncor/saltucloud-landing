'use client';

import { OverlayContext } from "@/contexts/overlayContext"
import { ReactNode, useState } from "react"


export default function Providers({
    children
}: {
    children: ReactNode
}) {
    const [ visible, _setVisible ] = useState(false);
    const [ dialogElement, setDialogElement ] = useState<ReactNode>(null);
    
    const setVisible = (visible: boolean) => {
        if (visible)
            document.body.classList.add('locked')
        else
            document.body.classList.remove('locked');
        
        _setVisible(visible);
    }

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
