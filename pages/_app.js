import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';


// Translated messages in French with matching IDs to what you declared
const fr = {
  hello: "Bonjour",
}

const en = {
  hello: "Hello"
}

const np = {
  hello: "नमस्ते "
}

const languageMap = {
  fr,
  en,
  np,
}

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router;

  return (
    <IntlProvider messages={languageMap[locale]} locale={locale} defaultLocale={defaultLocale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}