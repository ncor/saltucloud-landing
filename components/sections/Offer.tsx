import Button from "../common/Button";
import Lightbulb from "../common/Lightbulb";
import ActionIcon from "../icons/ActionIcon";


export default function Offer() {
    return <div className="w-full px-6 flex justify-center">
        <div className="w-full max-w-6xl pb-[84px] flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center">
                <div className="text-4xl leading-[48px] font-bold">
                    Выбрали?
                </div>
                <div className="text-lg leading-[22px] text-neutral-400 mix-blend-plus-lighter">
                    Арендуйте сервер прямо сейчас.
                </div>
            </div>
            <div className="relative self-center">
                <Lightbulb color="white" className="w-[250px] h-[250px] top-[60%] left-[40%] -translate-x-1/2 -translate-y-1/2"/>
                <Lightbulb color="peach" className="w-[175px] h-[175px] -top-[100px] left-0 -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[85px]"/>
                <Lightbulb color="magenta" className="top-0 left-[125%] -translate-x-1/2 -translate-y-1/2 opacity-30"/>
                <Button text="Арендовать" icon={ <ActionIcon/> } url="/#contacts" local className="animate-pulse"/>
            </div>
        </div>
    </div>;
}
