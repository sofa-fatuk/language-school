import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import Courses from "./pages/Courses";
import CoursePage from "./pages/Courses/CoursePage";
import Blog from "./pages/Blog";
import BlogPage from "./pages/Blog/BlogPage";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/questions" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
