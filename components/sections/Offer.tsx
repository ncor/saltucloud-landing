import Button from "../common/Button";
import Highlight from "../common/Highlight";
import ActionIcon from "../icons/ActionIcon";


export default function Offer() {
    return <div className=" w-full px-6 flex justify-center">
        <div className="group relative w-full max-w-6xl pt-[144px] pb-[144px] flex flex-col gap-16">
            <div className="opacity-0 w-3/4 h-3/4 border-dotted group-hover:opacity-100 group-hover:w-4/5
                            group-hover:border-dashed group-hover:h-4/5 transition-all duration-500 absolute
                            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-neutral-900
                            mix-blend-plus-lighter"></div>
            <div className="flex flex-col gap-4 text-center">
                <div className="text-4xl leading-[48px] font-bold">
                    Выбрали?
                </div>
                <div className="text-lg leading-[22px] text-neutral-400 mix-blend-plus-lighter">
                    Арендуйте сервер прямо сейчас.
                </div>
            </div>
            <div className="relative self-center">
                <Highlight color="white" size={ 775 } className="top-[60%] left-[40%] -translate-x-1/2 -translate-y-1/2"/>
                <Highlight color="peach" size={ 775 } className="-top-[100px] left-0 -translate-x-1/2 -translate-y-1/2 opacity-[50%]"/>
                <Highlight color="magenta" size={ 775 } className="top-0 left-full -translate-x-1/2 -translate-y-1/2 opacity-[45%]"/>
                <Button
                    text="Арендовать" icon={ <ActionIcon/> }
                    className="animate-pulse hover:animate-none"
                    url="/#contacts" local
                />
            </div>
        </div>
    </div>;
}
