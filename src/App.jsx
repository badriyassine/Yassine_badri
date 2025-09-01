import React from "react";
import Background from "./components/Background";
import Header from "./components/ui/Header";
import Home from "./pages/home_section/Home";
import Skills from "./pages/skills_section/Skills";
import Highlights from "./pages/Highlights_section/Highlights";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Header />
      <Home />
      <Skills />
      <Highlights />
    </div>
  );
};

export default App;
