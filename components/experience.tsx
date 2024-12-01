const Experiences = () => {
  return (
    <div>
      <h2>Experiences</h2>
      <div>
        <h3>S7Works — Hyderabad, Telangana (remote)</h3>
        <h3>Frontend developer(intern) — 09/2021 - 04/2022</h3>
        <ul>
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
      <div>
        <h3>100XSpace — Kanpur (remote)</h3>
        <h3>Frontend Developer Intern — 05/2022 - 05/2023</h3>
        <ul>
          <li>
            Led the development of a complex Option Trading Dashboard using
            React.js and Redux Toolkit, featuring real-time price updates and
            interactive charts, resulting in a 35% increase in daily active
            users and 45% longer session duration
          </li>
          <li>
            Engineered high-performance data visualization components using
            Recharts and D3.js,
          </li>
          <li>
            Implemented Socket.IO for live market data streaming, ensuring
            real-time price accuracy for critical trading operations
          </li>
          <li>
            Developed a robust backend using Node.js, Express, and MongoDB for
            handling the rest api’s to be used trading dashboard
          </li>
          <li>
            implemented a secure JWT-based authentication system with refresh
            token rotation, preventing unauthorized access attempts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
