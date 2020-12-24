import React from 'react';
import App, { IntlProvider } from 'features/app';
import SimpleLayout  from 'layouts/Simple';

const Index = () => {
  return <App />;
};

Index.Layout = SimpleLayout;

Index.IntlProvider = IntlProvider;

export default Index;


