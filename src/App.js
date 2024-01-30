import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import Header from "./components/common/Header";
import SingleCountry from "./components/SingleCountry";
import './styles/variables.css';
import './styles/main.css';

const App = () => {
  console.log("rendering app");
  return (
    <Provider store={store}>
      <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/single-country" element={<SingleCountry />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
