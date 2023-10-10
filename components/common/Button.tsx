import BaseButton, { BaseButtonProps } from "./BaseButton";


export type ButtonProps = {
    url?: string,
    local?: boolean,
} & BaseButtonProps & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({
    icon, text, url,
    className, onClick,
    secondary=false,
    local=false
}: ButtonProps) {
    return url ? <a href={ url } target={ local ? '_parent' : '_blank' } className={ `${ className }` }>
        <BaseButton icon={ icon } text={ text } secondary={ secondary }/>
    </a> : <button onClick={ onClick } className={ `${ className }` }>
        <BaseButton icon={ icon } text={ text } secondary={ secondary }/>
    </button>;
}
