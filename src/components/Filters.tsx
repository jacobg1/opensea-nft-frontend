import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setFilter } from "../redux/state/filterSlice";

import { SelectChange, InputChange } from '../redux/types'

import Input from "./Input";
import Dropdown from "./Dropdown";


interface FilterHandler {
	(e: SelectChange | InputChange, label: string): void
}

function Filters() {
  const dispatch = useAppDispatch();
  const handler: FilterHandler = (e, label) => {
    dispatch(setFilter({ label, value: e.target.value }));
  }

  const getFilters = useAppSelector((state) => state.filters);

  return (
    <ul>
      {getFilters.map(({ type, label, value, options }) => {
        if (options) {
          return (
            <Dropdown
              key={`${type}-${label}`}
              label={label}
              handler={handler}
              type={type}
              value={value}
              options={options}
            />
          );
        }
        return (
          <Input
            key={`${type}-${label}`}
            label={label}
            handler={handler}
            type={type}
            value={value}
          />
        );
      })}
    </ul>
  );
}

export default Filters;
