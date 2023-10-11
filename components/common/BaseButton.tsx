export type BaseButtonProps = {
    icon?: JSX.Element,
    text?: string,
    secondary?: boolean
};

export default function BaseButton({
    icon, text, secondary=false
}: BaseButtonProps) {
    const buttonStyling = secondary ?
        'bg-black text-white border-neutral-800 border-[1px]'
    :
        'bg-white text-black font-medium'

    return <div className={
        `px-6 h-16 flex flex-row items-center justify-center gap-2 rounded-lg hover:shadow-[0px_0px_16px_rgba(255,255,255,0.25)] hover:border-white transition-all duration-400 ${ buttonStyling }`
    } role="button">
        { icon && icon }
        <div className="text-lg leading-6 tracking-tighter">
            { text && text }
        </div>
    </div>;
}
