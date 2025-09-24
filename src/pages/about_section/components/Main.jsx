import React from "react";
import { motion } from "framer-motion";
import profileImg from "/images/profile/image (3).png";

const Main = () => {
  return (
    <motion.main
      className="flex flex-col lg:flex-row justify-between w-full gap-8 mt-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Text section */}
      <div className="w-full lg:w-1/2 text-left space-y-6 order-2 lg:order-1">
        <h3 className="text-xl sm:text-2xl font-bold">Who am i ?</h3>

        <div className="space-y-4">
          {/* Mobile Version - Shorter */}
          <div className="block sm:hidden space-y-3">
            <p className="text-white leading-relaxed text-sm">
              Hey! I'm{" "}
              <span className="text-[#ff734d] font-semibold">
                Yassine Badri
              </span>
              , a{" "}
              <span className="text-[#ff734d] font-semibold">
                20-year-old Full Stack Developer
              </span>{" "}
              who loves building cool stuff with code. I create websites and
              apps from scratch using React, Node.js, and modern tech.
            </p>
            <p className="text-white leading-relaxed text-sm">
              I'm young, eager to learn, and I write clean code that actually
              works. I love solving problems and working with teams. Always up
              for a challenge!
            </p>
          </div>

          {/* Desktop Version - Full */}
          <div className="hidden sm:block space-y-4">
            <p className="text-white leading-relaxed text-sm sm:text-base">
              Hey there! I'm{" "}
              <span className="text-[#ff734d] font-semibold">
                Yassine Badri
              </span>
              , a{" "}
              <span className="text-[#ff734d] font-semibold">
                20-year-old Full Stack Developer
              </span>{" "}
              who absolutely loves turning ideas into reality through code. I've
              been building websites and apps for a few years now, and honestly,
              I can't get enough of it!
            </p>

            <p className="text-white leading-relaxed text-sm sm:text-base">
              <span className="text-[#ff734d] font-semibold">What I Do:</span> I
              build everything from the ground up - whether it's a cool frontend
              with React or a solid backend with Node.js. I love working with
              databases, APIs, and all the technical stuff that makes apps
              actually work. The best part? I get to see my code come to life
              and help real people solve real problems.
            </p>

            <p className="text-white leading-relaxed text-sm sm:text-base">
              <span className="text-[#ff734d] font-semibold">
                What I Can Bring to Your Team:
              </span>{" "}
              I'm young, hungry, and always learning new things. I write clean
              code that others can actually understand, and I'm not afraid to
              ask questions or try new approaches. I work well with others and
              genuinely enjoy collaborating on projects. Plus, I'm always up for
              a challenge - the harder the problem, the more excited I get to
              solve it!
            </p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-[#ff734d] hover:shadow-[#ff734d]/20 hover:shadow-lg transition-all duration-300 cursor-pointer h-24 flex flex-col justify-center">
            <div className="text-2xl font-bold text-[#ff734d]">1+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-[#ff734d] hover:shadow-[#ff734d]/20 hover:shadow-lg transition-all duration-300 cursor-pointer h-24 flex flex-col justify-center">
            <div className="text-2xl font-bold text-[#ff734d]">8+</div>
            <div className="text-sm text-gray-300">Projects Completed</div>
          </div>
          <div className="hidden sm:flex bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-[#ff734d] hover:shadow-[#ff734d]/20 hover:shadow-lg transition-all duration-300 cursor-pointer h-24 flex-col justify-center">
            <div className="text-2xl font-bold text-[#ff734d]">5+</div>
            <div className="text-sm text-gray-300">Technologies Mastered</div>
          </div>
          <div className="hidden sm:flex bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-[#ff734d] hover:shadow-[#ff734d]/20 hover:shadow-lg transition-all duration-300 cursor-pointer h-24 flex-col justify-center">
            <div className="text-2xl font-bold text-[#ff734d]">3</div>
            <div className="text-sm text-gray-300">Languages Spoken</div>
          </div>
          <div className="hidden sm:flex bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-[#ff734d] hover:shadow-[#ff734d]/20 hover:shadow-lg transition-all duration-300 cursor-pointer h-24 flex-col justify-center">
            <div className="text-2xl font-bold text-[#ff734d]">20</div>
            <div className="text-sm text-gray-300">Years Old</div>
          </div>
          <div className="hidden sm:flex bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:border-[#ff734d] hover:shadow-[#ff734d]/20 hover:shadow-lg transition-all duration-300 cursor-pointer h-24 flex-col justify-center">
            <div className="text-2xl font-bold text-[#ff734d]">100%</div>
            <div className="text-sm text-gray-300">Passion for Code</div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="relative w-full md:w-1/2 lg:w-2/6 flex justify-center items-center order-1 lg:order-2">
        <img
          src={profileImg}
          alt="Yassine Badri - Full Stack Developer"
          className="rounded-2xl w-64 h-auto sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-130 lg:h-130 xl:w-150 xl:h-150 object-cover shadow-[20px_20px_0px_#ff734d]"
        />
      </div>
    </motion.main>
  );
};

export default Main;
