//importing all required components
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { createStore,applyMiddleware,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';  

import './index.css';
import App from './App';
import tableReducer from './Store/reducers/tableReducer'

// Combining all the reducers using combineReducer
const rootReducer = combineReducers({
    table:tableReducer
})

// Creating store passing reducer and applying middlewares
const store = createStore(rootReducer,applyMiddleware(thunk));

const app = (
    <Provider store = {store}>
      <App/>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
