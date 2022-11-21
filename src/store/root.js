import { createStore } from "redux";
import { rootReducer } from "./baseReducer";

export const store = createStore(rootReducer);
