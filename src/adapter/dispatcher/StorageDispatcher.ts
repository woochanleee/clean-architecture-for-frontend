interface StorageDispatcher {
  set<Value>(key: string, value: Value): void;
  get<Value>(key: string): Promise<Value>;
  remove(key: string): void;
  removeAll(): void;
}

export default StorageDispatcher;
