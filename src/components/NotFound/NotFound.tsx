import { useHistory } from "react-router-dom";

import "./notFound.scss";

const NotFound = () => {
    const history = useHistory();
    setTimeout(() => history.push("/books"), 3000);
    return (
        <div>
            <h1>Sorry</h1>
            <p>That page cannot be found</p>
            {/* <button onClick={() => history.push("/books")}>Back to the home page...</button> */}
        </div>
    );
};

export default NotFound;
