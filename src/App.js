import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { PageLayout } from "./components";
//pages
import { AboutPage, BookingPage, ContactPage, Homepage, MenuPage, ServicePage, TeamPage, TestimonialPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
