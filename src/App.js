import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';

import React from 'react';
import { Provider } from 'react-redux';

import Routes from '~/routes';
import store from '~/store';

import Footer from '~/components/Footer';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Footer />
    </Provider>
  );
}
