import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function InternalizedLink({ href, children }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <Link href={href} locale={locale}>
      <a>{children}</a>
    </Link>
  );
}