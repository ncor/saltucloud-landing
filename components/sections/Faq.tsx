import { useTranslations } from "next-intl";
import FaqItem from "../common/FaqItem";
import ItemsGroup from "../common/ItemsGroup";


export default function Faq() {
    const t = useTranslations();

    return <div className="w-full px-6 flex justify-center border-neutral-800 border-t-[1px] bg-[rgba(0,0,0,.4)] backdrop-blur-[16px]">
        <div className="w-full max-w-6xl pt-[84px] flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-4 md:w-1/3">
                <div className="text-lg leading-[22px] text-peach font-medium">
                    { t('faq.heading') }
                </div>
                <div className="text-4xl leading-[48px] font-bold">
                    { t('faq.description') }
                </div>
            </div>
            <div className="flex flex-col gap-16 md:w-2/3">
                <ItemsGroup label={ t('faq.groups.common.label') }>
                    <FaqItem label={ t('faq.groups.common.items.0.question') }>
                        { t('faq.groups.common.items.0.answer') }
                    </FaqItem>
                    <FaqItem label={ t('faq.groups.common.items.1.question') } last>
                        { t('faq.groups.common.items.1.answer') }
                    </FaqItem>
                </ItemsGroup>
                <ItemsGroup label={ t('faq.groups.technical.label') }>
                    <FaqItem label={ t('faq.groups.technical.items.0.question') }>
                        { t('faq.groups.technical.items.0.answer') }
                    </FaqItem>
                    <FaqItem label={ t('faq.groups.technical.items.1.question') }>
                        { t('faq.groups.technical.items.1.answer') }
                    </FaqItem>
                    <FaqItem label={ t('faq.groups.technical.items.2.question') }>
                        { t('faq.groups.technical.items.2.answer') }
                    </FaqItem>
                    <FaqItem label={ t('faq.groups.technical.items.3.question') }>
                        { t('faq.groups.technical.items.3.answer') }
                    </FaqItem>
                    <FaqItem label={ t('faq.groups.technical.items.4.question') }>
                        { t('faq.groups.technical.items.4.answer') }
                    </FaqItem>
                    <FaqItem label={ t('faq.groups.technical.items.5.question') }>
                        { t('faq.groups.technical.items.5.answer') }
                    </FaqItem>
                </ItemsGroup>
            </div>
        </div>
    </div>;
}
