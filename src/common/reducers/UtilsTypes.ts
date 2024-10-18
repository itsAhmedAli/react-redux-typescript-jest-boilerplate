export type Action<T extends string = string, P = void> = P extends void
  ? Readonly<{ type: T }>
  : Readonly<{ type: T; payload: P }>;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): Action<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P): Action<T> | Action<T, P> {
  const action = payload === undefined ? { type } : { type, payload };
  return action;
}

export const hasOwnProperty = <X extends object, Y extends PropertyKey>(
  obj: X,
  prop: Y,
): obj is X & Record<Y, unknown> => {
  return obj.hasOwnProperty(prop);
};

export type AnyFunction = (...args: any[]) => any;
export type StringMap<T> = { [key: string]: T };
export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

export interface IBaseRecord {
  id: number | string;
  loading?: boolean;
}
export interface IEditPayload<T> {
  id: number;
  name: string;
  value: T;
}
