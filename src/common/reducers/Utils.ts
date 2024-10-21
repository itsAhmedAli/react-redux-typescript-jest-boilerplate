import { IBaseRecord, createAction } from "common/reducers/UtilsTypes";
import { RootState } from "common/reducers";
import { Record } from "immutable";

export const fetch = <T extends IBaseRecord>(state: RootState, model: string, record: Record<T>): RootState => {
  const id = record.get("id");
  if (state.getIn([model, "byId", id])) {
    return state.setIn([model, "byId", id, "loading"], true);
  }
  return state.setIn([model, "byId", id], record.setIn(["loading"], true));
};

export const receive = <T extends IBaseRecord>(state: RootState, model: string, record: Record<T>): RootState => {
  const id = record.get("id");
  record = record.set("loading", false);
  return state.setIn([model, "byId", id], record).setIn([model, "lastSavedById", id], record);
};

export const reset = (state: RootState, model: string, id: number | string): RootState => {
  const lastSaved = state.getIn([model, "lastSavedById", id]);

  if (!lastSaved) return state.deleteIn([model, "byId", id]);
  return state.setIn([model, "byId", id], lastSaved);
};

export const loaded = (state: RootState, model: string, id: number | string): RootState => {
  return state.setIn([model, "byId", id, "loading"], false);
};
