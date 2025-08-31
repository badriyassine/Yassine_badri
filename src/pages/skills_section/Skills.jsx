import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPhp, faLaravel, 
  faGithub, faFigma, faDocker 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faUsers, faServer, faProjectDiagram, faPeopleArrows, faComments, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const techCategories = [
  { title: 'Frontend', icons: [faHtml5, faCss3Alt, faJs, faReact, faFigma] },
  { title: 'Backend', icons: [faNodeJs, faPhp, faLaravel, faServer] },
  { title: 'Database', icons: [faDatabase, faProjectDiagram] }, // MySQL & MongoDB icons
  { title: 'DevOps & Tools', icons: [faGithub, faDocker, faServer] },
  { 
    title: 'Soft Skills', 
    icons: [faPeopleArrows, faComments, faLightbulb], 
    labels: ['Teamwork', 'Communication', 'Problem Solving'] 
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.6 } }
};

const Skills = () => {
  return (
    <section id="skills" className="relative text-white min-h-screen px-6 py-26 flex flex-col items-center">

      {/* Section Title */}
      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Building scalable web apps with modern technologies and strong collaboration skills.
        </p>
      </motion.div>

      {/* Skills Cards in 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mb-16">
        {techCategories.map((cat, i) => (
          <motion.div 
            key={i}
            className="relative bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 shadow-lg overflow-hidden"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>

            {/* Scrolling Tech Icons */}
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-10 animate-marquee">
                {cat.icons.concat(cat.icons).map((icon, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 min-w-[80px]">
                    <FontAwesomeIcon icon={icon} size="3x" />
                    {cat.labels && <span className="text-sm text-gray-400">{cat.labels[idx % cat.labels.length]}</span>}
                  </div>
                ))}
              </div>

              {/* Blurred sides */}
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-900/90 to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-900/90 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Highlights (unchanged) */}
      <div className="flex items-center justify-center mt-10 gap-50 flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faUsers} size="2x" />
          <h4 className="font-semibold">Credibility</h4>
          <p className="text-gray-400 text-center text-sm">Reliable and trustworthy</p>
        </div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faUsers} size="2x" />
          <h4 className="font-semibold">Security</h4>
          <p className="text-gray-400 text-center text-sm">Safe and secure solutions</p>
        </div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faUsers} size="2x" />
          <h4 className="font-semibold">Time Delivery</h4>
          <p className="text-gray-400 text-center text-sm">Projects delivered on time</p>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 15s linear infinite; /* smooth nonstop */
        }
      `}</style>
    </section>
  );
};

export default Skills;














