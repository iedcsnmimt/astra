import React, { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [step, setStep] = useState(1); // Step 1: Initial, Step 2: Confirmation, Step 3: Encouragement, Step 4: Goodbye
  const [agreed, setAgreed] = useState(false);

  const handleYesClick = () => {
    if (agreed) {
      window.location.href = "https://forms.gle/fFCics56YFmoBhXK9"; // Replace with actual Google Form link
    } else {
      alert("Please agree to the terms and conditions before proceeding.");
    }
  };

  const handleNoClick = () => {
    if (step === 1) setStep(2); // Ask "Are you sure?"
    else if (step === 2) setStep(3); // Encourage them
    else setStep(4); // Final Goodbye
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={styles.container}
    >
      {step === 1 && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.card}
        >
          <h2 style={styles.heading}>Are you ready to attend the bootcamp?</h2>

          <a
            href="https://docs.google.com/document/d/1F_SrLhuG91Q_h-W8Xx4qsd-0lcCiQZNnaJvK6_LTMjk/edit?tab=t.0#heading=h.sj2z0lcbgmg9" // Replace with actual Terms & Conditions Google Doc link
            target="_blank"
            rel="noopener noreferrer"
            style={styles.termsLink}
          >
            Read Terms & Conditions
          </a>

          <label style={styles.checkboxContainer}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              style={styles.checkbox}
            />
            <span>I agree to all terms and conditions.</span>
          </label>

          <motion.div
            style={styles.buttonContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={styles.buttonYes}
              onClick={handleYesClick}
            >
              Yes
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={styles.buttonNo}
              onClick={handleNoClick}
            >
              No
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.card}
        >
          <h2 style={styles.heading}>Are you sure you don't want to attend?</h2>

          <motion.div style={styles.buttonContainer}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={styles.buttonYes}
              onClick={handleNoClick}
            >
              Yes, I'm sure
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={styles.buttonNo}
              onClick={() => setStep(1)}
            >
              No, I'll join
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.card}
        >
          <h2 style={styles.heading}>Come on! You must like this! 🎉</h2>

          <motion.div style={styles.buttonContainer}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={styles.buttonYes}
              onClick={() => setStep(1)}
            >
              Okay, I'll join!
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={styles.buttonNo}
              onClick={handleNoClick}
            >
              No, really, I'm out
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={styles.goodbye}
        >
          Goodbye! Bye-bye 👋
        </motion.h3>
      )}
    </motion.div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "15px",
    color: "#333",
  },
  termsLink: {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: "10px",
    display: "inline-block",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
    fontSize: "14px",
  },
  checkbox: {
    transform: "scale(1.2)",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  buttonYes: {
    padding: "10px 18px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#2ecc71",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  buttonNo: {
    padding: "10px 18px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  goodbye: {
    fontSize: "20px",
    color: "#333",
  },
};

export default Register;
