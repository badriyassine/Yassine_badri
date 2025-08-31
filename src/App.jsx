import React from "react";
import Background from "./components/Background";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Header />
    </div>
  );
};

export default App;
