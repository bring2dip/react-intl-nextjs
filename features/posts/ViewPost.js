import React from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';

export default function ViewPost() {
  const router = useRouter()
  const { locale, query: { postSlug } } = router;

  return (
    <div>
      <h1>
        <FormattedMessage
          id="view.title {postSlug}"
          values={{
            postSlug
          }}
        />
      </h1>
      <p>
        Description here
      </p>
      <Link href="/posts" locale={locale}>
        <a><FormattedMessage
          id="back.to.posts"
        /></a>
      </Link>
    </div>
  )
}