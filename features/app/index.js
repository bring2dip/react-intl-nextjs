import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import ReactIntlProvider from 'components/ReactIntlProvider';
import { useRouter } from 'next/router';
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
  const { locale, locales, defaultLocale } = router;

  return (
    <ReactIntlProvider messages={languageMaps[locale]}>
      {children}
    </ReactIntlProvider>
  );
}

export default function IndexPage(props) {
  const router = useRouter()
  const { locale } = router

  return (
    <div>
      <h1>
        <FormattedMessage
          id="app.title"
        />
      </h1>

      <Link href="/register" locale={locale}>
        <a><FormattedMessage
          id="app.register.page.link"
        /></a>
      </Link>
      &nbsp;
      <Link href="/posts" locale={locale}>
        <a><FormattedMessage
          id="app.post.page.link"
        /></a>
      </Link>
      <br />
    </div>
  )
}