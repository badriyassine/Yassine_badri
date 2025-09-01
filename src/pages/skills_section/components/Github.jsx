import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GITHUB_USERNAME = "badriyassine";

const Github = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [totalForks, setTotalForks] = useState(0);
  const [languages, setLanguages] = useState({});
  const [activeTab, setActiveTab] = useState("Repositories");
  const [showAllRepos, setShowAllRepos] = useState(false);
  const [tabTransition, setTabTransition] = useState(false);

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
    setTabTransition(true);          // start fade-out
    setTimeout(() => {
      setActiveTab(tab);             // switch tab
      setTabTransition(false);       // fade-in
    }, 200);
  };

  const displayedRepos = showAllRepos ? repos : repos.slice(0, 6);

  return (
    <div className="flex flex-col items-start mt-26 mb-5 px-4 w-full max-w-6xl transition-all duration-500">
      {/* Top Header */}
      <div className="flex justify-between w-full items-center transition-all duration-500">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white transition-all duration-500">{user.login}</h2>
          <span className="text-gray-400 transition-all duration-500">Full-Stack Developer</span>
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
      <div className="flex flex-wrap gap-6 mt-6 text-gray-300 transition-all duration-500">
        <span>Repos: {user.public_repos || 0}</span>
        <span>Followers: {user.followers || 0}</span>
        <span>Total Stars: {totalStars}</span>
        <span>Total Forks: {totalForks}</span>
      </div>

      {/* Nav */}
      <div className="flex gap-6 mt-6 border-b border-white/20 pb-2 text-white font-medium transition-all duration-500">
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

      {/* Tab Content with Smooth Transition */}
      <div
        className={`mt-6 w-full transition-all duration-300 transform ${
          tabTransition ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
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
                  <h3 className="text-white font-semibold text-lg transition-all duration-300">{repo.name}</h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-3 transition-all duration-300">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex justify-between items-center mt-2 text-gray-400 text-sm transition-all duration-300">
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

        {activeTab === "Languages" && (
          <div className="flex flex-wrap gap-2 transition-all duration-500 w-full">
            {Object.keys(languages).map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm transition-all duration-300"
              >
                {lang} ({languages[lang]})
              </span>
            ))}
          </div>
        )}

        {activeTab === "Contributions" && (
          <div className="text-gray-300 transition-all duration-500 w-full">
            <p>Total Contributions (Stars as proxy): {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}</p>
            <p>Current streak / Longest streak requires GitHub GraphQL API</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;





