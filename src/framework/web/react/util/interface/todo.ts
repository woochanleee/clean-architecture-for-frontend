import TodoVO from '@adapter/model/vo/TodoVO';

export interface TodoStoreProps {
  getTodos: {
    loading: boolean;
    response: undefined | {
      status: number;
      data: {
        todos: TodoVO[]
      }
    }
  }
}