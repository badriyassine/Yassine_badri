import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GITHUB_USERNAME = "badriyassine"; // Replace with your username

const Github = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Fetch GitHub repos (latest 6)
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center mt-16 px-4 w-full">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white text-center">
        My GitHub
      </h2>
      <p className="text-gray-400 text-center mt-2 max-w-xl">
        Check out my projects, repositories, and contributions on GitHub.
      </p>

      {/* GitHub Link */}
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <span className="text-white font-semibold text-lg">
          Visit My GitHub
        </span>
      </a>

      {/* Repos Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            <h3 className="text-white font-semibold text-lg">{repo.name}</h3>
            <p className="text-gray-400 text-sm mt-1 line-clamp-3">
              {repo.description || "No description provided"}
            </p>
            <div className="flex justify-between items-center mt-2 text-gray-400 text-sm">
              <span>{repo.language || "N/A"}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Github;

