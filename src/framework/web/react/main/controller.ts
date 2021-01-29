import UserController from '@adapter/controller/UserController';
import TodoController from '@adapter/controller/TodoController';

import { authGateway, todoGateway } from './gateway';

import { useReduxDispatcher, useMobxDispatcher } from './dispatcher';

import { IS_REDUX_MODE } from '.';
import IndexedDBDispatcher from '../data/indexed-DB';

export const useController = () => {
  const dispatcher = IS_REDUX_MODE ? useReduxDispatcher() : useMobxDispatcher();

  return {
    userController: new UserController(authGateway, dispatcher.auth, new IndexedDBDispatcher()),
    todoController: new TodoController(todoGateway, dispatcher.todo),
  };
}
