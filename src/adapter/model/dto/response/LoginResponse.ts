import HttpResponse from './HttpResponse';

interface Data {
  accessToken: string;
}

class LoginResponse extends HttpResponse {
  constructor(status: number, readonly data: Data) {
    super(status);
  }
}

export default LoginResponse;
