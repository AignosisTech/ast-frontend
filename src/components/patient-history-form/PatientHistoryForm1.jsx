import React, { useState , useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { AppContext } from "../../AppContext";

const PatientHistoryForm1 = ({ onNext }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolClass: '',
    motherName: '',
    fatherName: '',
    motherOccupation: '',
    fatherOccupation: '',
    birthCry: '',
    nicuCare: '',
    hospitalized: '',
    complaints: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedComplaints = checked
        ? [...prevState.complaints, value]
        : prevState.complaints.filter((complaint) => complaint !== value);
        console.log(formData);
      return { ...prevState, complaints: updatedComplaints };
      
    });
  };
  const {testData, setTestData} = useContext(AppContext);
  const handleNext = (e) => {
    e.preventDefault();

    // Save data to testdata (for example purposes)
    

    // const testdata = formData;
    console.log('Form Data Saved:', formData);
    setTestData({
      ...testData,
      patientform1Data: formData
    });

    try {
      onNext(); // Call the parent function to move to the next form
    } catch (error) {
      console.error('Error during navigation:', error);
    }
  };

  return (
    <div style={styles.container}>
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
            growth and development.
          </p>
          <div style={styles.progress}>
            <span style={{ ...styles.progressStep, ...styles.circleStep }}>1</span> → 
            <span style={styles.progressStep}>2</span> → 
            <span style={styles.progressStep}>3</span> → 
            <span style={styles.progressStep}>4</span>
          </div>
        </div>
      </div>

      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>Patient History</h2>
        <p style={styles.formDescription}>
          By completing this form, you provide us with insights into medical history,
          developmental milestones, family health patterns, and previous assessments or
          diagnoses.
        </p>
        <button style={styles.languageButton}>Choose language</button>

        <form style={styles.form} onSubmit={handleNext}>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="schoolClass"
              placeholder="School & class of the child"
              value={formData.schoolClass}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="motherName"
              placeholder="Mother's name"
              value={formData.motherName}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="fatherName"
              placeholder="Father's name"
              value={formData.fatherName}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="motherOccupation"
              placeholder="Mother's occupation"
              value={formData.motherOccupation}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="fatherOccupation"
              placeholder="Father's occupation"
              value={formData.fatherOccupation}
              onChange={handleInputChange}
            />
          </div>

          <div style={styles.question}>
            <p style={styles.questionLabel}>1. Cried at time of birth?</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="birthCry"
                  value="Yes"
                  checked={formData.birthCry === 'Yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="birthCry"
                  value="Maybe"
                  checked={formData.birthCry === 'Maybe'}
                  onChange={handleInputChange}
                />{' '}
                Maybe
              </label>
              <label>
                <input
                  type="radio"
                  name="birthCry"
                  value="No"
                  checked={formData.birthCry === 'No'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div style={styles.question}>
            <p style={styles.questionLabel}>2. NICU care?</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="nicuCare"
                  value="Yes"
                  checked={formData.nicuCare === 'Yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="nicuCare"
                  value="Maybe"
                  checked={formData.nicuCare === 'Maybe'}
                  onChange={handleInputChange}
                />{' '}
                Maybe
              </label>
              <label>
                <input
                  type="radio"
                  name="nicuCare"
                  value="No"
                  checked={formData.nicuCare === 'No'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div style={styles.question}>
            <p style={styles.questionLabel}>3. Hospitalized anytime in the past</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="hospitalized"
                  value="Yes"
                  checked={formData.hospitalized === 'Yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hospitalized"
                  value="Maybe"
                  checked={formData.hospitalized === 'Maybe'}
                  onChange={handleInputChange}
                />{' '}
                Maybe
              </label>
              <label>
                <input
                  type="radio"
                  name="hospitalized"
                  value="No"
                  checked={formData.hospitalized === 'No'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div style={styles.question}>
            <p style={styles.questionLabel}>4. Patient complaints</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="checkbox"
                  value="Speech delay"
                  onChange={handleCheckboxChange}
                />{' '}
                Speech delay
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Dyslexia"
                  onChange={handleCheckboxChange}
                />{' '}
                Dyslexia
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Delayed development"
                  onChange={handleCheckboxChange}
                />{' '}
                Delayed development
              </label>
              <label>
                <input
                  type="checkbox"
                  value="No"
                  onChange={handleCheckboxChange}
                />{' '}
                No
              </label>
            </div>
          </div>

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
  field: {
    marginBottom: '1rem',
    width: '80%',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    color: '#000000'
  },
  question: {
    marginBottom: '1rem',
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

export default PatientHistoryForm1;
