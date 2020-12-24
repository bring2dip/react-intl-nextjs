import * as React from 'react';
import { useRouter } from 'next/router';

const Noop = ({ children }) => children;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const Layout = Component.Layout || Noop;
  const FeatureIntlProvider = Component.IntlProvider || Noop;

  return (
    <FeatureIntlProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FeatureIntlProvider>
  );
}