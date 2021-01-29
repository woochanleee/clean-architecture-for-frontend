import StorageDispatcher from '@adapter/dispatcher/StorageDispatcher';

class LocalStorageDispatcher implements StorageDispatcher {
  public set<Value>(key: string, value: Value): void {
    localStorage.setItem(key, <string><unknown>value);
  }

  public get<Value>(key: string): Promise<Value> {
    return Promise.resolve(<Value><unknown>localStorage.getItem(key));
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public removeAll(): void {
    localStorage.clear();
  }
}

export default LocalStorageDispatcher;
