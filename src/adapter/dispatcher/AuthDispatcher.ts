import LoginResponse from '../model/dto/response/LoginResponse';

interface AuthDispatcher {
  startLogin(): void;
  finishLogin(response: LoginResponse): void;
}

export default AuthDispatcher;
