import Link from "../common/Link";
import LogoIcon from "../icons/LogoIcon";

export default function Footer() {
    return <div className="mt-auto w-full px-6 flex justify-center border-neutral-900 border-t-[1px] bg-[rgba(255,255,255,0.01)] backdrop-blur-[160px]">
        <div className="w-full max-w-6xl py-8 flex flex-col md:flex-row md:justify-between gap-9 text-[16px]">
            <a href="/" className="flex gap-2">
                <LogoIcon/>
                <div className="text-neutral-400">
                    © 2023
                </div>
            </a>
            <div className="flex flex-col md:flex-row gap-6">
                <Link href="/#contacts">
                    Контакты
                </Link>
                <Link href="https://t.me/saltu_sup_bot" target="_blank">
                    Поддержка
                </Link>
                <Link href="/policy">
                    Правила
                </Link>
            </div>
            <div className="flex gap-1">
                <div className="text-neutral-400">
                    by
                </div>
                <a href="https://bento.me/ensi" className="font-medium">
                    ensi
                </a>
            </div>
        </div>
    </div>;
}
