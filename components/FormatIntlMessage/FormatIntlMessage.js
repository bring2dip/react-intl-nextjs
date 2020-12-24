import React from 'react';
import {FormattedMessage} from 'react-intl';


export default function FormatIntlMessage({ id, values }) {
  return (
    <FormattedMessage id={id} values={values} />
  );
}