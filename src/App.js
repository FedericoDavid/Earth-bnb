import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dispo from "./Components/Dispo";
import Home from "./Components/Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./pages/SearchPage";

import "./css/App.css";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Dispo />
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
