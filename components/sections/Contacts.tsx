import ContactLink from "../common/ContactLink";
import FaqItem from "../common/FaqItem";
import ItemsGroup from "../common/ItemsGroup";


export default function Contacts() {
    return <div id="contacts" className="w-full px-6 flex justify-center bg-black">
        <div className="w-full max-w-6xl pt-[84px] flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-4 md:w-1/3">
                <div className="text-lg leading-[22px] text-magenta font-medium">
                    Ссылки и контакты
                </div>
                <div className="text-4xl leading-[48px] font-bold">
                    Свяжитесь с нами
                </div>
            </div>
            <div className="flex flex-col gap-16 md:w-2/3">
                <ItemsGroup label="Покупка и аренда" className="gap-9 lg:flex-row lg:gap-6">
                    <ContactLink
                        text="Платежный бот" subtext="@cloud_price_bot"
                        url="https://t.me/cloud_price_bot"
                    />
                    <ContactLink
                        text="Веб-платежи" subtext="my.saltu-cloud.pro"
                        url="" label="Скоро" disabled
                    />
                </ItemsGroup>
                <ItemsGroup label="Поддержка и сотрудничество" className="gap-6">
                    <ContactLink
                        text="Бот поддержки" subtext="@saltu_sup_bot"
                        url="https://t.me/saltu_sup_bot"
                    />
                    <div className="flex flex-col lg:flex-row gap-6">
                        <ContactLink
                            text="Администрация" subtext="mail@saltu-cloud.pro"
                            url="mailto:mail@saltu-cloud.pro"
                        />
                        <ContactLink
                            text="Защита от спама" subtext="abuse@saltu-cloud.pro"
                            url="mailto:abuse@saltu-cloud.pro"
                        />
                    </div>
                </ItemsGroup>
                <ItemsGroup label="Медиа">
                    <ContactLink
                        text="Телеграм канал" subtext="@saltu_cIoud"
                        url="https://t.me/saltu_cIoud"
                        label="Не забудьте подписаться"
                    />
                </ItemsGroup>
            </div>
        </div>
    </div>;
}
