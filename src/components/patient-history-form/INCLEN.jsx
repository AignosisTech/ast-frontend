import React, {  useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'; 
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';


const INCLEN = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [responses, setResponses] = useState([]);  // Assuming you're collecting responses here.
//   const dataCollectionMode = ["ISAA", "CARS"];  // Example, replace with your actual data
const { dataCollectionMode } = location.state || { dataCollectionMode: [] };
    console.log(dataCollectionMode);

    useEffect(() => {
        // Push initial state to prevent default navigation
        window.history.pushState(null, null, window.location.href);
      
        const handleBackButton = () => {
          navigate("/test/fillup"); // Redirect to fillup on back press
        };
      
        // Listen for the popstate event
        window.addEventListener("popstate", handleBackButton);
      
        // Cleanup the listener on unmount
        return () => {
          window.removeEventListener("popstate", handleBackButton);
        };
      }, [navigate]);
  const handleNext = (e) => {
    e.preventDefault();

    // Check if the array is empty
    if (dataCollectionMode.length === 0) {
      navigate('/patienthistory');  // Navigate to PatientHistory.jsx if the array is empty
    } else {
      try {
        // Logic to navigate based on dataCollectionMode
        if (dataCollectionMode.includes('ISAA')) {
            
            navigate('/ISAA', { state: { dataCollectionMode } });  // Navigate to ISAA page if ISAA is in the array
        } else if (dataCollectionMode.includes('CARS')) {
            navigate('/CARS', { state: { dataCollectionMode } });  // Navigate to CARS page if CARS is in the array
        } else {
          navigate('/patienthistory');  // Navigate to PatientHistory if neither ISAA nor CARS is in the array
        }
      } catch (error) {
        console.error('Error during navigation:', error);
        // Optionally, display an error message to the user
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Section */}
      <center>
      <div style={styles.sidebar}>
        <h1 style={styles.logo}>Ai.gnosis</h1>
        <div style={styles.sidebarContent}>
          <h2 style={styles.sidebarTitle}>INCLEN Diagnostic Tool</h2>
          <p style={styles.sidebarDescription}>
            A structured diagnostic tool designed to assess autism spectrum disorder (ASD) in children aged 2-9 years, focusing on social interaction, communication, restricted interests, and repetitive behaviors through caregiver responses and clinical observations.
          </p>
          <p style={styles.sidebarDetails}>
            It incorporates caregiver input, clinician observations, and context-specific questions to identify symptoms and support diagnostic accuracy.
            This tool is designed to be culturally adaptable, age-appropriate, and effective in differentiating autism-related behaviors from typical developmental variations.
          </p>
        </div>
      </div>
      

      {/* Form Section */}
      <div style={styles.formContainer}>
        {/* <h2 style={styles.formTitle}>INCLEN Diagnostic Tool</h2> */}
        
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
              // Social Interaction Section (A1)
              "Does your child usually enjoy being taken in the lap or hugged? (For children aged less than 4 years)",
              "When your child was a baby/toddler, did he/she enjoy being taken in the lap or hugged? (For children aged 4 years or more)",
              "Does your child usually make eye contact with you or other people? (E.g., while playing, asking for things, or talking to you)",
              "Does your child usually use various gestures appropriately during social interactions? (E.g., Namaste, Salaam, waving bye-bye, hello, touching feet, etc.)",
              "Does your child usually show appropriate facial expressions according to the situation? (E.g., being happy, sad, afraid, etc.)",
              "Does your child usually enjoy the company of other children?",
              "Does your child have friends of his/her age (in school or neighborhood) with whom he/she loves to chat, share food, or play together? (For children aged 4 years or more)",
              "Does your child play mostly with children who are much older or much younger than him/her? (For children aged 4 years or more)",
              "Does your child ever point with his/her index finger to bring your attention to show the things that interest him/her? (E.g., kite, plane flying, cow, etc.) (For children aged less than 4 years)",
              "Does your child bring things to show you on his/her own that he/she has made, painted, or a new toy/gift? (For children aged 4 years or more)",
              "Does your child talk to you about things he/she likes or has achieved without being asked? (For children aged 4 years or more and able to speak)",
              "Does your child usually prefer to play alone and gets irritated or moves away when his/her siblings or other kids try to play with him/her?",
              "Does your child play games involving turn-taking or rule-based games with other children properly? (E.g., Cricket, Hide and Seek, Ludo, etc.)",
              "Does your child usually share his/her happiness with you or come to you for comfort when hurt or upset?",
              "Does your child usually share your happiness or try to comfort you when you are upset/sad? (For children aged 4 years or more)",
              
              // Communication Section (A2)
              "Does your child speak normally for his/her age? (If not, can he/she communicate with you using gestures? E.g., pointing, nodding, or shaking head for yes/no)",
              "Does your child initiate a conversation with you?",
              "Can you have a conversation with your child during which he/she not only answers your questions but also adds something new to continue the conversation? (For children aged 4 years or more)",
              "Does your child usually repeat words or phrases (immediate echolalia)? (E.g., repeating 'What is your name?' after hearing it)",
              "Does your child incessantly repeat things or dialogues regardless of context (delayed echolalia)?",
              "Does your child use 'I for me' and 'me for you' incorrectly? (For children aged 4 years or more)",
              "During conversation, does your child often speak out of context or irrelevantly? (For children aged 4 years or more)",
              "Does your child understand jokes or when someone is making fun of him/her? (For children aged 6 years or more)",
              "Does your child participate in social games like “Pat-a-cake,” “Peek-a-boo,” etc.?",
              "Does your child engage in imaginative play with toys? (E.g., kitchen set, dolls, toy guns, etc.)",
              "Does your child play pretend games like “ghar-ghar,” “teacher-student,” etc.)",
              
              // Restricted Interests and Repetitive Behaviors Section (A3)
              "Does your child have excessive interest in odd things or activities? (E.g., collecting wrappers, strings, etc.)",
              "Does your child have excessive interest in typical activities that interfere with daily life? (Exclude TV watching)",
              "Does your child excessively line up or stack objects/toys (excluding blocks)?",
              "Does your child unreasonably insist on doing things in a particular way or get upset if there is a change in routine? (E.g., taking the same route to school or insisting on food being served the same way)",
              "Does your child keep repeating behaviors like hand flapping, toe walking, rocking, etc.?",
              "Does your child have inappropriate fascination with moving objects? (E.g., spinning wheels, running water, electric fans, etc.)",
              "Does your child prefer to play with a specific part of a toy/object rather than the whole? (E.g., wheels of a toy car)"
            ].map((question, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{question}</td>
                <td style={styles.radioCell}>
                  <input type="radio" name={`question${index}`} value="yes" style={styles.radio} />
                </td>
                <td style={styles.radioCell}>
                  <input type="radio" name={`question${index}`} value="no" style={styles.radio} />
                </td>
                <td style={styles.radioCell}>
                  <input type="radio" name={`question${index}`} value="maybe" style={styles.radio} />
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
      </center>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    // display: 'flex',
    // height: '100vh',
    backgroundColor: '#1e0a2d',
    color: '#e6e6e6',
    fontFamily: 'Montserrat, sans-serif',
    padding: '2rem',
    
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#1e0a2d',
    padding: '2rem',
    color: '#e6e6e6',
    width : '70vw',
    textJustify : 'auto',
  },
  logo: {
    fontSize: '2rem',
    color: '#f7aef8',
  },
  sidebarContent: {
    marginTop: '2rem',
  },
  sidebarTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  sidebarDescription: {
    marginTop: '1rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    textAlign: 'justify',
  },
  sidebarDetails: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    lineHeight: '1.5',
    textAlign: 'justify',
  },
  progress: {
    marginTop: '2rem',
    fontSize: '1.2rem',
  },
  progressStep: {
    color: '#e6e6e6',
    fontWeight: 'bold',
  },
  activeStep: {
    color: '#f7aef8',
    border: '2px solid #f7aef8',
    borderRadius: '50%',
    padding: '0.2rem 0.6rem',
  },
  formContainer: {
    flex: 2,
    padding: '2rem',
    backgroundColor: '#26173e',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '2rem',
    minHeight: '130vh',
    width: '80vw',
  },
  formTitle: {
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '2rem',
  },
  tableHeader: {
    borderBottom: '2px solid #f7aef8',
    padding: '0.5rem',
    textAlign: 'left',
  },
  tableCell: {
    padding: '0.5rem',
    borderBottom: '1px solid #ccc',
  },
  radioCell: {
    borderLeft: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
    textAlign: 'center',
  },
  radio: {
    accentColor: '#f7aef8',
    marginRight: '0.5rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  nextButton: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#4d0076',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  iconContainer: {
    marginLeft: '0.5rem',
  },
  icon: {
    fontSize: '1rem',
  },
};

export default INCLEN;
