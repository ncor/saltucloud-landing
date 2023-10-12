'use client';

import { MobileMenuContext } from "@/contexts/mobileMenuContext";
import { ReactNode, useState } from "react";


export default function MobileMenuProvider({ children }: {
    children: ReactNode
}) {
    const [ visible, _setVisible ] = useState(false);

    const setVisible = (visible: boolean) => {
        if (visible)
            document.body.classList.add('locked')
        else
            document.body.classList.remove('locked')

        _setVisible(visible);
    }
    
    return <MobileMenuContext.Provider value={{
        visible, setVisible
    }}>
        { children }
    </MobileMenuContext.Provider>
}
