import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {store} from './Redux/Store/Store'
import MyStoreHeader from "./Store/Header/MyStoreHeader";
import Main from "./Store/Main/Main";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <div>
                <MyStoreHeader/>
                <Main/>
              </div>
            </Provider>
        );
    }
}

export default App;