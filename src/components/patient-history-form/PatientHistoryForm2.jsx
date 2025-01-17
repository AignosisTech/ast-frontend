import React, { useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa'; 
import { AppContext } from "../../AppContext";

const PatientHistoryForm2 = ({ onNext }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    familyType: '',
    language: '',
    otherLanguage: '',
    familyHistory: '',
    otherCondition: '',
    otherFamilyMember: '',
    jaundice: '',
  });
  const {testData, setTestData} = useContext(AppContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    try {
      // Save form data to testData
      console.log(formData);
      console.log("testData:", testData);
      setTestData({
        ...testData,
        patienthistoryform2data: formData,
      });

      onNext(); // Call the parent function to move to the next form
    } catch (error) {
      console.error('Error during navigation:', error); // Log the error
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
            Our Patient History form gathers essential information to better understand
            each individual's unique background and health journey.
          </p>
          <p style={styles.sidebarDetails}>
            This information is collected for our AI-powered tool, Ai.gnosis, to generate
            accurate insights and personalized recommendations in support of a patient’s
            growth and development. It provides valuable insights, enabling our
            interdisciplinary teams to create a comprehensive support plan tailored to your needs.
          </p>
          <div style={styles.progress}>
            <span style={styles.progressStep}>1</span> → 
            <span style={{ ...styles.progressStep, ...styles.circleStep }}>2</span> → 
            <span style={styles.progressStep}>3</span> → 
            <span style={styles.progressStep}>4</span>
          </div>
        </div>
      </div>
      
      {/* Form Section */}
      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>Patient History</h2>
        <p style={styles.formDescription}>
          By completing this form, you provide us with insights into medical history,
          developmental milestones, family health patterns, and previous assessments or
          diagnoses.
        </p>
        <button style={styles.languageButton}>Choose language</button>
        <center>
        <h3 className="font-semibold mb-2 text-sm text-white">
          Fill Google Form Instead? <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_dXebCWKaocA7KpAxWJAyHGfEwsqiDvAgXk0tj4ZQa0bYhg/viewform">click here</a>
        </h3> 
        <br />
        </center>
        {/* Form Fields */}
        <form style={styles.form} onSubmit={handleNext}>
          {/* Question 9 */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>9. Type of family</p>
            <input
              type="text"
              name="familyType"
              value={formData.familyType}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="Enter family type"
            />
          </div>

          {/* Question 10 */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>10. Which language is spoken at home?</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="English"
                  onChange={handleInputChange}
                  checked={formData.language === 'English'}
                  style={styles.radio}
                /> English
              </label>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="Hindi"
                  onChange={handleInputChange}
                  checked={formData.language === 'Hindi'}
                  style={styles.radio}
                /> Hindi
              </label>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="Other"
                  onChange={handleInputChange}
                  checked={formData.language === 'Other'}
                  style={styles.radio}
                /> Other (specify)
                <input
                  type="text"
                  name="otherLanguage"
                  value={formData.otherLanguage}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Specify language"
                />
              </label>
            </div>
          </div>

          {/* Question 11 */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>11. Family medical history</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="familyHistory"
                  value="Convulsions"
                  onChange={handleInputChange}
                  checked={formData.familyHistory === 'Convulsions'}
                  style={styles.radio}
                /> History of convulsions
              </label>
              <label>
                <input
                  type="radio"
                  name="familyHistory"
                  value="Neuromuscular"
                  onChange={handleInputChange}
                  checked={formData.familyHistory === 'Neuromuscular'}
                  style={styles.radio}
                /> Neuro muscular disorder
              </label>
              <label>
                <input
                  type="radio"
                  name="familyHistory"
                  value="MentalIllness"
                  onChange={handleInputChange}
                  checked={formData.familyHistory === 'MentalIllness'}
                  style={styles.radio}
                /> Mental illness
              </label>
              <label>
                <input
                  type="radio"
                  name="familyHistory"
                  value="LossUnderstanding"
                  onChange={handleInputChange}
                  checked={formData.familyHistory === 'LossUnderstanding'}
                  style={styles.radio}
                /> Loss of understanding
              </label>
              <label>
                <input
                  type="radio"
                  name="familyHistory"
                  value="MaternalBMI"
                  onChange={handleInputChange}
                  checked={formData.familyHistory === 'MaternalBMI'}
                  style={styles.radio}
                /> Mother’s antenatal weight / BMI
              </label>
              <label>
                <input
                  type="radio"
                  name="familyHistory"
                  value="Other"
                  onChange={handleInputChange}
                  checked={formData.familyHistory === 'Other'}
                  style={styles.radio}
                /> If other (Specify condition & family member)
                <input
                  type="text"
                  name="otherCondition"
                  value={formData.otherCondition}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Condition"
                />
                <input
                  type="text"
                  name="otherFamilyMember"
                  value={formData.otherFamilyMember}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Family Member"
                />
              </label>
            </div>
          </div>

          {/* Question 12 */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>12. Did your child have jaundice at birth?</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="jaundice"
                  value="Yes"
                  onChange={handleInputChange}
                  checked={formData.jaundice === 'Yes'}
                  style={styles.radio}
                /> Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="jaundice"
                  value="Maybe"
                  onChange={handleInputChange}
                  checked={formData.jaundice === 'Maybe'}
                  style={styles.radio}
                /> Maybe
              </label>
              <label>
                <input
                  type="radio"
                  name="jaundice"
                  value="No"
                  onChange={handleInputChange}
                  checked={formData.jaundice === 'No'}
                  style={styles.radio}
                /> No
              </label>
            </div>
          </div>

          {/* Next Button */}
          <button type="submit" style={styles.nextButton}>
            <strong>Next</strong>
            <div style={styles.iconContainer}>
              <FaArrowRight style={styles.icon} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};



// Inline Styles
const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#1e0a2d',
    color: '#e6e6e6',
    fontFamily: 'Montserrat, sans-serif',
    padding: '2rem',
  },
  sidebar: {
    width: '35%',
    padding: '2rem',
    color: '#e6e6e6',
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
  },
  sidebarDetails: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  progress: {
    marginTop: '2rem',
    fontSize: '1.2rem',
  },
  progressStep: {
    color: '#f7aef8',
    fontWeight: 'bold',
  },
  circleStep: {
    display: 'inline-block',
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '50%',
    backgroundColor: '#f7aef8',
    color: '#1e0a2d',
    textAlign: 'center',
    lineHeight: '1.5rem',
  },
  formContainer: {
    width: '65%',
    padding: '3rem',
    backgroundColor: '#26173e',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    margin: '2rem',
  },
  formTitle: {
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  formDescription: {
    fontSize: '0.9rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  languageButton: {
    display: 'block',
    margin: '0 auto 2rem auto',
    padding: '0.5rem 1rem',
    backgroundColor: '#4d0076',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  question: {
    marginBottom: '2rem',
    width: '80%',
  },
  questionLabel: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  radio: {
    accentColor: '#6a0dad',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '0.5rem',
    color: '#000000',
  },
  nextButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#4d0076',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: '0.5rem',
  },
  icon: {
    fontSize: '1rem',
  },
};

export default PatientHistoryForm2;
