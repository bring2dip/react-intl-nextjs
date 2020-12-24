import Link from 'components/Link';
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

export default function Posts() {
  const router = useRouter()
  const { locale } = router;

  return (
    <div>
      <h1>
        <FormattedMessage
          id="title"
        />
      </h1>
      <ul>
        <li>
          <Link href={`/posts/kathmandu`}>
            <h3>Kathmandu</h3>
            Awesome places to visit around kathmandu
          </Link>
        </li>
        <li>
          <Link href={`/posts/food`}>
            <h3>Food</h3>
            Awesome restaurants to go around kathmandu
          </Link>
        </li>
        <li>
          <Link href={`/posts/books`}>
            <h3>Books</h3>
            Awesome Nepali books to read.
          </Link>

        </li>
      </ul>
      <Link href="/" locale={locale}>
        <FormattedMessage
          id="main.page.link"
        />
      </Link>
    </div>
  )
}