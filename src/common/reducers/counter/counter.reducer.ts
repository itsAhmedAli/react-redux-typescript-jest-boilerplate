import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "common/reducers/counter/counter.actions";
import type { RootActions, RootState } from "common/reducers/index";
import { Record } from "immutable";

export const CounterStateRecord = Record({
  value: 0,
  loading: false,
});



export const model = "counters";
export const initialState = CounterStateRecord();
export type CounterState = typeof initialState;

export const reducer = (state: RootState, action: RootActions): RootState => {
  switch (action.type) {
    case INCREMENT:
      return state.updateIn([model, "value"], (oldValue) => (oldValue as number) + 1);
    case DECREMENT:
      return state.updateIn([model, "value"], (oldValue) => (oldValue as number) - 1);
    case INCREMENT_BY_AMOUNT:
      return state.updateIn([model, "value"], (oldValue) => (oldValue as number) + action.payload);
    default:
      return state;
  }
};
