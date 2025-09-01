import { useEffect, useState } from "react";

const GITHUB_USERNAME = "badriyassine";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // from .env

export const useContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }`;

      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await res.json();
        // Flatten weeks into a single array
        const days = data.data.user.contributionsCollection.contributionCalendar.weeks
          .flatMap(week => week.contributionDays);

        setContributions(days);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      }
    };

    fetchContributions();
  }, []);

  return contributions;
};
