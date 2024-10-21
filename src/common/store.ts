import { legacy_createStore, applyMiddleware, compose, Store } from "redux";
import thunk from "redux-thunk";
import { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import { RootState, RootActions, createRootReducer } from "common/reducers";
import { composeWithDevTools, EnhancerOptions } from "redux-devtools-extension";

const options: EnhancerOptions = { trace: true, traceLimit: 25 } as any as EnhancerOptions;
const composeEnhancers: typeof compose = composeWithDevTools(options);

export type RootDispatchType = ThunkDispatch<RootState, undefined, RootActions>;
export type RootStoreType = Store<RootState, RootActions> & { dispatch: RootDispatchType };
export type RootGetState = () => RootState;

export const store: RootStoreType = legacy_createStore<
  RootState,
  RootActions,
  ThunkMiddleware<RootState, RootActions>,
  {}
>(
  createRootReducer(),
  //@ts-ignore
  composeEnhancers(applyMiddleware(thunk)),
);

export type AppDispatch = typeof store.dispatch;
