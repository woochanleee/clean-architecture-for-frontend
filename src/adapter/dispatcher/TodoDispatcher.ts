import GetTodosResponse from '../model/dto/response/GetTodosResponse';

interface TodoDispatcher {
  startGetTodos(): void;
  finishGetTodos(response: GetTodosResponse): void;
}

export default TodoDispatcher;
