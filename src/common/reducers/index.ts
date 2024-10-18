import { Record } from "immutable";
import { Reducer } from "redux";
import { ThunkAction } from "redux-thunk";

import { CounterActions } from "common/reducers/counter/counter.actions";
import { reducer as counterReducer, initialState as counterInitialState } from "common/reducers/counter/counter.reducer";

export const InitRootState = Record({
  counters: counterInitialState,
})();

export type RootState = typeof InitRootState;

export const createRootReducer = () => {
  return ((state: RootState, action: RootActions) => {
    if (!state) {
      state = InitRootState;
    }

    state = counterReducer(state, action);

    return state;
  }) as Reducer<RootState, RootActions>;
};

export type RootActions = CounterActions;

export type ThunkResult<T> = ThunkAction<T, RootState, undefined, RootActions>;
