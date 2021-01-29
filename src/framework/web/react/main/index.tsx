import React from 'react';
import { render } from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from '../data/redux/store';


import mobxStore, { MobxContext } from '../data/mobx/store';

import Route from '../view/route'

export const IS_REDUX_MODE = false;

const App: React.FC = () => {

  return (
    <>
      {IS_REDUX_MODE ?
        <ReduxProvider store={reduxStore}>
          <Route />
        </ReduxProvider> :
        <MobxContext.Provider value={mobxStore}>
          <Route />
        </MobxContext.Provider>
      }
    </>
  );
}

render(<App />, document.getElementById('root'));
