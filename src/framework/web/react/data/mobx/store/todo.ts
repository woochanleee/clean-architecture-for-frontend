import { observable } from 'mobx';

import GetTodosResponse from '@adapter/model/dto/response/GetTodosResponse';
import TodoVO from '@adapter/model/vo/TodoVO';

import { getCurrentDate, isOverDeadline } from '../../../util/function/date';

const todo = observable({
  getTodos: {
    loading: false,
    response: null,
  },
  startGetTodos() {
    this.getTodos = {
      response: null,
      loading: true,
    };
  },
  finishGetTodos(response: GetTodosResponse) {
    this.getTodos = {
      loading: false,
      response: response.data?.todos && {
        status: response.status,
        data: {
          todos: response.data.todos.map((todo) => new TodoVO(todo.id, todo.author, todo.content, getCurrentDate(todo.deadline), isOverDeadline(todo.deadline))),
        },
      },
    };
  },
});

export default todo;
