import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Dispatch, RootState } from "./store";

export const useAppDispatch: () => Dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
