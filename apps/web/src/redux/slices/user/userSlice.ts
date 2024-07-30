import { PayloadAction, createSlice } from '@reduxjs/toolkit';

 export interface UserState {
<<<<<<< HEAD
=======

>>>>>>> origin/main
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string; 
  level: any;
}

interface UserRegisterState extends Omit<UserState, "id" | "gender"> {
}

interface LoginUserState extends Omit<UserState, "password" | "level"> {}


const initialState: UserState = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
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
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
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
