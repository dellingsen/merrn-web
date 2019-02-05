import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Client'
// import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from './redux/store/ConfigureStore'
import initialStore from './redux/store/InitialStore'

const store = configureStore(initialStore)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
// registerServiceWorker()
