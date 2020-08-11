/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { rootReducer } from '../../redux/reducers/rootReducer';

const store = createStore(rootReducer);

type Hook = (...args: any[]) => any;

const TestHook = ({ hook, args = [] }: {hook: Hook, args?: any[]}) => {
  hook(...args);
  return null;
};

export const testHook = (hook: Hook) => render(
  <Provider store={store}>
    <TestHook hook={hook} />
  </Provider>,
);
