import StorageDispatcher from '@adapter/dispatcher/StorageDispatcher';

class SessionStorageDispatcher implements StorageDispatcher {
  public set<Value>(key: string, value: Value): void {
    sessionStorage.setItem(key, <string>(<unknown>value));
  }

  public get<Value>(key: string): Promise<Value> {
    return Promise.resolve(<Value><unknown>sessionStorage.getItem(key));
  }

  public remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  public removeAll(): void {
    sessionStorage.clear();
  }
}

export default SessionStorageDispatcher;
