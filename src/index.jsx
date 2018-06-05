import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

console.log(store.getState());

store.dispatch(addExpense({
  description: 'water bill',
  amount: 350,
  createdAt: 1231
}));

store.dispatch(addExpense({
  description: 'gas bill',
  amount: 1200,
  createdAt: 1231
}));

store.dispatch(setTextFilter('water'));

const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <AppContainer>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </AppContainer>
);

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

ReactDOM.render(jsx, document.getElementById('app'));
//renderApp(jsx);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routers/AppRouter', () => {
    renderApp(require('./routers/AppRouter').default);
  })
}
