import { useEffect } from 'react'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { fetchArt } from './state/artSlice'
import type { RootState, AppDispatch } from './store'
import { PayloadFilters } from './types'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Generate payload for api call
export const useFilterPayload = () => {
  const getFilters = useAppSelector((state) => state.filters)

  return getFilters.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.filterId]: curr.value,
    }
  }, {} as PayloadFilters)
}

// Handle initial nft fetch
export const useLoadArt = () => {
  const dispatch = useAppDispatch()
  const getFilters = useFilterPayload()

  useEffect(() => {
    dispatch(fetchArt(getFilters))
  }, [dispatch, getFilters])
}
