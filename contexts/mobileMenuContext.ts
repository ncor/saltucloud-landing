import { ReactNode, createContext } from "react";


export interface IMobileMenuContext {
    visible: boolean,
    setVisible: (visible: boolean) => void
}

export const MobileMenuContext = createContext<IMobileMenuContext>({
    visible: false,
    setVisible: (visible: boolean) => {}
});
