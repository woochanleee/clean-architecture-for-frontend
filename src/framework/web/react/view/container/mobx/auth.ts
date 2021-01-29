import AuthDispatcher from '@adapter/dispatcher/AuthDispatcher';
import LoginResponse from '@adapter/model/dto/response/LoginResponse';

import { useMobxStore } from '../../../data/mobx/store';

export function useAuthMobx() {
  const {
    auth: {
      login: { loading, response },
    },
  } = useMobxStore();
  
  return {
    login: {
      loading,
      response: <LoginResponse>response,
    },
  };
}

export class MobxAuthDispatcher implements AuthDispatcher {
  private readonly authStore = useMobxStore().auth;

  public startLogin(): void {
    this.authStore.startLogin();
  }

  public finishLogin(response: LoginResponse): void {
    this.authStore.finishLogin(response);
  }
}

export default function() {
  
}