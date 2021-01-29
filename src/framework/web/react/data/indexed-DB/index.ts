import StorageDispatcher from '@adapter/dispatcher/StorageDispatcher';

class IndexedDBDispatcher implements StorageDispatcher {
  private static DATABASE = 'clean architecrue for frontend';
  private static DB_VERSION = 1;
  private static DB_STORE_NAME = 'user';

  private static database: any;
  
  constructor() {
    IndexedDBDispatcher.init();
  }

  public static async init() {
    const request = indexedDB.open(IndexedDBDispatcher.DATABASE, IndexedDBDispatcher.DB_VERSION);
    
    return new Promise(resolve => {
      request.onsuccess = () => {
        this.database = request.result;
        resolve(true);
      };

      request.onerror = (event) => {
        throw new Error(`indexedDB: ${(<any>event).target.errorCode}`);
      };

      request.onupgradeneeded = (event: any) => {
        event.currentTarget.result.createObjectStore(IndexedDBDispatcher.DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
      };
    });
  }

  private getObjectStore(name, mode: 'readwrite' | 'readonly') {
    return IndexedDBDispatcher.database.transaction(name, mode).objectStore(name);
  }

  public set<Value>(key: string, value: Value): void {
    const store = this.getObjectStore(IndexedDBDispatcher.DB_STORE_NAME, 'readwrite');
    const request = store.put({ id: key, value });

    request.onsuccess = () => {
      console.log('put success');
    };

    request.onerror = () => {
      throw new Error('failed');
    };
  }

  public async get<Value>(key: string): Promise<Value> {
    await IndexedDBDispatcher.init();
    const store = this.getObjectStore(IndexedDBDispatcher.DB_STORE_NAME, 'readonly');
    const request = store.get(key);

    return new Promise<Value>(resolve => {
      request.onsuccess = () => {
        resolve(request.result?.value);
      }
    });
  }

  public remove(key: string): void {
    const store = this.getObjectStore(IndexedDBDispatcher.DB_STORE_NAME, 'readwrite');

    store.delete(key).onsuccess = () => {
      console.log('delete success');
    }
  }

  public removeAll(): void {
    const store = this.getObjectStore(IndexedDBDispatcher.DB_STORE_NAME, 'readwrite');

    store.clear().onsuccess = () => {
      console.log('remove all success');
    }
  }
}

export default IndexedDBDispatcher;
