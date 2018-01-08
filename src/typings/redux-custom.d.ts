export interface Action<T> {
  type: T;

  [extraProps: string]: {};
}
