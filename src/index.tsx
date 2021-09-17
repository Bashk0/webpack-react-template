import ReactDOM from "react-dom";
import { App } from "./App";
import { Books, StoreProvider } from "./store/store";

const store = new Books();

ReactDOM.render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>,
    document.getElementById("root")
);
