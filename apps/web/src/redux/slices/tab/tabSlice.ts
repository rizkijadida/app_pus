import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../user/userSlice";

interface TabState extends UserState {
  tab: string;
  address: string;
}

interface TabGeneralState extends Omit<UserState, "id" | "password" | "tab"> {
  gender: boolean;
  dateOfBirth: Date;
  address: string;
}

const initialState: TabState = {
  id: 0,
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  password: "",
  level: "",
  tab: "general",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    generalTab: (state, action: PayloadAction<TabGeneralState>) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.level = action.payload.level;
      state.level = action.payload.level;
      state.address = action.payload.address;
    },
  },
});

export const { generalTab } = tabSlice.actions;
export default tabSlice.reducer;
