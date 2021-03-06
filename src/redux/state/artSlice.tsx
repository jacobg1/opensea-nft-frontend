import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { ISingleNft, PayloadFilters } from '../types'

export const fetchArt = createAsyncThunk(
  'art/fetchArtFromFilters',
  async (filters: PayloadFilters) => {
    const response = await fetch(
      'https://w8bm7xvxv6.execute-api.us-east-1.amazonaws.com/dev/listNfts',
      {
        method: 'POST',
        body: JSON.stringify(filters),
      }
    )
    return response.json() as Promise<ISingleNft[]>
  }
)

interface ArtState {
  nfts: ISingleNft[]
  loading: boolean
  error: Error | {}
}

const initialState: ArtState = {
  nfts: [],
  loading: false,
  error: {},
}

const artSlice = createSlice({
  name: 'art',
  initialState,
  reducers: {},
  extraReducers: {
    // Loading
    [fetchArt.pending.type]: (state, _) => {
      state.loading = true
    },

    // Success
    [fetchArt.fulfilled.type]: (
      state,
      action: PayloadAction<ISingleNft[]>
    ) => {
      state.nfts = action.payload
      state.loading = false
    },

    // Error
    [fetchArt.rejected.type]: (state, action) => {
      // show error toast on error?
      state.error = action.error
      state.loading = false
    },
  },
})

export default artSlice.reducer
