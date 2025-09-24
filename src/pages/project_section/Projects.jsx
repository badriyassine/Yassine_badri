import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const Projects = ({ id }) => {
  return (
    <section id={id} className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-16">
      <Header />
      <Main />
    </section>
  );
};

export default Projects;
