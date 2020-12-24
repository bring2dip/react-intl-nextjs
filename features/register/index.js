import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import ReactIntlProvider from 'components/ReactIntlProvider';

export const IntlProvider = ({ children }) => {
  const router = useRouter()
  const { locale } = router;

  return (
    <ReactIntlProvider localeFile={() => import(/* webpackMode: "eager" */`./locale/${locale}.js`)}>
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