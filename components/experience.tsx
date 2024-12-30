const Experiences = () => {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
        Experiences
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transform transition duration-500 hover:scale-105">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
          S7Works — Hyderabad, Telangana (remote)
        </h3>
        <h4 className="text-xl font-medium text-gray-600 mb-4">
          Frontend Developer (Intern) — 09/2021 - 04/2022
        </h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Spearheaded the development of a scalable React.js application using
            modern architectural patterns, implementing code splitting and lazy
            loading techniques that reduced initial load time by 45%
          </li>
          <li>
            Designed and implemented a centralized state management system using
            Redux Toolkit, reducing API calls by 40% and improving application
            performance through efficient caching
          </li>
          <li>
            Built responsive and accessible UI components and achieving 98%
            accessibility score
          </li>
          <li>
            Created a comprehensive JWT authentication system with role-based
            access control, handling 5000+ daily user sessions with zero
            security incidents
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105">
        <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
          100XSpace — Kanpur (remote)
        </h3>
        <h4 className="text-xl font-medium text-gray-600 mb-4">
          Frontend Developer Intern — 05/2022 - 05/2023
        </h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Led the development of a complex Option Trading Dashboard using
            React.js and Redux Toolkit, featuring real-time price updates and
            interactive charts, resulting in a 35% increase in daily active
            users and 45% longer session duration
          </li>
          <li>
            Engineered high-performance data visualization components using
            Recharts and D3.js
          </li>
          <li>
            Implemented Socket.IO for live market data streaming, ensuring
            real-time price accuracy for critical trading operations
          </li>
          <li>
            Developed a robust backend using Node.js, Express, and MongoDB for
            handling the REST APIs to be used in the trading dashboard
          </li>
          <li>
            Implemented a secure JWT-based authentication system with refresh
            token rotation, preventing unauthorized access attempts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
