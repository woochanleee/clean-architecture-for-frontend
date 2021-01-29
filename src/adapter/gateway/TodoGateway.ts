import HttpClient from './HttpClient';

import GetTodosResponse from '../model/dto/response/GetTodosResponse';

export interface TodoGateway {
  getTodos(): Promise<GetTodosResponse>;
}

class TodoGatewayImpl implements TodoGateway {
  constructor(private readonly client: HttpClient) {}

  async getTodos(): Promise<GetTodosResponse> {
    const response: GetTodosResponse = await this.client.request<GetTodosResponse>({
      method: 'GET',
      url: 'http://localhost:3000/todos',
    });

    return new GetTodosResponse(response.status, response.data);
  }
}

export default TodoGatewayImpl;
