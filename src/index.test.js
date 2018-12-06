import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import React from 'react';
import App from './containers/App';

import { shallow } from 'enzyme';

it('renders app without crashing', () => {
  shallow(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>
  );
});
