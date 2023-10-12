import Banner from "@/components/sections/Banner";
import Contacts from "@/components/sections/Contacts";
import Faq from "@/components/sections/Faq";
import Offer from "@/components/sections/Offer";
import Pricing from "@/components/sections/Pricing";
import Integrations from "@/components/sections/Integrations";
import Page from "@/components/Page";


export default function Home() {
    return <Page>
        <Banner/>
        <Pricing/>
        <Offer/>
        <Faq/>
        <Contacts/>
        <Integrations/>
    </Page>;
}
