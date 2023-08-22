import { createSlice } from '@reduxjs/toolkit';

export const iconsSlice = createSlice({
  name: 'icons',
  initialState: [
    {style: "fa-solid", name: "fa-graduation-cap"},
    {style: "fa-solid", name: "fa-briefcase"},
    {style: "fa-solid", name: "fa-heart-pulse"},
    {style: "fa-solid", name: "fa-house"},
    {style: "fa-regular", name: "fa-clipboard"}
  ],
  // reducers: {
    
  // },
})

// export const { test} = currentUserSlice.actions;

export default iconsSlice.reducer;