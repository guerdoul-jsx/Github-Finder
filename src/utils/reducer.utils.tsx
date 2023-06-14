import { AlertError, Loading, UserType, UsersType, Repos } from "./types";

export type PayloadProps =
  | UsersType[]
  | UserType
  | Repos[]
  | Loading
  | AlertError
  | null;

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type ActionWithType<T> = {
  type: T;
};

export function createAction<T extends string, P extends PayloadProps>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;
export function createAction<T extends string>(
  type: T,
  payload: void
): ActionWithType<T>;

export function createAction<T extends string, P extends PayloadProps>(
  type: T,
  payload: P
): ActionWithPayload<T, P> {
  return {
    type,
    payload,
  };
}
