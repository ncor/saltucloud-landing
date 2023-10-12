import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const locales = ["ru", "en"];

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
    const isValidLocale = locales.some((cur) => cur === locale);
    if (!isValidLocale) notFound();

    let dictionary;
    try {
        dictionary = (await import(`../../dictionaries/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

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
