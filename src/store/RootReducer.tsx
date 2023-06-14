import { combineReducers } from "redux";
import { GithubReducer } from "./Github/github.reducer";

export const RootReducer = combineReducers({
  github: GithubReducer,
});
