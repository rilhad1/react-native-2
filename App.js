import React from 'react';
import { Provider } from 'react-redux';

import Counter from './src/Component/Counter/index';
import store from './src/store/store';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
