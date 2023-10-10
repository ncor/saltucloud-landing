import FaqItem from "../common/FaqItem";
import ItemsGroup from "../common/ItemsGroup";


export default function Faq() {
    return <div className="w-full px-6 flex justify-center border-neutral-800 border-t-[1px] backdrop-blur-[160px]">
        <div className="w-full max-w-6xl pt-[84px] flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-4 md:w-1/3">
                <div className="text-lg leading-[22px] text-peach font-medium">
                    Ответы на часто задаваемые вопросы
                </div>
                <div className="text-4xl leading-[48px] font-bold">
                    Всё, что вам нужно знать
                </div>
            </div>
            <div className="flex flex-col gap-16 md:w-2/3">
                <ItemsGroup label="Общее">
                    <FaqItem label="Насколько вы лояльны к клиентам?">
                        Мы всегда идём на встречу клиентам и защищаем его права в случае спорных ситуаций. Можете не беспокоиться, Ваш сервер не будет внезапно выключен при первой же жалобе.
                    </FaqItem>
                    <FaqItem label="Чем я могу оплатить ваши услуги?" last>
                        Мы принимаем большинство криптовалют. Если у Вас нет возможности оплатить криптовалютой, вы можете оплатить картами СНГ и ЕС.
                    </FaqItem>
                </ItemsGroup>
                <ItemsGroup label="Технические вопросы">
                    <FaqItem label="Какая виртуализация используется на серверах?">
                        На всех наших серверах используется KVM-виртуализация, что гарантирует доступность ресурсов для каждой виртуальной машины за счёт их резервации.
                    </FaqItem>
                    <FaqItem label="Какие системы доступны для установки?">
                        Windows Server (2012, 2016, 2019, 2022), Ubuntu (18.04, 20.04, 22.04), Debian (9, 10, 11), Centos (7, 8, 9), Freebsd (12, 13), AlmaLinux 8 и ещё много других.
                    </FaqItem>
                    <FaqItem label="Могу ли я переустановить систему во время эксплуатации?">
                        Да, Вы можете переустанавливать систему в любой момент. Для этого нажмите на кнопку &quot;Переустановить ОС&quot; в карточке сервера
                    </FaqItem>
                    <FaqItem label="Могу ли я арендовать сервер с кастомными характеристиками?">
                        Да, Вы можете добавить CPU/RAM к существующим тарифам, для этого обратитесь в тех. поддержку.
                    </FaqItem>
                    <FaqItem label="Могу ли я арендовать дополнительные IP-адреса?">
                        Да, в данный момент это возможно только с Web Billing.
                    </FaqItem>
                    <FaqItem label="Как провести миграцию проекта на ваши сервера?" last>
                        Для начала выберите желаемый тариф, после чего отпишите нам по контактам, мы поможем вам с переездом абсолютно бесплатно!
                    </FaqItem>
                </ItemsGroup>
            </div>
        </div>
    </div>;
}
