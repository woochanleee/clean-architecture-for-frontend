import TodoDispatcher from '@adapter/dispatcher/TodoDispatcher';
import GetTodosResponse from '@adapter/model/dto/response/GetTodosResponse';
import { TodoStoreProps } from 'util/interface/todo';

import { useMobxStore } from '../../../data/mobx/store';


export function useTodoMobx() {
  const {
    todo: {
      getTodos: { loading, response },
    },
  } = useMobxStore();

  return <TodoStoreProps>{
    getTodos: {
      loading,
      response,
    },
  };
}

export class MobxTodoDispatcher implements TodoDispatcher {
  private readonly todoStore = useMobxStore().todo;

  public startGetTodos(): void {
    this.todoStore.startGetTodos();
  }

  public finishGetTodos(response: GetTodosResponse): void {
    this.todoStore.finishGetTodos(response);
  }
}
