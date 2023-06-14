import { RootState } from "../store";

// ? USERS SELECTOR
export const selectUsers = (state: RootState) => state.github.users;

// ? USER SELECTOR
export const selectUser = (state: RootState) => state.github.user;

// ? USER REPOS SELECTOR
export const selectRepos = (state: RootState) => state.github.repos;

// ? LOADING SELECTOR
export const selectLoading = (state: RootState) => state.github.isLoading;

// ? ALERT SELECTOR
export const selectAlertError = (state: RootState) => state.github.alertError;

// ? STATE SELECTOR
export const selectState = (state: RootState) => state.github;
