import { createStore } from 'redux';

import reducer from '../module'

export type AppState = ReturnType<typeof reducer>;

export default createStore(reducer);
