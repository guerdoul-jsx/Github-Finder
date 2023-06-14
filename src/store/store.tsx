import { createStore, applyMiddleware, compose } from "redux";
import { RootReducer } from "./RootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof RootReducer>;

export const persistConfig = {
  key: "github",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, RootReducer);

const composEnhanced =
  (process.env.NODE_ENV !== "production" &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composEnhanced(applyMiddleware(thunk));

export const store = createStore(persistedReducer, {}, composedEnhancers);

export const persistor = persistStore(store);
