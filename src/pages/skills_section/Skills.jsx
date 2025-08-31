import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brand icons (socials, tools, frameworks)
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNodeJs, 
  faPhp, 
  faLaravel, 
  faGithub, 
  faFigma 
} from '@fortawesome/free-brands-svg-icons';

// Solid icons (generic icons)
import { 
  faDatabase, 
  faShieldAlt, 
  faClock, 
  faUsers, 
  faCode 
} from '@fortawesome/free-solid-svg-icons';


const Skills = () => {
  return (
    <section id="skills" className="relative text-white min-h-screen px-6 py-24 flex flex-col items-center">
      
      {/* Section Title */}
      <div className="text-center mb-38">
        <h2 className="text-5xl font-bold mb-4">Technical Expertise</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
           Building scalable web apps with modern technologies and efficient collaboration.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-6xl mb-16">
        {/* Frontend */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Frontend</h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <FontAwesomeIcon icon={faHtml5} size="3x" />
            <FontAwesomeIcon icon={faCss3Alt} size="3x" />
            <FontAwesomeIcon icon={faJs} size="3x" />
            <FontAwesomeIcon icon={faReact} size="3x" />
            <FontAwesomeIcon icon={faCode} size="3x" /> {/* TypeScript representation */}
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Backend</h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <FontAwesomeIcon icon={faPhp} size="3x" />
            <FontAwesomeIcon icon={faLaravel} size="3x" />
            <FontAwesomeIcon icon={faCode} size="3x" /> {/* Express.js representation */}
          </div>
        </div>

        {/* Database */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Database</h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <FontAwesomeIcon icon={faDatabase} size="3x" /> {/* MySQL */}
            <FontAwesomeIcon icon={faDatabase} size="3x" /> {/* MongoDB */}
          </div>
        </div>

        {/* Tools */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold">Tools</h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <FontAwesomeIcon icon={faGithub} size="3x" />
            <FontAwesomeIcon icon={faFigma} size="3x" />
            <FontAwesomeIcon icon={faCode} size="3x" /> {/* Postman representation */}
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-32 text-center">
        <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
        <div className="flex gap-8 justify-center flex-wrap">
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faUsers} size="2x" />
            <span>Teamwork</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faUsers} size="2x" />
            <span>Communication</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faCode} size="2x" />
            <span>Problem Solving</span>
          </div>
        </div>
      </div>

      {/* Bottom Highlights with circles */}
      <div className="flex items-center justify-center gap-50 flex-wrap">
        {/* Credibility */}
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faUsers} size="2x" />
          <h4 className="font-semibold">Credibility</h4>
          <p className="text-gray-400 text-center text-sm">Reliable and trustworthy</p>
        </div>

        {/* Small white circle */}
        <div className="w-3 h-3 bg-white rounded-full"></div>

        {/* Security */}
        <div className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          <h4 className="font-semibold">Security</h4>
          <p className="text-gray-400 text-center text-sm">Safe and secure solutions</p>
        </div>

        {/* Small white circle */}
        <div className="w-3 h-3 bg-white rounded-full"></div>

        {/* Time Delivery */}
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








