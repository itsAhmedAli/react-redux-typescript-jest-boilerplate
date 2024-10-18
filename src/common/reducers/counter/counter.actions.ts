import { ActionsUnion, createAction } from "common/reducers/UtilsTypes";

export const INCREMENT = "@counter/INCREMENT";
export const DECREMENT = "@counter/DECREMENT";
export const INCREMENT_BY_AMOUNT = "@counter/INCREMENT_BY_AMOUNT";

export interface ICounter {
  value: number;
  loading?: boolean;
}

export const CounterActions = {
  increment: () => createAction(INCREMENT),
  decrement: () => createAction(DECREMENT),
  incrementByAmount: (amount: number) => createAction(INCREMENT_BY_AMOUNT, amount),
};
export type CounterActions = ActionsUnion<typeof CounterActions>;
