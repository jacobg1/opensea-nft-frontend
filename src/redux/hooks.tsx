import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from './store';
import { PayloadFilters } from "./types";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Generate payload for api call
export const useFilterPayload = () => {
	const getFilters = useAppSelector((state) => state.filters);

	return getFilters.reduce((acc, curr) => {
		return { 
			...acc,
			[curr.filterId]: curr.value
		}
	}, {} as PayloadFilters)
}