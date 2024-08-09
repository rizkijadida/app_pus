import { PayloadAction, createSlice } from '@reduxjs/toolkit';

 export interface UserState {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string; 
  level: any;
}

interface UserRegisterState extends Omit<UserState, "id" > {
}

interface LoginUserState extends Pick<UserState, "email" | "password"> {}


const initialState: UserState = {
  id: 0,
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  level: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerAction: (state, action: PayloadAction<UserRegisterState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.level = action.payload.level
    },
    loginAction: (state, action: PayloadAction<LoginUserState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.firstName = '';
      state.lastName = '';
      state.email = '';
    },
  },
});

export const { loginAction, logoutAction, registerAction } = userSlice.actions;

export default userSlice.reducer;
