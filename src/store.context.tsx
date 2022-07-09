import React, {ReactNode} from "react";
import {ReduxStoreType} from "./Redux/redux-store";

const StoreContext = React.createContext({} as ReduxStoreType)

export type ProviderType = {
    store: ReduxStoreType,
    children: ReactNode
}

export default StoreContext