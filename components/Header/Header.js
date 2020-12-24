import React from 'react';
import {FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import ReactIntlProvider from 'components/ReactIntlProvider';

import en from './locale/en';
import fr from './locale/fr';
import np from './locale/np';

const languageMaps = {
  en,
  fr,
  np,
};

export default function Header() {
  const router = useRouter();

  const { locale } = router;
  const handleLanguageChange = (selectedLocale) => () => {
    router.push('/', '/', { locale: selectedLocale }  );
  };

  return (
    <ReactIntlProvider localeFile={() => import(/* webpackMode: "eager" */`./locale/${locale}.js`)}>
      <>
        <FormattedMessage
          id="translate"
        />
        &nbsp;
        <button onClick={handleLanguageChange('en')}>English</button>
        <button onClick={handleLanguageChange('fr')}>French</button>
        <button onClick={handleLanguageChange('np')}>Nepali</button>
      </>
    </ReactIntlProvider>
  );
}