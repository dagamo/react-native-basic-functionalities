/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import AppRoot from './src/index';
import configureStore, {history} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {RootSiblingParent} from 'react-native-root-siblings';
export const {store, persistor} = configureStore();
const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoot />
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
