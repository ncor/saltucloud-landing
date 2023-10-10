import { ReactNode, createContext } from "react";


export interface IOverlayContext {
    visible: boolean,
    dialogElement: ReactNode,
    setVisible: (visible: boolean) => void,
    setDialogElement: (element: ReactNode) => void,
    showDialog: (element: ReactNode) => void
}

export const OverlayContext = createContext<IOverlayContext>({
    visible: false,
    dialogElement: null,
    setVisible: (visible: boolean) => {},
    setDialogElement: (element: ReactNode) => {},
    showDialog: (element: ReactNode) => {}
});
