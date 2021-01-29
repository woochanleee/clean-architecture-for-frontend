import { observable } from 'mobx';

import LoginResponse from '@adapter/model/dto/response/LoginResponse';

const auth = observable({
  login: {
    loading: false,
    response: null,
  },
  startLogin() {
    this.login = {
      response: null,
      loading: true,
    };
  },
  finishLogin(response: LoginResponse) {
    this.login = {
      loading: false,
      response,
    };
  }
});

export default auth;
