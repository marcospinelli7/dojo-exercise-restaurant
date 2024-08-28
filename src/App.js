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
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
