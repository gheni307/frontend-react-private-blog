import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blogposts from "./pages/Blogposts";
import BlogpostsId from "./pages/BlogpostsId";
import TopMenu from "./components/TopMenu";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    function toggleAuthenticated() {
        toggleIsAuthenticated(!isAuthenticated);
        console.log(isAuthenticated)
    }

    return (
        <>
            <Router>
                <TopMenu toBlogposts={isAuthenticated}/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                        <Login goTo={isAuthenticated}>
                            <button
                                type="button"
                                name="login"
                                onClick={toggleAuthenticated}
                            >Login
                            </button>
                        </Login>
                    </Route>
                    <PrivateRoute exact path="/blogposts" auth={isAuthenticated}>
                        <Blogposts/>
                    </PrivateRoute>
                    <Route path="/blogposts/:id">
                        <BlogpostsId/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
