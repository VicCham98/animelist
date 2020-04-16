import React, {useState} from 'react';
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import NotFount from "./components/404";

function App() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const handleOnChange = (e) =>{
        setSearch(e.target.value);
        setFilter(`filter[text]=${e.target.value}&`);
        if (e.target.value==="")
            setFilter("");
    };

    const handleClick = (e) => {
        e.preventDefault();
        setSearch(search);
        setFilter(`filter[text]=${search}&`);
        if (search==="")
            setFilter("");
    };

  return (
    <div>
        <Router>
            <NavigationBar
                search={search}
                onClick={handleClick}
                onChange={handleOnChange}
            />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/categorias">
                    <Category
                        search={search}
                        filter={filter}
                    />
                </Route>
                <Route exact component={NotFount}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
