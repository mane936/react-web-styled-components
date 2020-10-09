import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar, PricingTest } from "./components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={PricingTest} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
