import { useTranslations } from "next-intl";


export default function PolicyDocs() {
    const t = useTranslations();

    return <div className="w-full px-6 flex justify-center border-neutral-800 border-t-[1px]  bg-[rgba(0,0,0,0.4)] backdrop-blur-[16px]">
        <div className="w-full max-w-6xl py-[84px] flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <div className="text-4xl leading-[48px] font-bold">
                    { t('policy.companyResponsibility.title') }
                </div>
                <ul className="text-neutral-400">
                    <li>{ t('policy.companyResponsibility.text.0') }</li>
                    <li>{ t('policy.companyResponsibility.text.1') }</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-4xl leading-[48px] font-bold">
                    { t('policy.paymentOrder.title') }
                </div>
                <ul className="text-neutral-400">
                    <li>{ t('policy.paymentOrder.text.0') }</li>
                    <li>{ t('policy.paymentOrder.text.1') }</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-4xl leading-[48px] font-bold">
                    { t('policy.refund.title') }
                </div>
                <ul className="text-neutral-400">
                    <li>{ t('policy.refund.text.0') }</li>
                    <li>{ t('policy.refund.text.1') }</li>
                    <li>{ t('policy.refund.text.2') }</li>
                    <li>{ t('policy.refund.text.3') }</li>
                    <li>{ t('policy.refund.text.4') }</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-4xl leading-[48px] font-bold">
                    { t('policy.clientRightsAndObligations.title') }
                </div>
                <ul className="text-neutral-400">
                    <li>{ t('policy.clientRightsAndObligations.text.0') }</li>
                    <li>{ t('policy.clientRightsAndObligations.text.1') }</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-4xl leading-[48px] font-bold">
                    { t('policy.prohibitedActions.title') }
                </div>
                <ul className="text-neutral-400">
                    <li>{ t('policy.prohibitedActions.text.0') }</li>
                    <li>{ t('policy.prohibitedActions.text.1') }</li>
                    <li>{ t('policy.prohibitedActions.text.2') }</li>
                    <li>{ t('policy.prohibitedActions.text.3') }</li>
                    <li>{ t('policy.prohibitedActions.text.4') }</li>
                    <li>{ t('policy.prohibitedActions.text.5') }</li>
                    <li>{ t('policy.prohibitedActions.text.6') }</li>
                    <li>{ t('policy.prohibitedActions.text.7') }</li>
                    <li>{ t('policy.prohibitedActions.text.8') }</li>
                    <li>{ t('policy.prohibitedActions.text.9') }</li>
                    <li>{ t('policy.prohibitedActions.text.10') }</li>
                    <li>{ t('policy.prohibitedActions.text.11') }</li>
                    <li>{ t('policy.prohibitedActions.text.12') }</li>
                    <li>{ t('policy.prohibitedActions.text.13') }</li>
                    <li>{ t('policy.prohibitedActions.text.14') }</li>
                    <li>{ t('policy.prohibitedActions.text.15') }</li>
                    <li>{ t('policy.prohibitedActions.text.16') }</li>
                    <li>{ t('policy.prohibitedActions.text.17') }</li>
                    <li>{ t('policy.prohibitedActions.text.18') }</li>
                    <li>{ t('policy.prohibitedActions.text.19') }</li>
                    <li>{ t('policy.prohibitedActions.text.20') }</li>
                    <li>{ t('policy.prohibitedActions.text.21') }</li>
                </ul>
                <div className="text-neutral-400">
                    { t('policy.prohibitedActions.text.22') }
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-4xl leading-[48px] font-bold">
                    { t('policy.attention.title') }
                </div>
                <div className="text-neutral-400">
                    { t('policy.attention.text') }
                </div>
            </div>
        </div>
    </div>;
}
