import GetTodosResponse from '@adapter/model/dto/response/GetTodosResponse';
import TodoVO from '@adapter/model/vo/TodoVO';

import { getCurrentDate, isOverDeadline } from '../../../util/function/date';
import { TodoStoreProps } from '../../../util/interface/todo';

const GET_TODOS_START = 'auth/GET_TODOS_START' as const;
const GET_TODOS_FINISH = 'auth/GET_TODOS_FINISH' as const;

class TodoAction {
  public startGetTodos() {
    return {
      type: GET_TODOS_START,
    };
  }

  public finishGetTodos(response: GetTodosResponse) {
    return {
      type: GET_TODOS_FINISH,
      payload: response.data?.todos && {
        status: response.status,
        data: {
          todos: response.data.todos.map((todo) => new TodoVO(todo.id, todo.author, todo.content, getCurrentDate(todo.deadline), isOverDeadline(todo.deadline))),
        },
      },
    };
  }
}

export const todoAction = new TodoAction();

type Action = ReturnType<typeof todoAction.startGetTodos> | ReturnType<typeof todoAction.finishGetTodos>;

const initialState: TodoStoreProps = {
  getTodos: {
    loading: false,
    response: undefined,
  },
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_TODOS_START:
      return {
        ...state,
        getTodos: {
          loading: true,
          response: undefined,
        },
      };
    case GET_TODOS_FINISH:
      return {
        ...state,
        getTodos: {
          loading: false,
          response: action.payload,
        },
      };
    default:
      return state;
  }
}
