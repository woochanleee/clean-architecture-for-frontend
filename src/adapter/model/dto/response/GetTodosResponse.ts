import HttpResponse from './HttpResponse';

interface Todo {
  id: number;
  author: string;
  content: string;
  deadline: Date;
}

interface Data {
  todos: Todo[];
}

class GetTodosResponse extends HttpResponse {
  constructor(status: number, readonly data: Data) {
    super(status);
  };
}

export default GetTodosResponse;
