import React from 'react';
import Posts, { IntlProvider } from 'features/posts';
import SimpleLayout  from 'layouts/Simple';

Posts.Layout = SimpleLayout;

Posts.IntlProvider = IntlProvider;

export default Posts;


