import { Provider } from 'mobx-react';
import React from 'react';
import Main from './src/Main';
import * as stores from './src/store';

const App = () => (
  <Provider {...stores}>
    <Main/>
  </Provider>
);

export default App;
