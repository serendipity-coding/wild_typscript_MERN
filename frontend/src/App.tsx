import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./componenets/Layout/Footer";
import Header from "./componenets/Layout/Header";
import Main from "./componenets/Main";
import CreateWilder from "./componenets/screens/CreateWilder";
import NotFound from "./componenets/screens/NotFound";
import WilderDetails from "./componenets/screens/WilderDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/create">
            <CreateWilder />
          </Route>
          <Route path="/wilders/:id">
            <WilderDetails></WilderDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
