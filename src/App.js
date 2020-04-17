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
import DetailAnime from "./pages/DetailAnime";

function App() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const [value, setValue] = useState("all");

    const handleOnChangeFilter = (e) =>{
        setValue(e.target.value);
        if (e.target.value==="all")
            setFilter("");
        else
            setFilter(`filter[genres]=${e.target.value}&`);
        setSearch("");
    };

    const handleOnChange = (e) =>{
        setSearch(e.target.value);
        setFilter(`filter[text]=${e.target.value}&`);
        setValue("all");
        if (e.target.value==="")
            setFilter("");
    };

    const handleClick = (e) => {
        e.preventDefault();
        setSearch(search);
        setFilter(`filter[text]=${search}&`);
        setValue("all");
        if (search==="")
            setFilter("");
    };

  return (
    <div>
        <Router>
            <NavigationBar
                setSearch={setSearch}
                search={search}
                onClick={handleClick}
                onChange={handleOnChange}
            />
            <Switch>
                <Route exact path="/">
                    <Home
                        setSearch={setSearch}
                        search={search}
                    />
                </Route>
                <Route exact path="/categorias">
                    <Category
                        value={value}
                        onChange={handleOnChangeFilter}
                        setSearch={setSearch}
                        filter={filter}
                    />
                </Route>
                <Route exact path="/anime/:id">
                    <DetailAnime
                        search={search}
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
