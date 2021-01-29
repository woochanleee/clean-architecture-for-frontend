import LoginResponse from '@adapter/model/dto/response/LoginResponse';

const LOGIN_START = 'auth/LOGIN_START' as const;
const LOGIN_FINISH = 'auth/LOGIN_FINISH' as const;

class AuthAction {
  public startLogin() {
    return {
      type: LOGIN_START,
    }
  }

  public finishLogin(response: LoginResponse) {
    return {
      type: LOGIN_FINISH,
      payload: response,
    }
  }
}

export const authAction = new AuthAction();

type Action = ReturnType<typeof authAction.startLogin>
  | ReturnType<typeof authAction.finishLogin>;

interface InitialState {
  login: {
    loading: boolean;
    response: null | LoginResponse;
  }
}

const initialState: InitialState = {
  login: {
    loading: false,
    response: null,
  },
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        login: {
          loading: true,
          response: null,
        }
      }
    case LOGIN_FINISH:
      return {
        ...state,
        login: {
          loading: false,
          response: action.payload,
        }
      }
    default:
      return state
  }
}
