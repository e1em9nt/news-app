import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/layout/HomePage";
import ArticlePage from "./components/layout/ArticlePage";
import NotFound from "./components/layout/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/articles" replace />} />
        <Route path="articles" element={<HomePage />} />
        <Route path="articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
