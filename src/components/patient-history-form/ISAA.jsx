import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AppContext } from "../../AppContext";


const ISAA = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isaaFormData, setIsaaFormData] = useState({});

  const {testData, setTestData} = useContext(AppContext);

  const [questions, ] = useState([
    "Has poor eye contact",
    "Lacks social smile",
    "Remains aloof",
    "Does not reach out to others",
    "Unable to relate to people",
    "Unable to respond to social/ environmental cues",
    "Engages in solitary and repetitive play activities",
    "Unable to take turns in social interaction",
    "Does not maintain peer relationships",
    "Shows inappropriate emotional response",
    "Shows exaggerated emotions",
    "Engages in self-stimulating emotions",
    "Lacks fear of danger",
    "Excited or agitated for no apparent reason",
    "Acquired speech and lost it",
    "Has difficulty in using non-verbal language or gestures to communicate",
    "Engages in stereotyped and repetitive use of language",
    "Engages in echolalic speech",
    "Produces infantile squeals/ unusual noises",
    "Unable to initiate or sustain conversation with others",
    "Uses jargon or meaningless words",
    "Uses pronoun reversals",
    "Unable to grasp pragmatics of communication (real meaning)",
    "Engages in stereotyped and repetitive motor mannerisms",
    "Shows attachment to inanimate objects",
    "Shows hyperactivity/ restlessness",
    "Exhibits aggressive behavior",
    "Throws temper tantrums",
    "Engages in self-injurious behavior",
    "Insists on sameness",
    "Unusually sensitive to sensory stimuli",
    "Stares into space for long periods of time",
    "Has difficulty in tracking objects",
    "Has unusual vision",
    "Insensitive to pain",
    "Responds to objects/people unusually by smelling, touching or tasting",
    "Inconsistent attention and concentration",
    "Shows delay in responding",
    "Has unusual memory of some kind",
    "Has 'savant' ability",
  ]);
  const handleBackClick = () => {
    if (testData.dataCollectionMode.includes('INCLEN')) {
      // Redirect to INCLEN if dataCollectionMode contains INCLEN
      navigate('/INCLEN');
    } else {
      // Handle the back functionality in other cases, e.g., going back to the previous page
      navigate('/Error');
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    console.log('inclen is', testData.inclenFormData);
    console.log('isaa form data is ', isaaFormData);
    const calculateScore = () => {
      let totalScore = 0;
      for (const key in isaaFormData) {
        const value = parseInt(isaaFormData[key], 10);
        if (!isNaN(value)) {
          totalScore += value;
        }
      }
      return totalScore;
    };
  
    const totalScore = calculateScore();
    console.log('Total ISAA Score:', totalScore);
  

    try {
      // Add any validation or data processing here before navigation
      // For example, you could collect form data here and validate i
      // 
      setTestData({
        ...testData,
        isaaFormData: isaaFormData,
        isaascore: totalScore, // Store the score in testData for later use

      });

      // Check if 'CARS' is in the testData.dataCollectionMode array
      if (testData.dataCollectionMode.includes("CARS")) {
        // Navigate to /CARS if CARS is present in the array
        navigate("/CARS");
      } else {
        // Navigate to /patienthistory if CARS is not present
        navigate("/patienthistory");
      }
    } catch (error) {
      console.error("Error during navigation:", error);
      // Optionally, display an error message to the user
    }
  };

  var index = 0;
  useEffect(() => {
    questions.map((question) => {
      if (index != questions.length - 1) {
        isaaFormData[index] = "";
        index++;
      }
    });
    console.log(isaaFormData);
  }, []);

  return (
    <div style={styles.container}>
      {/* Sidebar Section */}
      <center>
        <div style={styles.sidebar}>
          <h1 style={styles.logo}>Ai.gnosis</h1>
          <div style={styles.sidebarContent}>
            <h2 style={styles.sidebarTitle}>
              INDIAN SCALE FOR ASSESSMENT OF AUTISM
            </h2>
            <p style={styles.sidebarDescription}>
              ISAA is an objective assessment tool for persons with autism which
              uses observation, clinical evaluation of behaviour, testing by
              interaction with the subject and also information supplemented by
              parents or caretakers in order to diagnose autism.
            </p>
            <p style={styles.sidebarDetails}>
              Directions: Below are given 40 statements which are divided under
              six domains, please select the appropriate rating for each item of
              the scale by observing the child and by interviewing the parents
              in order to assess Autism.
            </p>
          </div>
        </div>
        <h3 className="font-semibold mb-2 text-sm text-white">
          Fill Google Form Instead? <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_dXebCWKaocA7KpAxWJAyHGfEwsqiDvAgXk0tj4ZQa0bYhg/viewform">click here</a>
        </h3> 
      </center>
      
      {/* Form Section */}
      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>INDIAN SCALE FOR ASSESSMENT OF AUTISM</h2>

        {/* Additional Patient Information */}

        {[
          {
            title: "SOCIAL RELATIONSHIP AND RECIPROCITY",
            start: 1,
            end: 9,
            questions: [
              "Has poor eye contact",
              "Lacks social smile",
              "Remains aloof",
              "Does not reach out to others",
              "Unable to relate to people",
              "Unable to respond to social/ environmental cues",
              "Engages in solitary and repetitive play activities",
              "Unable to take turns in social interaction",
              "Does not maintain peer relationships",
            ],
          },
          {
            title: "EMOTIONAL RESPONSIVENESS",
            start: 10,
            end: 14,
            questions: [
              "Shows inappropriate emotional response",
              "Shows exaggerated emotions",
              "Engages in self-stimulating emotions",
              "Lacks fear of danger",
              "Excited or agitated for no apparent reason",
            ],
          },
          {
            title: "SPEECH-LANGUAGE AND COMMUNICATION",
            start: 15,
            end: 23,
            questions: [
              "Acquired speech and lost it",
              "Has difficulty in using non-verbal language or gestures to communicate",
              "Engages in stereotyped and repetitive use of language",
              "Engages in echolalic speech",
              "Produces infantile squeals/ unusual noises",
              "Unable to initiate or sustain conversation with others",
              "Uses jargon or meaningless words",
              "Uses pronoun reversals",
              "Unable to grasp pragmatics of communication (real meaning)",
            ],
          },
          {
            title: "BEHAVIOUR PATTERNS",
            start: 24,
            end: 30,
            questions: [
              "Engages in stereotyped and repetitive motor mannerisms",
              "Shows attachment to inanimate objects",
              "Shows hyperactivity/ restlessness",
              "Exhibits aggressive behavior",
              "Throws temper tantrums",
              "Engages in self-injurious behavior",
              "Insists on sameness",
            ],
          },
          {
            title: "SENSORY ASPECTS",
            start: 31,
            end: 36,
            questions: [
              "Unusually sensitive to sensory stimuli",
              "Stares into space for long periods of time",
              "Has difficulty in tracking objects",
              "Has unusual vision",
              "Insensitive to pain",
              "Responds to objects/people unusually by smelling, touching or tasting",
            ],
          },
          {
            title: "COGNITIVE COMPONENT",
            start: 37,
            end: 40,
            questions: [
              "Inconsistent attention and concentration",
              "Shows delay in responding",
              "Has unusual memory of some kind",
              "Has 'savant' ability",
            ],
          },
        ].map((section, sectionIndex) => (
          <div key={sectionIndex} style={styles.section}>
            <h3 style={styles.sectionTitle}>{section.title}</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Questions</th>
                  <th style={styles.tableHeader}>Rarely (Up-to 20%)</th>
                  <th style={styles.tableHeader}>Sometimes (21-40%)</th>
                  <th style={styles.tableHeader}>Frequently (41-60%)</th>
                  <th style={styles.tableHeader}>Mostly (61-80%)</th>
                  <th style={styles.tableHeader}>Always (81-100%)</th>
                </tr>
              </thead>
              <tbody>
                {section.questions.map((question, index) => (
                  <tr key={index}>
                    <td style={styles.tableCell}>{`${
                      section.start + index
                    }. ${question}`}</td>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <td style={styles.radioCell} key={value}>
                        <input
                          type="radio"
                          name={`question${section.start + index}`}
                          value={value}
                          style={styles.radio}
                          onChange={(e) => {
                            setIsaaFormData((prevData) => ({
                              ...prevData,
                              [section.start + index - 1]: e.target.value,
                            }));

                            console.log(isaaFormData);
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* Centered Next Button */}
        <div style={styles.buttonContainer}>
        <button onClick={handleBackClick} style={styles.nextButton}>
            <div style={styles.iconContainer}>
              <FaArrowLeft style={styles.icon} />
            </div>
            &nbsp;&nbsp;
            <strong>Back</strong>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
    // display: 'flex',
    backgroundColor: "#1e0a2d",
    color: "#e6e6e6",
    fontFamily: "Montserrat, sans-serif",
    padding: "2rem",
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
  formContainer: {
    flex: 2,
    padding: "2rem",
    backgroundColor: "#26173e",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "2rem",
  },
  formTitle: {
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  additionalInfo: {
    marginBottom: "2rem",
  },
  label: {
    display: "block",
    marginBottom: "1rem",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "0.25rem",
    marginTop: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  radioGroup: {
    display: "flex",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  section: {
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
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
    textAlign: "center",
    borderLeft: "1px solid #ccc",
    borderRight: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
  },
  radio: {
    accentColor: "#f7aef8",
    width: "1.5rem", // Adjust size as needed
    height: "1.5rem", // Adjust size as needed
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

export default ISAA;
