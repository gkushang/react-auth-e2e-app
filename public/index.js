import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/app';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore);

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(store);

ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider muiTheme={getMuiTheme()} >
            <App />
        </MuiThemeProvider>
    </Provider>

    , document.querySelector('.container'));
