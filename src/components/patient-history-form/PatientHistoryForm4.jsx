import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { AppContext } from "../../AppContext";

const PatientHistoryForm4 = () => {
  const navigate = useNavigate();

  const { testData } = useContext(AppContext);

  const handleNext = (e) => {
    e.preventDefault();
    try {
      // Add any validation or data processing here before navigation
      // For example, you could collect form data here and validate it

      axios({
        method: "POST",
        url: "https://35.207.211.80/rest/send_ast_form_data/",
        data: JSON.stringify(testData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => console.log(response))
        .catch((err) => {
          console.log("Error sending form data to server", err);
          // TODO: handle error, redirect to take assignment page
        });

      // Navigate to the final submission page or the next form
      // Change to your final route
      navigate("/download");
    } catch (error) {
      console.error("Error during navigation:", error);
      // Optionally, display an error message to the user
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Section */}
      <div style={styles.sidebar}>
        <h1 style={styles.logo}>Ai.gnosis</h1>
        <div style={styles.sidebarContent}>
          <h2 style={styles.sidebarTitle}>Patient History</h2>
          <p style={styles.sidebarDescription}>
            Our Patient History form gathers essential information to better
            understand each individual's unique background and health journey.
          </p>
          <p style={styles.sidebarDetails}>
            This information is critical for our AI-powered tool, Ai.gnosis, to
            generate accurate insights and personalized recommendations in
            support of a patient’s growth and development. It provides valuable
            insights, enabling our interdisciplinary teams to create a
            comprehensive support plan tailored to your needs.
          </p>
          <div style={styles.progress}>
            <span style={styles.progressStep}>1</span> →
            <span style={styles.progressStep}>2</span> →
            <span style={styles.progressStep}>3</span> →
            <span style={{ ...styles.progressStep, ...styles.activeStep }}>
              4
            </span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>Patient Service Checklist</h2>

        {/* Checklist Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Questions</th>
              <th style={styles.tableHeader}>Yes</th>
              <th style={styles.tableHeader}>No</th>
              <th style={styles.tableHeader}>Maybe</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Experienced and Licensed Specialists",
              "Weekday and Evening Appointments Available",
              "Resources Provided After Sessions",
              "Regular Progress Updates",
              "Group Art & Story Sessions for Skill Building",
              "Direct Messaging with Specialists",
              "Convenient Scheduling Through Our Portal",
              "Access to Tips and Activities on Our App",
              "No Travel or Waiting Time",
              "EMI Payment Options (for Indian Residents Only)*",
            ].map((question, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{question}</td>
                <td style={styles.radioCell}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value="yes"
                    style={styles.radio}
                  />
                </td>
                <td style={styles.radioCell}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value="no"
                    style={styles.radio}
                  />
                </td>
                <td style={styles.radioCell}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value="maybe"
                    style={styles.radio}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Centered Next Button */}
        <div style={styles.buttonContainer}>
          <button type="submit" onClick={handleNext} style={styles.nextButton}>
            <strong>Next</strong>
            <div style={styles.iconContainer}>
              <FaArrowRight style={styles.icon} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    display: 'flex',
    // height: '100vh',
    backgroundColor: '#1e0a2d',
    color: '#e6e6e6',
    fontFamily: 'Montserrat, sans-serif',
    padding: '2rem',
  },
  sidebar: {
    flex: 1,
    backgroundColor: "#1e0a2d",
    padding: "2rem",
    color: "#e6e6e6",
  },
  logo: {
    fontSize: "2rem",
    color: "#f7aef8",
  },
  sidebarContent: {
    marginTop: "2rem",
  },
  sidebarTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  sidebarDescription: {
    marginTop: "1rem",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  sidebarDetails: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
  progress: {
    marginTop: "2rem",
    fontSize: "1.2rem",
  },
  progressStep: {
    color: "#e6e6e6",
    fontWeight: "bold",
  },
  activeStep: {
    color: "#f7aef8",
    border: "2px solid #f7aef8",
    borderRadius: "50%",
    padding: "0.2rem 0.6rem",
  },
  formContainer: {
    flex: 2,
    padding: "2rem",
    backgroundColor: "#26173e",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "2rem",
    minHeight: "130vh",
  },
  formTitle: {
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "2rem",
  },
  tableHeader: {
    borderBottom: "2px solid #f7aef8",
    padding: "0.5rem",
    textAlign: "left",
  },
  tableCell: {
    padding: "0.5rem",
    borderBottom: "1px solid #ccc",
  },
  radioCell: {
    borderLeft: "1px solid #e6e6e6",
    textAlign: "center",
  },
  radio: {
    accentColor: "#f7aef8",
    marginRight: "0.5rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  nextButton: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    backgroundColor: "#4d0076",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  iconContainer: {
    marginLeft: "0.5rem",
  },
  icon: {
    fontSize: "1rem",
  },
};

export default PatientHistoryForm4;
