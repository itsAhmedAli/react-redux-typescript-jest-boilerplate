import { RootState } from "common/reducers";

/**
 * Loads the count from store
 *
 * @param {RootState} state The RootState
 * @returns {count} number
 */
export const selectCount = (state: RootState) => state.getIn(["counters", "value"]) as number;
