import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import ReactIntlProvider from 'components/ReactIntlProvider';

import en from './locale/en';
import fr from './locale/fr';
import np from './locale/np';

const languageMaps = {
  en,
  fr,
  np,
};

export const IntlProvider = ({ children }) => {
  const router = useRouter()
  const { locale } = router;

  return (
    <ReactIntlProvider messages={languageMaps[locale]}>
      {children}
    </ReactIntlProvider>
  );
}

export default function Register() {
  const router = useRouter()
  const { locale } = router;

  return (
    <div>
      <h1>
        <FormattedMessage
          id="register.title"
        />
      </h1>
      <Link href="/" locale={locale}>
        <a><FormattedMessage
          id="register.main.page.link"
        /></a>
      </Link>
    </div>
  )
}