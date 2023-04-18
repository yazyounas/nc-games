import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/global_components/Header";
import Home from "./Components/pages/Home";
import IndividualReview from "./Components/pages/IndividualReview";


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
       
        <Route path='/reviews/:review_id' element={<IndividualReview />} />
      </Routes>
    </div>
  );
}

export default App;
