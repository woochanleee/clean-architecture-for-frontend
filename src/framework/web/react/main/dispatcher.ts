import { ReduxAuthDispatcher, ReduxTodoDispatcher } from '../view/container/redux';

import { MobxAuthDispatcher, MobxTodoDispatcher } from '../view/container/mobx';

export const useReduxDispatcher = () => ({
  auth: new ReduxAuthDispatcher(),
  todo: new ReduxTodoDispatcher(),
})

export const useMobxDispatcher = () => ({
  auth: new MobxAuthDispatcher(),
  todo: new MobxTodoDispatcher(),
});
