import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Brand icons
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNodeJs, 
  faPhp, 
  faLaravel, 
  faGithub, 
  faFigma, 
  faDocker, 
  faPython 
} from '@fortawesome/free-brands-svg-icons';

// Solid icons
import { 
  faDatabase, 
  faShieldAlt, 
  faClock, 
  faUsers, 
  faProjectDiagram, 
  faServer, 
  faCode 
} from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    icons: [faHtml5, faCss3Alt, faJs, faReact, faFigma]
  },
  {
    title: 'Backend',
    icons: [faNodeJs, faPhp, faLaravel, faPython, faServer]
  },
  {
    title: 'Database',
    icons: [faDatabase, faDatabase, faProjectDiagram]
  },
  {
    title: 'DevOps & Tools',
    icons: [faGithub, faDocker, faCode]
  },
  {
    title: 'Soft Skills',
    icons: [faUsers, faUsers, faUsers],
    labels: ['Teamwork', 'Communication', 'Problem Solving']
  }
];

const bottomHighlights = [
  { icon: faUsers, title: 'Credibility', desc: 'Reliable and trustworthy' },
  { icon: faShieldAlt, title: 'Security', desc: 'Safe and secure solutions' },
  { icon: faClock, title: 'Time Delivery', desc: 'Projects delivered on time' }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', bounce: 0.3, duration: 0.6 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="relative text-white min-h-screen px-6 py-16 flex flex-col items-center">

      {/* Section Title */}
      <motion.div 
        className="text-center mb-16"
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

      {/* Skills Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 w-full max-w-6xl mb-16">
        {techCategories.map((cat, i) => (
          <motion.div 
            key={i}
            className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center gap-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold">{cat.title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {cat.icons.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <FontAwesomeIcon icon={icon} size="3x" />
                  {cat.labels && <span className="text-sm text-gray-400">{cat.labels[idx]}</span>}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Highlights with circles */}
      <div className="flex items-center justify-center gap-50 flex-wrap">
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faUsers} size="2x" />
          <h4 className="font-semibold">Credibility</h4>
          <p className="text-gray-400 text-center text-sm">Reliable and trustworthy</p>
        </div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          <h4 className="font-semibold">Security</h4>
          <p className="text-gray-400 text-center text-sm">Safe and secure solutions</p>
        </div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faClock} size="2x" />
          <h4 className="font-semibold">Time Delivery</h4>
          <p className="text-gray-400 text-center text-sm">Projects delivered on time</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;











