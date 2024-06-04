import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import Filter from "./Filter";
import "./styles/App.css";
import "./styles/reset.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <Filter />
        <Content />
      </div>
    </div>
  );
}

export default App;
