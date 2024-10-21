import { RootDispatchType, RootGetState } from "common/store";
import { ThunkResult } from "common/reducers";
import { fetchCount } from "common/api/counter.service";

export const CounterAsyncActions = {
  incrementAsync: (amount: number): ThunkResult<Promise<void>> => {
    return async (dispatch: RootDispatchType, getState: RootGetState) => {
      const response = await fetchCount(amount);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    };
  },
};
