export function useLocalStorage() {
  function set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  function remove(key: string) {
    localStorage.removeItem(key);
  }

  function clear() {
    localStorage.clear();
  }

  return { set, get, remove, clear };
}
