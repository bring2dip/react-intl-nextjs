import React from 'react';
import Register, { IntlProvider } from 'features/register';
import SimpleLayout from 'layouts/Simple';

const RegisterPage = () => {
  return <Register />;
};

RegisterPage.Layout = SimpleLayout;

RegisterPage.IntlProvider = IntlProvider;

export default RegisterPage;