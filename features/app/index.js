import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import ReactIntlProvider from 'components/ReactIntlProvider';
import { useRouter } from 'next/router';

export const IntlProvider = ({ children }) => {
  const router = useRouter()
  const { locale } = router;
  return (
    <ReactIntlProvider localeFile={() => import(/* webpackMode: "eager" */`./locale/${locale}.js`)}>
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