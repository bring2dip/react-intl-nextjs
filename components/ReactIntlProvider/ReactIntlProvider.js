import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';


export default function ReactIntlProvider({ localeFile, children }) {
  const router = useRouter();
  const [localeMessages, setLocalMessages] = useState(null);

  const { locale, defaultLocale } = router;

  async function loadLocaleFile() {
    const { default: contents } = await localeFile();
    setLocalMessages(contents);
  }

  useEffect(() => {
    if (locale) {
      loadLocaleFile();
    }
  }, [locale]);

  const handleTranslationError = (error) => {
    console.log('custom translation error handling');
  };

  if (!localeMessages) return null;

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={localeMessages}
      onError={handleTranslationError}
    >
      {children}
    </IntlProvider>
  )
}