import { useAppDispatch, useFilterPayload } from '../redux/hooks'
import { setFilter } from '../redux/state/filterSlice'

function Pagination() {
  const dispatch = useAppDispatch()
  const getFilters = useFilterPayload()

  const { offset, limit } = getFilters

  const getPage = (type: string) => {
    const value =
      type === '+'
        ? Number(offset) + Number(limit)
        : Number(offset) - Number(limit)

    // Ensure that offset can't be negative
    const setValue = value > 0 ? value : 0

    dispatch(setFilter({ label: 'offset', value: setValue.toString() }))
  }

  return (
    <div>
      {Number(offset) > 0 && (
        <span onClick={() => getPage('-')}>Prev page</span>
      )}
      <span onClick={() => getPage('+')}>Next page</span>
    </div>
  )
}

export default Pagination
