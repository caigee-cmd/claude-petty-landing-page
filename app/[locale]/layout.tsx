import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import enMessages from "../../messages/en.json";
import zhMessages from "../../messages/zh.json";
import "../globals.css";

const messagesMap: Record<string, typeof enMessages> = {
  en: enMessages,
  zh: zhMessages,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!messagesMap[locale]) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messagesMap[locale]}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
