import React from 'react';
import CommonHead from 'layouts/Common/Head';
import Header from 'components/Header';

const SimpleLayout = ({ children }) => {
  return (
    <div>
      <CommonHead />
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default SimpleLayout;