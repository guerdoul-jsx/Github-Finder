import { Octokit } from "octokit";
import { GITHUB_TYPES } from "./github.types";
import { createAction } from "../../utils/reducer.utils";
import {
  UserType,
  AlertError,
  Repos,
  UsersType,
  GithubAction,
} from "../../utils/types";
import { ActionWithType, ActionWithPayload } from "../../utils/reducer.utils";
import { RandomUsersType } from "../../utils/types";
import { Dispatch } from "redux";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_TOKEN_KEY,
});

// ! function to set alert
export type SetAlert = ActionWithPayload<GITHUB_TYPES.SET_ALERT, AlertError>;
export const setAlert = (message: AlertError): SetAlert =>
  createAction(GITHUB_TYPES.SET_ALERT, message);

// ! function to setLoading
export type SetLoading = ActionWithType<GITHUB_TYPES.SET_LOADING>;
export const setLoading = (): SetLoading =>
  createAction(GITHUB_TYPES.SET_LOADING);

export type SetUsersStart = ActionWithType<GITHUB_TYPES.GET_USERS_START>;
export const setUsersStart = (): SetUsersStart =>
  createAction(GITHUB_TYPES.GET_USERS_START);

export type SetUsersSuccess = ActionWithPayload<
  GITHUB_TYPES.GET_USERS_SUCCESS,
  UsersType[]
>;
export const setUsersSuccess = (users: UsersType[]): SetUsersSuccess =>
  createAction(GITHUB_TYPES.GET_USERS_SUCCESS, users);

export type SetUsersFailed = ActionWithPayload<
  GITHUB_TYPES.GET_USERS_FAILD,
  AlertError
>;
export const setUsersFailed = (error: AlertError): SetUsersFailed =>
  createAction(GITHUB_TYPES.GET_USERS_FAILD, error);

export type UserStart = ActionWithType<GITHUB_TYPES.GET_USER_START>;
export const userStart = (): UserStart =>
  createAction(GITHUB_TYPES.GET_USER_START);

export type UserSuccess = ActionWithPayload<
  GITHUB_TYPES.GET_USER_SUCCESS,
  UserType
>;
export const userSuccess = (user: UserType): UserSuccess =>
  createAction(GITHUB_TYPES.GET_USER_SUCCESS, user);

export type UserFailed = ActionWithPayload<
  GITHUB_TYPES.GET_USER_FAILED,
  AlertError
>;
export const userFailed = (error: AlertError): UserFailed =>
  createAction(GITHUB_TYPES.GET_USER_FAILED, error);

export type UserReposStart = ActionWithType<GITHUB_TYPES.GET_USER_REPOS_START>;
export const userReposStart = (): UserReposStart =>
  createAction(GITHUB_TYPES.GET_USER_REPOS_START);

export type UserReposSuccess = ActionWithPayload<
  GITHUB_TYPES.GET_USER_REPOS_SUCCESS,
  Repos[]
>;
export const userReposSuccess = (user: Repos[]): UserReposSuccess =>
  createAction(GITHUB_TYPES.GET_USER_REPOS_SUCCESS, user);

export type UserReposFailed = ActionWithPayload<
  GITHUB_TYPES.GET_USER_REPOS_FAILD,
  AlertError
>;
export const userReposFailed = (error: AlertError): UserReposFailed =>
  createAction(GITHUB_TYPES.GET_USER_REPOS_FAILD, error);

// ! function to clear the state
export const clearUsers = (dispatch: Dispatch) => getRandomUsers(dispatch);

type ItemsProps = {
  items: UsersType[];
};

// ! function to search for a user
export const searchUsers = async (dispatch: Dispatch, text: string) => {
  dispatch(setUsersStart());
  try {
    const response = await octokit.request("GET /search/users?q={username}", {
      username: text,
    });
    const { items }: ItemsProps = response.data;
    dispatch(setUsersSuccess(items));
  } catch (error) {
    dispatch(setUsersFailed("Error Coming from search user request"));
  }
};

// ! function to generate Random users
export const getRandomUsers = async (
  dispatch: Dispatch<GithubAction>
): Promise<void> => {
  dispatch(setUsersStart());
  try {
    const response = await octokit.request("GET /users");
    const { data } = response as RandomUsersType;
    dispatch(setUsersSuccess(data));
  } catch (error) {
    dispatch(setUsersFailed("Error Coming from RandomUsers request"));
  }
};

// ! function to get the userInfo
export const getUser = async (dispatch: Dispatch, username: string) => {
  dispatch(userStart());
  try {
    const response = await octokit.request("GET /users/{username}", {
      username: username,
    });

    if (+response.status === 404) {
      window.location.href = "/notfound";
    } else {
      const { data } = response;
      dispatch(userSuccess(data as UserType));
    }
  } catch (error) {
    dispatch(userFailed("Error Coming from getUser request"));
  }
};

// ! function to get the repos of the user
export const getUserRepos = async (
  dispatch: Dispatch<GithubAction>,
  username: string
) => {
  dispatch(userReposStart());
  try {
    const response = await octokit.request("GET /users/{username}/repos", {
      username: username,
    });

    if (+response.status === 404) {
      window.location.href = "/notfound";
    } else {
      const { data } = response;
      dispatch(userReposSuccess(data as Repos[]));
    }
  } catch (error) {
    dispatch(userReposFailed("Error Coming from getUserRepos request"));
  }
};
