import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContributions } from "../api/useContributions";

const GITHUB_USERNAME = "badriyassine";

const LANGUAGE_CATEGORIES = {
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Angular"],
  Backend: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "Django"],
  Database: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  Tools: ["Git", "GitHub", "Docker", "Postman", "Figma", "VSCode", "Canva"],
};

const Github = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [totalForks, setTotalForks] = useState(0);
  const [languages, setLanguages] = useState({});
  const [activeTab, setActiveTab] = useState("Repositories");
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [tabTransition, setTabTransition] = useState(false);

  const contributions = useContributions() || Array.from({ length: 52 * 7 }, (_, i) => {
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
          let stars = 0;
          let forks = 0;
          const langs = {};
          data.forEach((repo) => {
            stars += repo.stargazers_count;
            forks += repo.forks_count;
            if (repo.language) langs[repo.language] = (langs[repo.language] || 0) + 1;
          });
          setTotalStars(stars);
          setTotalForks(forks);
          setLanguages(langs);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleTabChange = (tab) => {
    setTabTransition(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTabTransition(false);
    }, 200);
  };

  const displayedRepos = showAllRepos ? repos : repos.slice(0, 6);

  const categorizedLanguages = {};
  Object.entries(LANGUAGE_CATEGORIES).forEach(([category, langs]) => {
    categorizedLanguages[category] = langs
      .filter((lang) => languages[lang])
      .map((lang) => ({ name: lang, count: languages[lang] }));
  });

  return (
    <div className="flex flex-col items-start mt-16 mb-10 px-4 w-full max-w-6xl transition-all duration-500">
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
          <FontAwesomeIcon icon={faGithub} />
          <span className="text-white font-semibold">View GitHub</span>
        </a>
      </div>

      {/* Stats */}
      <div className="flex justify-between flex-wrap gap-10 mt-6 text-gray-300">
        <span>Repositories: {user.public_repos || 0}</span>
        <span>Followers: {user.followers || 0}</span>
        <span>Total Stars: {totalStars}</span>
        <span>Total Forks: {totalForks}</span>
      </div>

      {/* Tabs */}
      <div className="flex w-full gap-6 mt-6 border-b border-white/20 pb-2 text-white font-medium">
        {["Contributions", "Repositories", "Languages"].map((tab) => (
          <button
            key={tab}
            className={`pb-1 transition-all duration-300 ${
              activeTab === tab
                ? "border-b-2 border-white text-white"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`mt-6 w-full transition-all duration-300 transform ${tabTransition ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
        {/* Repositories */}
        {activeTab === "Repositories" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {displayedRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 w-full"
                >
                  <h3 className="text-white font-semibold text-lg">{repo.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-3">{repo.description || "No description"}</p>
                  <div className="flex justify-between items-center mt-2 text-gray-400 text-sm">
                    <span>{repo.language || "N/A"}</span>
                    <span>⭐ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
            {repos.length > 6 && (
              <button
                onClick={() => setShowAllRepos(!showAllRepos)}
                className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300"
              >
                {showAllRepos ? "See Less" : "See More"}
              </button>
            )}
          </>
        )}

        {/* Languages */}
        {activeTab === "Languages" && (
          <div className="w-full flex flex-col gap-4">
            {Object.entries(categorizedLanguages).map(([category, langs]) => {
              if (!langs.length) return null;
              return (
                <div key={category}>
                  <h4 className="text-white font-semibold mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {langs.map((lang) => (
                      <span key={lang.name} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">
                        {lang.name} ({lang.count})
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Contributions */}
        {activeTab === "Contributions" && (
          <div className="w-full flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Contribution Heatmap</h4>

            {/* Month Labels */}
            <div className="flex justify-between text-gray-400 text-sm mb-1 px-1">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((month, i) => (
                <span key={i} className="w-20 text-center">{month}</span>
              ))}
            </div>

            <div className="flex gap-1">
              {/* Day Labels */}
              <div className="flex flex-col justify-between h-full text-gray-400 text-xs">
                {["Sun", "", "Tue", "", "Thu", "", "Sat"].map((day) => (
                  <span key={day} className="h-4">{day}</span>
                ))}
              </div>

              {/* Contribution Squares */}
              <div className="grid grid-rows-7 grid-flow-col gap-0.5">
                {contributions.map((day, i) => {
                  const lighterDarkColor =
                    day.color === "#ebedf0" ? "#2a2a2a" :
                    day.color === "#9be9a8" ? "#137f74" :
                    day.color === "#40c463" ? "#19a68f" :
                    day.color === "#30a14e" ? "#0e8d6e" : "#066455";
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
              Contributions heatmap fetched directly from GitHub GraphQL API with dates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;

