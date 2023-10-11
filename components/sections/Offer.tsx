import Button from "../common/Button";
import Highlight from "../common/Highlight";
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
                <Highlight color="white" className="top-[60%] left-[40%] -translate-x-1/2 -translate-y-1/2"/>
                <Highlight color="peach" className="w-[1000px] h-[1000px] -top-[100px] left-0 -translate-x-1/2 -translate-y-1/2 opacity-[50%]"/>
                <Highlight color="magenta" className="w-[1000px] h-[1000px] top-0 left-full -translate-x-1/2 -translate-y-1/2 opacity-[45%]"/>
                <Button
                    text="Арендовать" icon={ <ActionIcon/> }
                    className="animate-pulse hover:animate-none"
                    url="/#contacts" local
                />
            </div>
        </div>
    </div>;
}
