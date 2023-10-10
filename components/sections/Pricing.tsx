import PriceCard from "../common/PriceCard";
import PriceCardFeature from "../common/PriceCardFeature";

export default function Pricing() {
    return <div className="w-full px-6 flex justify-center">
        <div className="w-full max-w-6xl pb-[84px] flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center">
                <div className="text-4xl leading-[48px] font-bold">
                    Конфигурации
                </div>
                <div className="text-lg leading-[22px] text-neutral-400 mix-blend-plus-lighter">
                    Выберите подходящий тариф для своего проекта.
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col gap-8 lg:mt-4">
                    <PriceCard
                        name="i9-1" price="$3.5" oldPrice="$5"
                        description="Идеален для старта." color='white'
                        label="Начни отсюда"
                    >
                        <PriceCardFeature text="1 ядро" subtext="19900-K"/>
                        <PriceCardFeature text="2 ГБ" subtext="DDR4"/>
                        <PriceCardFeature text="30 ГБ" subtext="NVME SSD"/>
                        <PriceCardFeature text="Любая ОС"/>
                    </PriceCard>
                    <PriceCard
                        name="i9-2" price="$5" oldPrice="$7"
                        description="Для небольших проектов." color='white'
                    >
                        <PriceCardFeature text="2 ядра" subtext="19900-K"/>
                        <PriceCardFeature text="4 ГБ" subtext="DDR4"/>
                        <PriceCardFeature text="60 ГБ" subtext="NVME SSD"/>
                        <PriceCardFeature text="Любая ОС"/>
                    </PriceCard>
                </div>
                <div className="flex flex-col gap-8">
                    <PriceCard
                        name="i9-3" price="$9.5" oldPrice="$13"
                        description="Для высокого траффика." color='peach'
                        label="Самое популярное"
                    >
                        <PriceCardFeature text="4 ядра" subtext="19900-K"/>
                        <PriceCardFeature text="8 ГБ" subtext="DDR4"/>
                        <PriceCardFeature text="120 ГБ" subtext="NVME SSD"/>
                        <PriceCardFeature text="Любая ОС"/>
                    </PriceCard>
                    <PriceCard
                        name="i9-4" price="$16.3" oldPrice="$23"
                        description="Для крупных проектов." color='peach'
                    >
                        <PriceCardFeature text="8 ядер" subtext="19900-K"/>
                        <PriceCardFeature text="16 ГБ" subtext="DDR4"/>
                        <PriceCardFeature text="240 ГБ" subtext="NVME SSD"/>
                        <PriceCardFeature text="Любая ОС"/>
                    </PriceCard>
                </div>
                <div className="flex flex-col gap-8 lg:mt-4">
                    <PriceCard
                        name="i9-5" price="$34.8" oldPrice="$49"
                        description="Максимум возможностей." color='magenta'
                        label="Самое мощное"
                    >
                        <PriceCardFeature text="16 ядер" subtext="19900-K"/>
                        <PriceCardFeature text="32 ГБ" subtext="DDR4"/>
                        <PriceCardFeature text="480 ГБ" subtext="NVME SSD"/>
                        <PriceCardFeature text="Любая ОС"/>
                    </PriceCard>
                </div>
            </div>
        </div>
    </div>;
}
