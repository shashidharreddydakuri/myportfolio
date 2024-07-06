import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Portfolio.css";

const skillsData = [
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "React", level: 75 },
  { name: "AWS", level: 70 },
];

const SkillsChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={skillsData} layout="vertical">
      <XAxis type="number" domain={[0, 100]} />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Bar dataKey="level" fill="#64ffda" />
    </BarChart>
  </ResponsiveContainer>
);

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <header>
        <nav>
          <a href="#profile">Profile</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero">
          <h1>Raja Shashidhar Reddy Dakuri</h1>
          <p>Backend Developer</p>
        </div>
      </header>

      <main>
        <section
          id="profile"
          className={`fade-in ${isVisible.profile ? "is-visible" : ""}`}
        >
          <h2>Profile</h2>
          <p>
            Backend Developer with 3 years of hands-on experience designing,
            developing, and implementing applications and solutions using a
            range of technologies and programming languages. Seeking to grasp
            broad development experience and hands-on technical expertise in a
            challenging role as a Backend Developer.
          </p>
        </section>

        <section
          id="skills"
          className={`fade-in ${isVisible.skills ? "is-visible" : ""}`}
        >
          <h2>Skills</h2>
          <SkillsChart />
        </section>

        <section
          id="experience"
          className={`fade-in ${isVisible.experience ? "is-visible" : ""}`}
        >
          <h2>Experience</h2>
          <div className="timeline">
            <div className="job">
              <h3>Software Developer</h3>
              <p className="company">
                Gaido Technologies Private Ltd., Hyderabad
              </p>
              <p className="date">January 2023 - Present</p>
              <ul>
                <li>
                  Developed and maintained scalable web applications using
                  Node.js and Express.js Framework.
                </li>
                <li>Maintained Frontend application with ReactJs.</li>
                <li>
                  Developed APIs for third-party users and created security for
                  APIs.
                </li>
                <li>Integrated AWS SES, mailtrap for email service.</li>
              </ul>
            </div>
            <div className="job">
              <h3>Fullstack Developer</h3>
              <p className="company">
                Heptaberg Technologies Private Limited, Hyderabad
              </p>
              <p className="date">January 2021 - January 2022</p>
              <ul>
                <li>
                  Developed and maintained scalable web applications using
                  Node.js and Express.js Framework.
                </li>
                <li>Maintained Frontend application with ReactJs.</li>
                <li>
                  Implemented backend APIs with express.js, enhancing API
                  security and postman API documentation.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`fade-in ${isVisible.projects ? "is-visible" : ""}`}
        >
          <h2>Projects</h2>
          <div className="project">
            <h3>Automatic Number Plate Recognition (ANPR) System</h3>
            <p>
              Developed an efficient ANPR system using Express.js as the
              Back-end framework. This project involved the integration of
              cutting-edge computer vision and image processing techniques for
              real-time license plate recognition.
            </p>
            <ul>
              <li>
                Utilized express.js to create APIs for the ANPR system,
                providing seamless integration of data.
              </li>
              <li>
                Collaborated with the front-end team to integrate the JSON
                response format with the server-side logic.
              </li>
              <li>
                Implemented user authentication and authorization features to
                secure access to the ANPR system.
              </li>
              <li>
                Optimized the Back-end codebase for performance, ensuring quick
                and efficient data management.
              </li>
              <li>Developed APIs for third-party users.</li>
              <li>
                Performed analytics of vehicles in and out per day for different
                tenants and generated reports of parking duration using
                PostgreSQL CTEs.
              </li>
            </ul>
            <p className="tech-stack">
              Technologies Used: Node.js, Express.js, JavaScript, RESTful APIs,
              Pusher, node-PostgreSQL, React.js
            </p>
          </div>
          <div className="project">
            <h3>
              Radio Frequency Identification System (RFID Tag Base System)
            </h3>
            <p>
              Designed and implemented an advanced RFID-based access control
              system. The system enables access to predefined areas by
              authenticating RFID tags against a centralized application,
              seamlessly interfacing with a physical boom barrier.
            </p>
            <ul>
              <li>
                Developed a strong understanding of data modeling and
                optimization for efficient RFID tag management.
              </li>
              <li>
                Integrated RFID readers with the application, enabling real-time
                tag authentication and access control decisions.
              </li>
              <li>
                Implemented secure authentication mechanisms to verify RFID tag
                credentials against a centralized database.
              </li>
              <li>
                Collaborated with hardware engineers to integrate RFID readers
                with a physical boom barrier.
              </li>
              <li>
                Designed and implemented a scalable backend system using RESTful
                APIs for tag management.
              </li>
              <li>
                Conducted rigorous testing to ensure reliability and accuracy of
                the RFID authentication process.
              </li>
              <li>
                Documented the system architecture, APIs, and user manuals for
                ease of maintenance and future development.
              </li>
            </ul>
            <p className="tech-stack">
              Technologies Used: Node.js, Express.js, JavaScript, RESTful APIs,
              Socket.IO, React.js
            </p>
          </div>
          <div className="project">
            <h3>Lens Testing Data Management</h3>
            <p>
              Designed and deployed a data management and access system that
              facilitates access to predefined areas based on various parameters
              through a centralized application, seamlessly interfacing with a
              large database.
            </p>
            <ul>
              <li>
                Developed a comprehensive understanding of data modeling and
                optimization to efficiently manage physical machine output data.
              </li>
              <li>
                Integrated multiple test machines with the application to enable
                real-time test data and access control decisions.
              </li>
              <li>
                Implemented secure authentication mechanisms to verify
                user-level access against a centralized database.
              </li>
              <li>
                Designed and deployed a scalable backend system utilizing
                RESTful APIs to manage registration, authentication, and access
                logs.
              </li>
              <li>
                Documented the system architecture, APIs, and user manuals to
                facilitate maintenance and future development.
              </li>
            </ul>
            <p className="tech-stack">
              Technologies Used: Node.js, Express.js, JavaScript, RESTful APIs,
              React.js
            </p>
          </div>
        </section>

        <section
          id="contact"
          className={`fade-in ${isVisible.contact ? "is-visible" : ""}`}
        >
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:d.shashidhar1996@gmail.com" className="btn">
              Email
            </a>
            <a href="https://github.com/shashidharreddydakuri" className="btn">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shashidharreddydakuri/"
              className="btn"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Shashidhar Reddy Dakuri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
