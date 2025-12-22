//import { useState } from 'react'

import { Routes, Route } from "react-router-dom";

import HomePage from "./components/layout/HomePage";

//import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/article/:id" element={<ArticlePage />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
