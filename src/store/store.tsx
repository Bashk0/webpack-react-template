import { makeAutoObservable } from "mobx";
import { createContext, useContext, FC } from "react";

class Books {
    constructor() {
        makeAutoObservable(this);
    }
}

const StoreContext = createContext<Books>(new Books());

const StoreProvider: FC<{ store: Books }> = ({ store, children }) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

const useStore = () => {
    return useContext(StoreContext);
};

export { Books, StoreProvider, useStore };
