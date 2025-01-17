import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { AppContext } from "../../AppContext";

const PatientHistoryForm1 = ({ onNext }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    NameOfChild: "",
    Sex: "",
    marriageRelation: "",
    AssessorName: "",
    EducationStatus: "",
    fatherOccupation: "",
    birthCry: "",
    SocioEconomicStatus: "",
    Infertility: "",
    complaints: [],
    Abortion: "",
    PerinatalDeath: "",
    antenatalRiskFactors: [],
    bloodPressure: "",
    birthOrder: "",
    marriageRelation: "",
    familyType: "",
    familyMedicalHistory: [],
    placeOfDelivery: "",
    gestationAge: "",
    deliveryType: "",
    criedAtBirth: "",
    NICUStay: "",
    NICUReason: [],
    birthWeight: "",
    birthHeadCircumference: "",
    congenitalMalformations: "",    
    //Developmental History
    socialSmile: "",
    headControl: "",
    sitting: "",
    standing: "",
    walking: "",
    babbling: "",
    oneWord: "",
    speech: "",
    communication: "",
    gestures: "",
    medicationHistory: [],
    screenTime: "",
    screenSize: "",
    behavioralConcerns: "",
    provisionalDiagnosis: "",
    Seizures: "",
    feedingDifficulties: "",
    abnormalMovements: "",
    visionDifficulties: "",
    hearingDifficulties: "",
    anyTherapyReceived: "",
    behaviourConcern: "",

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedField = checked
        ? [...prevState[field], value]
        : prevState[field].filter((item) => item !== value);
      return { ...prevState, [field]: updatedField };
    });
  };

  const { testData, setTestData } = useContext(AppContext);
  const handleNext = (e) => {
    e.preventDefault();
    console.log("Form Data Saved:", formData);
    console.log("TestData", testData);
    setTestData({
      ...testData,
      patienthistoryform1data: formData,
    });

    try {
      onNext();
    } catch (error) {
      console.error("Error during navigation:", error);
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
        <center>
        <h3 className="font-semibold mb-2 text-sm text-white">
          Fill Google Form Instead? <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_dXebCWKaocA7KpAxWJAyHGfEwsqiDvAgXk0tj4ZQa0bYhg/viewform">click here</a>
        </h3> 
        <br />
        </center>
        <form style={styles.form} onSubmit={handleNext}>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="NameOfChild"
              placeholder="Name of the child"
              value={formData.NameOfChild}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="Sex"
              placeholder="Sex"
              value={formData.Sex}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="AssessorName"
              placeholder="Assessor (Psychologist's) name"
              value={formData.AssessorName}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="EducationStatus"
              placeholder="Education Status"
              value={formData.EducationStatus}
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
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="birthWeight"
              placeholder="Birth Weight (in Kg)"
              value={formData.birthWeight}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="birthHeadCircumference"
              placeholder="Birth Head Circumference (in cm)"
              value={formData.birthHeadCircumference}
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
            <p style={styles.questionLabel}>2. Socio Economic Status?</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="SocioEconomicStatus"
                  value="Upper"
                  checked={formData.SocioEconomicStatus === 'Upper'}
                  onChange={handleInputChange}
                />{' '}
                Upper
              </label>
              <label>
                <input
                  type="radio"
                  name="SocioEconomicStatus"
                  value="Upper-Middle"
                  checked={formData.SocioEconomicStatus === 'Upper-Middle'}
                  onChange={handleInputChange}
                />{' '}
                Upper-Middle
              </label>
              <label>
                <input
                  type="radio"
                  name="SocioEconomicStatus"
                  value="Upper-Lower"
                  checked={formData.SocioEconomicStatus === 'Upper-Lower'}
                  onChange={handleInputChange}
                />{' '}
                Upper-Lower
              </label>
              <label>
                <input
                  type="radio"
                  name="SocioEconomicStatus"
                  value="Lower-Middle"
                  checked={formData.SocioEconomicStatus === 'Lower-Middle'}
                  onChange={handleInputChange}
                />{' '}
                Lower-Middle
              </label>
              <label>
                <input
                  type="radio"
                  name="SocioEconomicStatus"
                  value="Lower"
                  checked={formData.SocioEconomicStatus === 'Lower'}
                  onChange={handleInputChange}
                />{' '}
                Lower
              </label>
            </div>
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>3. Infertility in Maternal/Family History</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="Infertility"
                  value="Yes"
                  checked={formData.Infertility === 'Yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="Infertility"
                  value="Maybe"
                  checked={formData.Infertility === 'Maybe'}
                  onChange={handleInputChange}
                />{' '}
                Maybe
              </label>
              <label>
                <input
                  type="radio"
                  name="Infertility"
                  value="No"
                  checked={formData.Infertility === 'No'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div>
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>4. Previous Abortion</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="Abortion"
                  value="Yes"
                  checked={formData.Abortion === 'Yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="Abortion"
                  value="No"
                  checked={formData.Abortion === 'No'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div>
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>5. Perinatal/Neonatal Death</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="PerinatalDeath"
                  value="Yes"
                  checked={formData.PerinatalDeath === 'Yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="PerinatalDeath"
                  value="No"
                  checked={formData.PerinatalDeath === 'No'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div>
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>6. Any Apparent Congenital Malformations / Atypical Body Feature</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="congenitalMalformations"
                  value="Yes"
                  checked={formData.congenitalMalformations === 'Yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="congenitalMalformations"
                  value="No"
                  checked={formData.congenitalMalformations === 'No'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div style={styles.question}>
            <p style={styles.questionLabel}>7. Patient complaints</p>
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
          {/* Antenatal Risk Factors */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>8. Antenatal Risk Factors</p>
            <div style={styles.radioGroup}>
              {[
                "Hyperthyroidism",
                "Poor Weight Gain",
                "Bleeding in Pregnancy",
                "Diabetes",
              ].map((risk, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={risk}
                    onChange={(e) =>
                      handleCheckboxChange(e, "antenatalRiskFactors")
                    }
                  />{" "}
                  {risk}
                </label>
              ))}
            </div>
          </div>

          {/* Blood Pressure */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>9. Blood Pressure during Pregnancy</p>
            {["High", "Low", "Normal"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="bloodPressure"
                  value={option}
                  checked={formData.bloodPressure === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>

          {/* Birth Order */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>10. Birth Order</p>
            {["Only Child", "Firstborn", "Second Born", "Third Born", "Other"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="birthOrder"
                    value={option}
                    checked={formData.birthOrder === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>

          {/* Family Type */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>11. Family Type</p>
            {["Joint Family", "Nuclear Family"].map((type, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="familyType"
                  value={type}
                  checked={formData.familyType === type}
                  onChange={handleInputChange}
                />{" "}
                {type}
              </label>
            ))}
          </div>

          {/* Family Medical History */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>12. Family Medical History</p>
            <div style={styles.radioGroup}>
              {[
                "Convulsions",
                "Neuromuscular Disorder",
                "Mental Illness",
                "Less Understanding",
                "Mother's Weight/BMI",
                "None",
                "Other",
              ].map((history, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={history}
                    onChange={(e) =>
                      handleCheckboxChange(e, "familyMedicalHistory")
                    }
                  />{" "}
                  {history}
                </label>
              ))}
            </div>
          </div>

          {/* Place of Delivery */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>13. Place of Delivery</p>
            {["Hospital", "Home", "Other"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="placeOfDelivery"
                  value={option}
                  checked={formData.placeOfDelivery === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>14. Gestation Age</p>
            {["Full Term", "Pre Term", "Post Term"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="gestationAge"
                  value={option}
                  checked={formData.gestationAge === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>15. Delivery Type</p>
            {["Normal Delivery", "Caesarean Section", "Assisted"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="deliveryType"
                  value={option}
                  checked={formData.deliveryType === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          {/* NICU Stay */}
          <div style={styles.question}>
            <p style={styles.questionLabel}>16. NICU Stay</p>
            {["Yes", "No"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="NICUStay"
                  value={option}
                  checked={formData.NICUStay === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>
              17. Is the marriage of parents in Same Gotra/Family/Relation?
            </p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="marriageRelation"
                  value="No"
                  checked={formData.marriageRelation === "No"}
                  onChange={handleInputChange}
                />{" "}
                No
              </label>
              <label>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="marriageRelation"
                  value="Yes"
                  checked={formData.marriageRelation === "Yes"}
                  onChange={handleInputChange}
                />{" "}
                Yes
              </label>
            </div>
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>18. Social Smile</p>
            {["Normal (3 Months)", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="socialSmile"
                    value={option}
                    checked={formData.socialSmile === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>19. Head Control</p>
            {["Normal (4 Months)", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="headControl"
                    value={option}
                    checked={formData.headControl === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>20. Sitting</p>
            {["Normal (8 Months)", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="sitting"
                    value={option}
                    checked={formData.sitting === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>21. Standing</p>
            {["Normal (12 Months)", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="standing"
                    value={option}
                    checked={formData.standing === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>22. Walking</p>
            {["Normal (15 Months)", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="walking"
                    value={option}
                    checked={formData.walking === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>23. Babbling</p>
            {["Normal (6 Months)", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="babbling"
                    value={option}
                    checked={formData.babbling === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>24. One Word</p>
            {["Normal (12 Months)", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="oneWord"
                    value={option}
                    checked={formData.oneWord === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>25. Speech</p>
            {["Appropriate to Age", "Delayed", "Do Not Remember"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="speech"
                    value={option}
                    checked={formData.speech === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>26. Communication</p>
            {["Gestures", "Words", "Sentences"].map(
              (option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="gestures"
                    value={option}
                    checked={formData.gestures === option}
                    onChange={handleInputChange}
                  />{" "}
                  {option}
                </label>
              )
            )}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>27. Seizures</p>
            {["Yes", "No"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="seizures"
                  value={option}
                  checked={formData.seizures === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>28. Feeding Difficulties</p>
            {["Yes", "No"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="feedingDifficulties"
                  value={option}
                  checked={formData.feedingDifficulties === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>29. Abnormal Movements</p>
            {["Yes", "No"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="abnormalMovements"
                  value={option}
                  checked={formData.abnormalMovements === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>30. Vision Difficulties</p>
            {["Yes", "No"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="visionDifficulties"
                  value={option}
                  checked={formData.visionDifficulties === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>31. Hearing Difficulties</p>
            {["Yes", "No"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                                    style={styles.radio}

                  name="hearingDifficulties"
                  value={option}
                  checked={formData.hearingDifficulties === option}
                  onChange={handleInputChange}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.question}>
            <p style={styles.questionLabel}>32. Any Therapy Received</p>
            {["Yes", "No"].map((option, index) => (
              <label key={index}>
                <input
                  type="radio"

                  name="anyTherapyReceived"
                  value={option}
                  checked={formData.anyTherapyReceived === option}
                  onChange={handleInputChange}
                  style={styles.radio}
                />{" "}
                {option}
              </label>
            ))}
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="screenSize"
              placeholder="How much screen size does he/she use {Small/Medium/large}"
              value={formData.screenSize}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="screenTime"
              placeholder="How much screen time does child have "
              value={formData.screenTime}
              onChange={handleInputChange}
            />
          </div>
          <div style={styles.field}>
            <input
              type="text"
              style={styles.input}
              name="behaviourConcern"
              placeholder="Specify 1st Behavioural Concerns"
              value={formData.behaviourConcern}
              onChange={handleInputChange}
            />
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
    color: '#000000',
    // marginRight: '5%',
  },
  question: {
    marginBottom: '1rem',
    width: '80%',
  },
  questionLabel: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    

  },
  radio: {
    marginLeft:'5px',
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
