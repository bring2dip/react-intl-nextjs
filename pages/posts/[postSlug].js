import React from 'react';
import { IntlProvider } from 'features/posts';
import ViewPost from 'features/posts/ViewPost';
import SimpleLayout  from 'layouts/Simple';

ViewPost.Layout = SimpleLayout;

ViewPost.IntlProvider = IntlProvider;

export default ViewPost;
