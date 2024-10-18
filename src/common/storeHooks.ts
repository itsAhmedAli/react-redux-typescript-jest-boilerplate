import { RootState } from "common/reducers";
import { AppDispatch } from "common/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// https://redux.js.org/usage/usage-with-typescript#define-typed-hooks

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
