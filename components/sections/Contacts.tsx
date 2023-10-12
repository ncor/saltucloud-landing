import { useTranslations } from "next-intl";
import ContactLink from "../common/ContactLink";
import ItemsGroup from "../common/ItemsGroup";


export default function Contacts() {
    const t = useTranslations();

    return <div id="contacts" className="w-full px-6 flex justify-center bg-black">
        <div className="w-full max-w-6xl pt-[84px] flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-4 md:w-1/3">
                <div className="text-lg leading-[22px] text-magenta font-medium">
                    { t('contacts.heading') } 
                </div>
                <div className="text-4xl leading-[48px] font-bold">
                    { t('contacts.description') } 
                </div>
            </div>
            <div className="flex flex-col gap-16 md:w-2/3">
                <ItemsGroup label={ t('contacts.groups.billing.label') } className="gap-9 lg:flex-row lg:gap-6">
                    <ContactLink
                        text={ t('contacts.groups.billing.items.billingBot') } subtext="@cloud_price_bot"
                        url="https://t.me/cloud_price_bot"
                    />
                    <ContactLink
                        text={ t('contacts.groups.billing.items.webBilling') }  subtext="my.saltu-cloud.pro"
                        url="" label={ t('contacts.labels.soon') } disabled
                    />
                </ItemsGroup>
                <ItemsGroup label={ t('contacts.groups.customerService.label') } className="gap-6">
                    <ContactLink
                        text={ t('contacts.groups.customerService.items.supportBot') } subtext="@saltu_sup_bot"
                        url="https://t.me/saltu_sup_bot"
                    />
                    <div className="flex flex-col lg:flex-row gap-6">
                        <ContactLink
                            text={ t('contacts.groups.customerService.items.administration') } subtext="mail@saltu-cloud.pro"
                            url="mailto:mail@saltu-cloud.pro"
                        />
                        <ContactLink
                            text={ t('contacts.groups.customerService.items.abuse') } subtext="abuse@saltu-cloud.pro"
                            url="mailto:abuse@saltu-cloud.pro"
                        />
                    </div>
                </ItemsGroup>
                <ItemsGroup label={ t('contacts.groups.media.label') }>
                    <ContactLink
                        text={ t('contacts.groups.media.items.telegramChannel') } subtext="@saltu_cIoud"
                        url="https://t.me/saltu_cIoud"
                        label={ t('contacts.labels.subscribe') }
                    />
                </ItemsGroup>
            </div>
        </div>
    </div>;
}
