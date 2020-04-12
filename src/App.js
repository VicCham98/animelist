import React from 'react';
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Category from "./pages/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Router>
            <NavigationBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/categorias" component={Category}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
