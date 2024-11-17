import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./Reducer/CartReducer";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };
