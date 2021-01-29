import UserController from '@adapter/controller/UserController';
import TodoController from '@adapter/controller/TodoController';

import { authGateway, todoGateway } from './gateway';

import { useReduxDispatcher } from './dispatcher';

import AsyncStorageDispatcher from '../data/async-storage';

export const useController = () => {
  const dispatcher = useReduxDispatcher();
  
  return {
    userController: new UserController(authGateway, dispatcher.auth, new AsyncStorageDispatcher()),
    todoController: new TodoController(todoGateway, dispatcher.todo),
  }
}
