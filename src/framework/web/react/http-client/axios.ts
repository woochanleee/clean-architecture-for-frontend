import axios from 'axios';

import HttpClient, { RequestOption } from '@adapter/gateway/HttpClient';

class Axios implements HttpClient {
  public request<Response>(option: RequestOption): Promise<Response> {
    return axios({
      method: option.method,
      url: option.url,
      headers: option.headers,
      data: option.body,
    }).then(response => <Response><unknown>({
      status: response.status,
      data: response.data,
    })).catch(error => <Response><unknown>({
      status: error.response.status
    }));
  }
}

export default Axios;
