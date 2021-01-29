import HttpClient from './HttpClient';

import LoginRequest from '../model/dto/request/LoginRequest';
import LoginResponse from '../model/dto/response/LoginResponse';

export interface AuthGateway {
  login(request: LoginRequest): Promise<LoginResponse>;
}

class AuthGatewayImpl implements AuthGateway {
  constructor(private readonly client: HttpClient) {}

  async login(request: LoginRequest): Promise<LoginResponse> {
    const response = await this.client.request<LoginResponse>({
      method: 'POST',
      url: 'http://localhost:3000/auth',
      body: request,
    });

    return new LoginResponse(response.status, response.data);
  }
}

export default AuthGatewayImpl;
