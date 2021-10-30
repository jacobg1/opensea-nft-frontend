import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  filterId: string;
  type: string;
  label: string;
  value: string;
  options?: string[];
}

const initialState: FilterState[] = [
  { filterId: "offset", type: "number", label: "offset", value: "0" },
  { filterId: "limit", type: "number", label: "limit", value: "20" },
  {
    filterId: "order_direction",
    type: "dropdown",
    label: "order",
    value: "desc",
    options: ["desc", "asc"],
  },
];

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ label: string; value: string }>
    ) => {
      const { label, value } = action.payload;

      const findFilter = state.find((filter) => filter.label === label);

      if (findFilter) {
        findFilter.value = value;
      }
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
