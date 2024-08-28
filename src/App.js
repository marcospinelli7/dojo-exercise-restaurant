import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { PageLayout } from "./components";
//pages
import { About, Homepage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
