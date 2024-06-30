import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch projects data from GitHub or an API
    // Example using GitHub API (replace with your actual GitHub username or API endpoint):
    fetch('https://api.github.com/users/your-username/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Render loading state while fetching data
  if (loading) {
    return (
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  // Render error message if fetch fails
  if (error) {
    return (
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <p className="text-xl text-red-600">Failed to load projects. Please try again later.</p>
      </div>
    );
  }

  // Render projects if available
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Projects</h2>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {projects.length > 0 ? (
          <ul className="divide-y divide-gray-300">
            {projects.map(project => (
              <li key={project.id} className="py-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-semibold text-blue-600 hover:underline"
                >
                  {project.name}
                </a>
                <p className="text-lg text-gray-700">{project.description}</p>
                <p className="mt-2 text-sm text-gray-500">Language: {project.language}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <div className="bg-purple-600 bg-opacity-75 rounded-lg shadow-lg p-6">
              <p className="text-3xl font-bold text-white mb-4">Under Construction</p>
              <p className="text-lg text-gray-200">
                We are currently working on bringing you more exciting projects. Please check back later.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-purple-700 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 3.293a1 1 0 00-1.414 0L2.293 9.293a1 1 0 000 1.414l6.293 6.293a1 1 0 001.414-1.414L5.414 10 9.707 5.707a1 1 0 000-1.414zM16 15a1 1 0 010 2H4a1 1 0 010-2h12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
