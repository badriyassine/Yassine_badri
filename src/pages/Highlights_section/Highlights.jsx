import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Highlights = () => {
  return (
    <div className="flex items-center justify-center mt-10 gap-38 py-20 flex-wrap">
      {/* Highlight 1 */}
      <div className="flex flex-col items-center gap-2">
        <FontAwesomeIcon icon={faUsers} size="2x" />
        <h4 className="font-semibold">Credibility</h4>
        <p className="text-gray-400 text-center text-sm">
          Reliable and trustworthy
        </p>
      </div>

      {/* Divider */}
      <div className="w-3 h-3 bg-white rounded-full"></div>

      {/* Highlight 2 */}
      <div className="flex flex-col items-center gap-2">
        <FontAwesomeIcon icon={faUsers} size="2x" />
        <h4 className="font-semibold">Security</h4>
        <p className="text-gray-400 text-center text-sm">
          Safe and secure solutions
        </p>
      </div>

      {/* Divider */}
      <div className="w-3 h-3 bg-white rounded-full"></div>

      {/* Highlight 3 */}
      <div className="flex flex-col items-center gap-2">
        <FontAwesomeIcon icon={faUsers} size="2x" />
        <h4 className="font-semibold">Time Delivery</h4>
        <p className="text-gray-400 text-center text-sm">
          Projects delivered on time
        </p>
      </div>
    </div>
  );
};

export default Highlights;
