import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ApplicationStateT } from './store';
import { Store } from 'redux';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import AllMovies from './components/AllMovies/AllMovies';
import Navigation from './components/Navigation/Navigation';
import Favorites from './components/Favorites/Favorites';
import Footer from './components/Footer/Footer';
import NotFound from './components/404/NotFound';

import './App.css';

type MainPropsT = {
  store: Store<ApplicationStateT>,
  history: History,
}

class App extends Component<MainPropsT> {

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>

          <div className="App">
            <BrowserRouter>
              <Navigation />

              <Routes>
                <Route path='/' element={<AllMovies />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='*' element={<NotFound />} />
              </Routes>

              <Footer />
            </BrowserRouter>
          </div>

        </ConnectedRouter>
      </Provider>
    );
  }

};

export default App;