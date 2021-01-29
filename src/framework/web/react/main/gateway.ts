import AuthGatewayImpl from '@adapter/gateway/AuthGateway';
import TodoGatewayImpl from '@adapter/gateway/TodoGateway';

import { axios, fetch } from './http-client';

export const authGateway = new AuthGatewayImpl(fetch);
export const todoGateway = new TodoGatewayImpl(axios);
