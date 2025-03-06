import React from "react";
import { motion } from "framer-motion";
import styles from "./Mentors.module.scss";

const mentors = [
  {
    name: "Chaithanya Raj",
    title: "IEDC NODAL OFFICER -SNMIMT",
    image: "/media/mentors/mentor1.jpeg",
    bio: `
      A dynamic educator and mentor dedicated to fostering innovation and entrepreneurship among students.
      - IEDC Nodal Officer – Driving innovation and startup culture.
      - ED Club Staff Coordinator – Empowering students with entrepreneurial skills.
      - IIC President – Leading institutional innovation initiatives.
      - TinkerHub Staff Coordinator – Promoting hands-on tech learning.
      - PALS ED Coordinator – Enhancing industry-academia collaboration.
      - STRIDE Staff Coordinator – Encouraging research and development.
      - Emerging Tech Expert – Passionate about AI, ML, and cutting-edge technologies.
    `,
  },
  {
    name: "Sreeraj V Rajesh",
    title: "Tech Innovator & Mentor",
    image: "/media/mentors/mentor4.jpeg",
    bio: `
      A visionary leader in technology, embedded systems, and AI, Sreeraj V Rajesh specializes in hardware-software integration and emerging technologies.  
      - TinkerHub SNMIMT Campus Lead – Driving student engagement in tech learning.  
      - IIC Startup Coordinator & Innovation Coordinator – Spearheading startup and innovation initiatives.  
      - Ex-CEO, IEDC SNMIMT – Led startup incubation and entrepreneurial programs.  
      - Tech-Only Expert – Specializing in Embedded Systems, AI, and next-gen hardware/software solutions.  
      - Cybersecurity & Ethical Hacking Enthusiast – Passionate about digital safety and innovation.  
    `,
  }
];

const Mentors = () => {
  return (
    <motion.div
      className={styles.mentorsPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className={styles.header}>
        <h1>Meet Our Mentors</h1>
        <p>Learn from industry experts and grow your skills.</p>
      </header>

      <div className={styles.mentorsGrid}>
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            className={styles.mentorCard}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img src={mentor.image} alt={mentor.name} className={styles.mentorImage} />
              <div className={styles.overlay}>
                <h3>{mentor.name}</h3>
                <p className={styles.mentorTitle}>{mentor.title}</p>
              </div>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.mentorBio}>{mentor.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mentors;
