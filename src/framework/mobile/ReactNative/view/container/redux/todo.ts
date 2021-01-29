import { useDispatch, useSelector } from 'react-redux';

import TodoDispatcher from '@adapter/dispatcher/TodoDispatcher';
import GetTodosResponse from '@adapter/model/dto/response/GetTodosResponse';

import { AppState } from '../../../data/redux/store';
import { TodoStoreProps } from '../../../util/interface/todo';
import { todoAction } from '../../../data/redux/module/todo';


export function useTodoRedux() {
  const todoStore = useSelector<AppState, TodoStoreProps>(({ todo: { getTodos } }) => ({
    getTodos: {
      loading: getTodos.loading,
      response: getTodos.response,
    },
  }));

  return todoStore;
}

export class ReduxTodoDispatcher implements TodoDispatcher {
  private readonly dispatch = useDispatch();

  public startGetTodos(): void {
    this.dispatch(todoAction.startGetTodos());
  }

  public finishGetTodos(response: GetTodosResponse): void {
    this.dispatch(todoAction.finishGetTodos(response));
  }
}
