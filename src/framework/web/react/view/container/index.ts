import { useAuthMobx, useTodoMobx } from './mobx';
import { useAuthRedux, useTodoRedux } from './redux';

import { IS_REDUX_MODE } from '../../main';

export const useAuth = () => IS_REDUX_MODE ? useAuthRedux() : useAuthMobx();
export const useTodo = () => IS_REDUX_MODE ? useTodoRedux() : useTodoMobx();
