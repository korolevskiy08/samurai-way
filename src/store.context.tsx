import React from "react";
import {ReduxStoreType} from "./Redux/redux-store";

const StoreContext = React.createContext({} as ReduxStoreType)

export default StoreContext