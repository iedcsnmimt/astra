import React, { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import "./styles/index.scss";
import Alert from "./components/Alert";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");

  const handleLogout = (message, type = "info") => {
    setAlertMsg(message || "Logged out successfully!");
    setAlertSeverity(type);
  };

  useEffect(() => {
    if (alertMsg) {
      const timer = setTimeout(() => {
        setAlertMsg("");
        setAlertSeverity("info");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alertMsg]);

  return (
    <Layout>
      <Alert message={alertMsg} severity={alertSeverity} />
      <AnimatedRoutes handleLogout={handleLogout} />
    </Layout>
  );
}

export default App;
