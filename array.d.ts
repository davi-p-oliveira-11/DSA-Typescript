export {};

declare global {
  interface Array<T> {
    insertFirstPosition(value: number): void;
  }
}
