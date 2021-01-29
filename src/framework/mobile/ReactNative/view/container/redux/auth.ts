import { useDispatch, useSelector } from 'react-redux';

import AuthDispatcher from '@adapter/dispatcher/AuthDispatcher';
import LoginResponse from '@adapter/model/dto/response/LoginResponse';

import { AppState } from '../../../data/redux/store';
import { authAction } from '../../../data/redux/module/auth';

interface StoreProps {
  login: {
    loading: boolean;
    response: null | LoginResponse;
  };
}

export function useAuthRedux() {
  const authStore = useSelector<AppState, StoreProps>(({ auth: { login } }) => ({
    login: {
      response: login.response,
      loading: login.loading,
    },
  }));

  return authStore;
}

export class ReduxAuthDispatcher implements AuthDispatcher {
  private readonly dispatch = useDispatch();

  public startLogin(): void {
    this.dispatch(authAction.startLogin());
  }

  public finishLogin(response: LoginResponse): void {
    this.dispatch(authAction.finishLogin(response));
  }
}
