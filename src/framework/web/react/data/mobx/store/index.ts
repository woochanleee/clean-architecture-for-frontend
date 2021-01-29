import { createContext, useContext } from 'react';

import auth from './auth';
import todo from './todo';

export const MobxContext = createContext(null);

export function useMobxStore() {
  return <any>useContext(MobxContext);
}

export default {
  auth,
  todo,
};
