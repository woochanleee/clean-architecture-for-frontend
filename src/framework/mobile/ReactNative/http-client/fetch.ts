import HttpClient, { RequestOption } from '@adapter/gateway/HttpClient';

class Fetch implements HttpClient {
  public request<Response>(option: RequestOption): Promise<Response> {
    return fetch(option.url, {
      method: option.method,
      headers: option.headers,
      body: JSON.stringify(option.body),
    }).then((response) => {
      if (!response.ok) {
        return <Response><unknown>{
          status: response?.status,
        }
      } else {
        return response.json().then((data) => <Response><unknown>({ data, status: response?.status })).catch(error => {
          throw error;
        });
      }
    }).catch(error => {
      throw error;
    });
  }
}

export default Fetch;
