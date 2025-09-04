import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faShieldAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const Highlights = () => {
  return (
    <div className="flex items-center justify-center  gap-38 py-20 flex-wrap">
      {/* Highlight 1 */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <FontAwesomeIcon
          icon={faUsers}
          size="2x"
          className="text-white transition-colors duration-300 group-hover:text-[#ff734d]"
        />
        <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-[#ff734d]">
          Credibility
        </h4>
        <p className="text-gray-400 text-center text-sm">
          Reliable and trustworthy
        </p>
      </div>

      {/* Divider */}
      <div className="w-3 h-3 bg-white rounded-full hidden sm:block"></div>

      {/* Highlight 2 */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <FontAwesomeIcon
          icon={faShieldAlt}
          size="2x"
          className="text-white transition-colors duration-300 group-hover:text-[#ff734d]"
        />
        <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-[#ff734d]">
          Security
        </h4>
        <p className="text-gray-400 text-center text-sm">
          Safe and secure solutions
        </p>
      </div>

      {/* Divider */}
      <div className="w-3 h-3 bg-white rounded-full hidden sm:block"></div>

      {/* Highlight 3 */}
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <FontAwesomeIcon
          icon={faClock}
          size="2x"
          className="text-white transition-colors duration-300 group-hover:text-[#ff734d]"
        />
        <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-[#ff734d]">
          Time Delivery
        </h4>
        <p className="text-gray-400 text-center text-sm">
          Projects delivered on time
        </p>
      </div>
    </div>
  );
};

export default Highlights;
