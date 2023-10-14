import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const locales = [ "ru", "en" ];

export const metadata: Metadata = {
    title: "Saltu Cloud",
    description:
        "Эффективное решение для стабильной работы вашей инфраструктуры при любой нагрузке.",
};

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    locale = locales.some(l => l === locale) ? locale : 'en';

    let dictionary = (await import(`../../dictionaries/${locale}.json`)).default;

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider locale={locale} messages={ dictionary }>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
