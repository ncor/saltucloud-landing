import { useTranslations } from "next-intl";
import PriceCard from "../common/PriceCard";
import PriceCardFeature from "../common/PriceCardFeature";


export default function Pricing() {
    const t = useTranslations();

    return <div className="w-full px-6 flex justify-center">
        <div className="w-full max-w-6xl flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center z-10">
                <div className="text-4xl leading-[48px] font-bold">
                    { t('pricing.heading') }
                </div>
                <div className="text-lg leading-[22px] text-neutral-400 mix-blend-plus-lighter">
                    { t('pricing.description') }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-8 lg:mt-4">
                    <PriceCard
                        name="i9-1" price="$3.5" oldPrice="$5"
                        description={ t('pricing.setups.0') } color='white'
                        label={ t('pricing.labels.0') }
                    >
                        <PriceCardFeature text={ `1 ${ t('pricing.features.cpuCore.0') }` } subtext="19900-K"/>
                        <PriceCardFeature text={ `2 ${ t('pricing.features.gigabyte') }` } subtext="DDR4"/>
                        <PriceCardFeature text={ `30 ${ t('pricing.features.gigabyte') }` } subtext="NVME SSD"/>
                        <PriceCardFeature text={ t('pricing.features.os') }/>
                    </PriceCard>
                    <PriceCard
                        name="i9-2" price="$5" oldPrice="$7"
                        description={ t('pricing.setups.1') } color='white'
                    >
                        <PriceCardFeature text={ `2 ${ t('pricing.features.cpuCore.1') }` } subtext="19900-K"/>
                        <PriceCardFeature text={ `4 ${ t('pricing.features.gigabyte') }` } subtext="DDR4"/>
                        <PriceCardFeature text={ `60 ${ t('pricing.features.gigabyte') }` } subtext="NVME SSD"/>
                        <PriceCardFeature text={ t('pricing.features.os') }/>
                    </PriceCard>
                </div>
                <div className="flex flex-col gap-8">
                    <PriceCard
                        name="i9-3" price="$9.5" oldPrice="$13"
                        description={ t('pricing.setups.2') } color='peach'
                        label={ t('pricing.labels.1') }
                    >
                        <PriceCardFeature text={ `4 ${ t('pricing.features.cpuCore.1') }` } subtext="19900-K"/>
                        <PriceCardFeature text={ `8 ${ t('pricing.features.gigabyte') }` } subtext="DDR4"/>
                        <PriceCardFeature text={ `120 ${ t('pricing.features.gigabyte') }` } subtext="NVME SSD"/>
                        <PriceCardFeature text={ t('pricing.features.os') }/>
                    </PriceCard>
                    <PriceCard
                        name="i9-4" price="$16.3" oldPrice="$23"
                        description={ t('pricing.setups.3') } color='peach'
                    >
                        <PriceCardFeature text={ `8 ${ t('pricing.features.cpuCore.2') }` } subtext="19900-K"/>
                        <PriceCardFeature text={ `16 ${ t('pricing.features.gigabyte') }` } subtext="DDR4"/>
                        <PriceCardFeature text={ `240 ${ t('pricing.features.gigabyte') }` } subtext="NVME SSD"/>
                        <PriceCardFeature text={ t('pricing.features.os') }/>
                    </PriceCard>
                </div>
                <div className="flex flex-col gap-8 lg:mt-4">
                    <PriceCard
                        name="i9-5" price="$34.8" oldPrice="$49"
                        description={ t('pricing.setups.4') } color='magenta'
                        label={ t('pricing.labels.2') }
                    >
                        <PriceCardFeature text={ `16 ${ t('pricing.features.cpuCore.2') }` } subtext="19900-K"/>
                        <PriceCardFeature text={ `32 ${ t('pricing.features.gigabyte') }` } subtext="DDR4"/>
                        <PriceCardFeature text={ `480 ${ t('pricing.features.gigabyte') }` } subtext="NVME SSD"/>
                        <PriceCardFeature text={ t('pricing.features.os') }/>
                    </PriceCard>
                </div>
            </div>
        </div>
    </div>;
}
