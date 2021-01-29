import AsyncStorage from '@react-native-async-storage/async-storage';

import StorageDispatcher from '@adapter/dispatcher/StorageDispatcher';


class AsyncStorageDispatcher implements StorageDispatcher {
  public set<Value>(key: string, value: Value): void {
    AsyncStorage.setItem(key, <string><unknown>value);
  }

  public get<Value>(key: string): Promise<Value> {
    return Promise.resolve(<Value><unknown>AsyncStorage.getItem(key));
  }

  public remove(key: string): void {
    AsyncStorage.removeItem(key);
  }

  public removeAll(): void {
    AsyncStorage.clear();
  }
}

export default AsyncStorageDispatcher;
