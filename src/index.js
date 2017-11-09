import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';

import App from './containers/App';
import SingleItemView from './containers/SingleItemView';
import Auth from './containers/Auth';

import registerServiceWorker from './lib/registerServiceWorker';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router>
        <div id="source">
        
          <Link to="/">Home</Link><br/>
          <Route exact path="/" component={App} />
          <Route path="/register" component={Auth} />
          <Route path="/items/:id" component={SingleItemView} />

        </div>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
