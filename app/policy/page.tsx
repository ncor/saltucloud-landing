'use client';

import PolicyDocsBanner from "@/components/sections/PolicyDocsBanner";
import PolicyDocs from "@/components/sections/PolicyDocs";
import Page from "@/components/Page";


export default function Policy() {
    return <Page>
        <PolicyDocsBanner/>
        <PolicyDocs/>
    </Page>;
}
