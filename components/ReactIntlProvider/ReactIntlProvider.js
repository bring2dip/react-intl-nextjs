import React from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';


export default function ReactIntlProvider({ messages, children }) {
  const router = useRouter();

  const { locale, defaultLocale } = router;

  const handleTranslationError = (error) => {
    console.log('custom translation error handling');
  };

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
      onError={handleTranslationError}
    >
      {children}
    </IntlProvider>
  )
}