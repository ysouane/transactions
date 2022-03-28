import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop/";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Recap from "./pages/Recap";

import TransactionsData from "./data/transactionsData.json";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { transactions } = TransactionsData;
  const [data, setData] = useState(transactions);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions data={data} setData={setData} />} />
          <Route path="/recap" element={<Recap data={data} />} />
        </Routes>
      </BrowserRouter>

      <BackToTop />
    </div>
  );
}

export default App;
