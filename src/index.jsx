import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import AppRouter from './routers/AppRouter';

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(AppRouter);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routers/AppRouter', () => {
    renderApp(require('./routers/AppRouter').default);
  })
}
