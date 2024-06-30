import React from 'react';

const Contact = () => {
  return (
    <div className="mt-20 max-w-4xl mx-auto">
      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact Me</h2>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="bg-purple-600 bg-opacity-75 rounded-lg shadow-lg p-6">
          <p className="text-3xl font-bold text-white mb-4">Under Construction</p>
          <p className="text-lg text-gray-200">
            We are currently working on improving our contact options. Please check back later or reach out through other means.
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
    </div>
  );
}

export default Contact;
