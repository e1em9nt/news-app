import { Routes, Route } from "react-router-dom";

import HomePage from "./components/layout/HomePage";
import ArticlePage from "./components/layout/ArticlePage";
import NotFound from "./components/layout/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
