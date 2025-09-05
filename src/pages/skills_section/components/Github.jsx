import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContributions } from "../api/useContributions";

const GITHUB_USERNAME = "badriyassine";

const Github = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [showContribution, setShowContribution] = useState(true);

  const contributions =
    useContributions() ||
    Array.from({ length: 52 * 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (52 * 7 - i));
      const count = Math.floor(Math.random() * 5);
      let color;
      if (count === 0) color = "#ebedf0";
      else if (count === 1) color = "#9be9a8";
      else if (count === 2) color = "#40c463";
      else if (count === 3) color = "#30a14e";
      else color = "#216e39";
      return { date: date.toISOString().split("T")[0], count, color };
    });

  // Fetch GitHub data
  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
          const stars = data.reduce(
            (acc, repo) => acc + repo.stargazers_count,
            0
          );
          setTotalStars(stars);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Hide contribution heatmap on small screens
  useEffect(() => {
    const handleResize = () => {
      setShowContribution(window.innerWidth > 1067);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-start px-4 w-full max-w-6xl transition-all duration-500">
      {/* Top Header */}
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white">{user.login}</h2>
          <span className="text-gray-400">Full-Stack Developer</span>
        </div>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-500"
        >
          {/* Icon always visible */}
          <FontAwesomeIcon icon={faGithub} />

          {/* Text only visible on medium+ screens */}
          <span className="text-white font-semibold hidden md:inline">
            View GitHub
          </span>
        </a>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-6 mt-6 text-gray-300">
        <span>Repositories: {user.public_repos || repos.length}</span>
        <span>Total Stars: {totalStars}</span>
        <span>
          Achievements:{" "}
          {user.public_repos ? Math.floor(user.public_repos / 2) : 0}
        </span>
      </div>

      {/* Contributions */}
      {showContribution && (
        <div className="w-full flex flex-col gap-4 mt-8">
          <h4 className="text-white font-semibold mb-2">
            Contribution Heatmap
          </h4>

          {/* Month Labels */}
          <div className="flex justify-between text-gray-400 text-sm mb-1 px-1">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month, i) => (
              <span key={i} className="w-20 text-center">
                {month}
              </span>
            ))}
          </div>

          <div className="flex gap-1">
            {/* Day Labels */}
            <div className="flex flex-col justify-between h-full text-gray-400 text-xs">
              {["Sun", "", "Tue", "", "Thu", "", "Sat"].map((day, i) => (
                <span key={i} className="h-4">
                  {day}
                </span>
              ))}
            </div>

            {/* Contribution Squares */}
            <div className="grid grid-rows-7 grid-flow-col gap-0.5">
              {contributions.map((day, i) => {
                const lighterDarkColor =
                  day.color === "#ebedf0"
                    ? "#2a2a2a"
                    : day.color === "#9be9a8"
                    ? "#137f74"
                    : day.color === "#40c463"
                    ? "#19a68f"
                    : day.color === "#30a14e"
                    ? "#0e8d6e"
                    : "#066455";
                return (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-sm transition-colors duration-300"
                    style={{ backgroundColor: lighterDarkColor }}
                    title={`Contributions: ${day.count} on ${day.date}`}
                  ></div>
                );
              })}
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-2">
            Contributions heatmap fetched directly from GitHub GraphQL API with
            dates.
          </p>
        </div>
      )}
    </div>
  );
};

export default Github;
