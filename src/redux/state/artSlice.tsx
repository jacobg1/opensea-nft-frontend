import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadFilters } from "../types";

export const fetchArt = createAsyncThunk(
	'art/fetchArtFromFilters',
	async (filters: PayloadFilters) => {
		console.log(filters)
		const response = await fetch("https://w8bm7xvxv6.execute-api.us-east-1.amazonaws.com/dev/listNfts", {
			method: "POST",
			body: JSON.stringify(filters)
		})
		return response.json();
	}
)

interface ArtState {
	nfts: Record<string, any>[];
	loading: boolean;
	error: Error | {};
}

const artSlice = createSlice({
  name: "art",
  initialState: { nfts: [], loading: false, error: {} } as ArtState,
  reducers: {},
	extraReducers: {
		// Loading
		[fetchArt.pending.type]: (state, action) => {
			state.loading = true
		},

		// Success
		[fetchArt.fulfilled.type]: (state, action) => {
			state.nfts.push(action.payload)
			state.loading = false
		},

		// Error
		[fetchArt.rejected.type]: (state, action) => {
			state.error = action.error
			state.loading = false
		}
	}
});

export default artSlice.reducer;
