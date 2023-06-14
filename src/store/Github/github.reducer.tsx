import { GITHUB_TYPES } from "./github.types";
import {
  UserType,
  AlertError,
  Loading,
  UsersType,
  Repos,
} from "../../utils/types";
import { Reducer } from "redux";
import { GithubAction } from "../../utils/types";

export type GITHUB_INTITIAL_TYPE = {
  users: UsersType[];
  user: UserType | {};
  repos: Repos[];
  isLoading: Loading;
  alertError: AlertError;
};

export const GITHUB_INTITIAL_STATE: GITHUB_INTITIAL_TYPE = {
  users: [],
  user: {},
  repos: [],
  isLoading: true,
  alertError: null,
};

export const GithubReducer: Reducer<GITHUB_INTITIAL_TYPE, GithubAction> = (
  state = GITHUB_INTITIAL_STATE,
  action: GithubAction
) => {
  switch (action.type) {
    case GITHUB_TYPES.GET_USERS_START:
      return {
        ...state,
        isLoading: false,
      };
    case GITHUB_TYPES.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: true,
      };
    case GITHUB_TYPES.GET_USERS_FAILD:
      return {
        ...state,
        alertError: action.payload,
      };

    case GITHUB_TYPES.GET_USER_START:
      return {
        ...state,
        isLoading: false,
      };
    case GITHUB_TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: true,
      };
    case GITHUB_TYPES.GET_USER_FAILED:
      return {
        ...state,
        alertError: action.payload,
      };

    case GITHUB_TYPES.GET_USER_REPOS_START:
      return {
        ...state,
        isLoading: false,
      };
    case GITHUB_TYPES.GET_USER_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        isLoading: true,
      };
    case GITHUB_TYPES.GET_USER_REPOS_FAILD:
      return {
        ...state,
        alertError: action.payload,
      };
    case GITHUB_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case GITHUB_TYPES.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case GITHUB_TYPES.SET_ALERT:
      return {
        ...state,
        alertError: action.payload,
      };
    default:
      return state;
  }
};
