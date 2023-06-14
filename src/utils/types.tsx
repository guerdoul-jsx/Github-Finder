import { GITHUB_TYPES } from "../store/Github/github.types";
import { OctokitResponse } from "@octokit/types";

export interface UsersType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface UserType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: string | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface PermissionProps {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
}

export interface LicenseProps {
  key: string;
  name: string;
  spdx_id: string;
  url: string | null;
  node_id: string;
}

export interface ownerProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Repos {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: ownerProps;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: LicenseProps;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: any;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: PermissionProps;
}

export type Loading = boolean;

export type AlertError = string | null;

export interface UsersStart {
  type: GITHUB_TYPES.GET_USERS_START;
}

export interface UsersSuccess {
  type: GITHUB_TYPES.GET_USERS_SUCCESS;
  payload: UsersType[];
}

export interface UsersFailed {
  type: GITHUB_TYPES.GET_USERS_FAILD;
  payload: AlertError;
}

export interface UserStart {
  type: GITHUB_TYPES.GET_USER_START;
}

export interface UserSuccess {
  type: GITHUB_TYPES.GET_USER_SUCCESS;
  payload: UserType;
}

export interface UserFailed {
  type: GITHUB_TYPES.GET_USER_FAILED;
  payload: AlertError;
}

export interface UserReposStart {
  type: GITHUB_TYPES.GET_USER_REPOS_START;
}

export interface UserReposSuccess {
  type: GITHUB_TYPES.GET_USER_REPOS_SUCCESS;
  payload: Repos[];
}

export interface UserReposFailed {
  type: GITHUB_TYPES.GET_USER_REPOS_FAILD;
  payload: AlertError;
}

export interface setLoading {
  type: GITHUB_TYPES.SET_LOADING;
}

export interface clearUsers {
  type: GITHUB_TYPES.CLEAR_USERS;
}

export interface SetAlert {
  type: GITHUB_TYPES.SET_ALERT;
  payload: AlertError;
}

export type GithubAction =
  | UsersStart
  | UsersSuccess
  | UsersFailed
  | UserStart
  | UserSuccess
  | UserFailed
  | UserReposStart
  | UserReposSuccess
  | UserReposFailed
  | setLoading
  | clearUsers
  | SetAlert;

export type RandomUsersType = OctokitResponse<UsersType[]>;
