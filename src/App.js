import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/global_components/Header";
import Home from "./Components/home_components/Home";
import IndividualReview from "./Components/home_components/IndividualReview";

function App() {
  const [items, setItems] = useState([])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home items={items} setItems={setItems}/>} />
        <Route path="/reviews/:review_id" element={<IndividualReview />} />
      </Routes>
    </div>
  );
}

export default App;
