import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./styles/scss/styles.scss";
import "./styles/iconfonts/icons.scss";
import "./styles/fonts/fonts.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

export const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <main className="page">
                    <Switch>
                        <Route exact path="/" component={() => <Redirect to="/books" />} />
                        <Route exact path="/books" component={Home} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
};
