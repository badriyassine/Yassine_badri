import { motion } from "framer-motion";
import Header from "./components/Header";
import Main from "./components/Main";

const Skills = ({ id = "skills" }) => {
  return (
    <section
      id={id}
      className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-16 pt-16 sm:pt-20"
    >
      <Header />
      <Main />
    </section>
  );
};

export default Skills;
