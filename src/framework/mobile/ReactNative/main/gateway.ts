import AuthGateway from '@adapter/gateway/AuthGateway';
import TodoGateway from '@adapter/gateway/TodoGateway';

import { fetch } from './http-client';

export const authGateway = new AuthGateway(fetch);
export const todoGateway = new TodoGateway(fetch);
