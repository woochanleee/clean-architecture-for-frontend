import Controller from './Controller';

import { AuthGateway } from '../gateway/AuthGateway';
import LoginRequest from '../model/dto/request/LoginRequest';
import LoginResponse from '../model/dto/response/LoginResponse';
import AuthDispatcher from '../dispatcher/AuthDispatcher';
import StorageDispatcher from '@adapter/dispatcher/StorageDispatcher';

class UserController extends Controller<AuthGateway> {
  constructor(
    gateway: AuthGateway,
    private readonly authDispatcher: AuthDispatcher,
    private readonly storageDisptcher: StorageDispatcher
  ) {
    super(gateway);
  }

  public async login(email: string, password: string): Promise<void> {
    if ([email, password].includes('')) {
      throw new Error('Email and Password must not include white space.');
    }
    this.authDispatcher.startLogin();

    const response = await this.gateway.login(new LoginRequest(email, password));

    if (Math.floor(response.status / 100) === 2) {
      this.storageDisptcher.set('accessToken', response.data?.accessToken);
    }
    this.authDispatcher.finishLogin(new LoginResponse(response.status, response.data));
  }

  public async loadStorageToken() {
    const accessToken = await this.storageDisptcher.get('accessToken');

    if (accessToken) {
      this.authDispatcher.finishLogin(new LoginResponse(200, { accessToken: <string>accessToken }));
    }
  }
}


export default UserController;
