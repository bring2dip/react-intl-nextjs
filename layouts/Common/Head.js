import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function CommonHead({ children }) {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <link rel="icon" href="/favicon.png" />
      {children}
    </Head>
  );
}

CommonHead.propTypes = {
  children: PropTypes.node,
};

CommonHead.defaultProps = {
  children: '',
};