import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
// import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
// import TrendingPage from "./components/TrendingPage";
// import Home from "./components/Home";
import Navbar from "./compo/Navbar";
import Home from "./compo/Home";
import Register from "./compo/Register";
import Login from "./compo/Login";
import NewAddPost from "./compo/NewAddPost";
const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/new-post" component={NewAddPost} />
                {/* <Route exact path="/trending" component={TrendingPage} /> */}
            </Switch>
        </div>
    );
};
export default App;
