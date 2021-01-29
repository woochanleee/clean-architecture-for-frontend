import { ReduxAuthDispatcher, ReduxTodoDispatcher } from '../view/container/redux';

export const useReduxDispatcher = () => ({
  auth: new ReduxAuthDispatcher(),
  todo: new ReduxTodoDispatcher(),
})
