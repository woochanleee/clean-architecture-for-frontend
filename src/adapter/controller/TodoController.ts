import Controller from './Controller';

import { TodoGateway } from '../gateway/TodoGateway';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import GetTodosResponse from '../model/dto/response/GetTodosResponse';

class TodoController extends Controller<TodoGateway> {
  constructor(gateway: TodoGateway, private readonly todoDispatcher: TodoDispatcher) {
    super(gateway);
  }

  public async getTodos(): Promise<void> {
    this.todoDispatcher.startGetTodos();
    
    const response = await this.gateway.getTodos();

    this.todoDispatcher.finishGetTodos(new GetTodosResponse(response.status, response.data));
  }
}

export default TodoController;
