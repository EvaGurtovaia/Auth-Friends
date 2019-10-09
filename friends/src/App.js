import React from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Public from "./components/Public";
import LoginForm from "./components/LoginForm";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <div>
                    <Link to="/public">Public Page</Link> <br />
                    <Link to="/protected">Protected Page</Link> <br />
                    <Link to="/login"> Log in</Link>
                    <Route path="/public" component={Public} />
                    <Route path="/login" component={LoginForm} />
                    <PrivateRoute exact path="/protected" component={Friends} />
                    <PrivateRoute
                        exact
                        path="/protected-add"
                        component={AddFriend}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
