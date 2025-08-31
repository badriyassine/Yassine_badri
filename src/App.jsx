import React from "react";
import Background from "./components/Background";
import Header from "./components/ui/Header";
import Home from "./pages/home_section/Home";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Header />
      <Home />
    </div>
  );
};

export default App;
