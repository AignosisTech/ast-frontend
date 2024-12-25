import React from 'react';

const ReportPage3 = () => {
  return (
    <div className="report-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

        .report-page {
          width: 100%;
          height: auto;
          margin: 0 auto;
          background-color: #1b0238;
          padding: 80px;
          color: white;
          font-family: 'Raleway', sans-serif;
        }

        .title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .section {
          display: flex;
          flex-direction: row;
          background-color: #593E6754;
          border-radius: 10px;
          padding: 30px;
          margin-bottom: 30px;
          width: 100%;
          max-width: 1200px;
          height: auto;
          align-items: center;
          justify-content: center;
          opacity: 1;
          margin-left: auto;
          margin-right: auto;
        }

        .section-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
        }

        .icon {
          width: 219px;
          height: 183px;
          background-size: cover;
          margin-bottom: 10px;
          opacity: 1;
        }

        .attention-icon {
          background-image: url('/src/assets/ReportPage3-img1.png');
        }

        .communication-icon {
          background-image: url('/src/assets/ReportPage3-img2.png');
        }

        .sensory-icon {
          background-image: url('/src/assets/ReportPage3-img3.png');
        }

        .speech-icon {
          background-image: url('/src/assets/ReportPage3-img4.png');
        }

        .small-title-box {
          background-color: #DF74FF;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .small-title-box-communication {
          background-color: #6567F9;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .small-title-box-sensory {
          background-color: #D1890B;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .small-title-box-speech {
          background-color: #FB6B91;
          padding: 10px 20px;
          border-radius: 5px;
          margin-top: 10px;
          text-align: center;
          font-family: 'Raleway', sans-serif;
        }

        .section-right {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 25px;
          padding: 20px;
          border-radius: 10px;
        }

        .progress-bar {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .bar {
          position: relative;
          width: 80%;
          height: 40px;
          background-color: #562b7f;
          border-radius: 15px;
          overflow: hidden;
          margin-right: 10px;
        }

        .fill {
          height: 100%;
          background-color: #DF74FF;
          border-radius: 15px;
          position: relative;
        }

        .fill-communication {
          height: 100%;
          background-color: #6567F9;
          border-radius: 15px;
          position: relative;
        }

        .fill-sensory {
          height: 100%;
          background-color: #D1890B;
          border-radius: 15px;
          position: relative;
        }

        .fill-speech {
          height: 100%;
          background-color: #FB6B91;
          border-radius: 15px;
          position: relative;
        }

        .percentage-circle {
          position: absolute;
          right: -15px;
          top: -5px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #F6E8FB;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #562b7f;
          font-size: 0.8rem;
          font-weight: bold;
          font-family: 'Raleway', sans-serif;
        }

        .label {
          position: absolute;
          left: 2px;
          top: 5px;
          color: white;
          font-weight: light;
          font-family: 'Raleway', sans-serif;
        }
      `}</style>

      <h2 className="title">Developmental Skills Summary</h2>

      <div className="section">
        <div className="section-left">
          <div className="icon attention-icon" />
          <div className="small-title-box">Attention & Focus</div>
        </div>

        <div className="section-right">
          <ProgressBar label="Attention Span" value="31%" />
          <ProgressBar label="Social Attention" value="30%" />
          <ProgressBar label="Attention to Speech" value="31%" />
          <ProgressBar label="Visual Speed Detection" value="32%" />
          <ProgressBar label="Gaze Estimation" value="32%" />
          <ProgressBar label="Eye Tracking" value="32%" />
        </div>
      </div>

      <div className="section">
        <div className="section-left">
          <div className="icon communication-icon" />
          <div className="small-title-box small-title-box-communication">Social Interaction & Communication</div>
        </div>

        <div className="section-right">
          <ProgressBar label="Eye Contact" value="30%" customClass="fill-communication" />
          <ProgressBar label="Pointing" value="40%" customClass="fill-communication" />
          <ProgressBar label="Gesture Communication" value="35%" customClass="fill-communication" />
          <ProgressBar label="Joint Attention" value="30%" customClass="fill-communication" />
          <ProgressBar label="Response to Name Call" value="32%" customClass="fill-communication" />
          <ProgressBar label="Facing Forward" value="35%" customClass="fill-communication" />
        </div>
      </div>

      <div className="section">
        <div className="section-left">
          <div className="icon sensory-icon" />
          <div className="small-title-box small-title-box-sensory">Sensory and Motor Skills</div>
        </div>

        <div className="section-right">
          <ProgressBar label="Mannerism" value="30%" customClass="fill-sensory" />
          <ProgressBar label="No - Repetitive Behavior" value="40%" customClass="fill-sensory" />
          <ProgressBar label="Facial Landmark Verification" value="35%" customClass="fill-sensory" />
        </div>
      </div>

      <div className="section">
        <div className="section-left">
          <div className="icon speech-icon" />
          <div className="small-title-box small-title-box-speech">Speech and Auditory Processing</div>
        </div>

        <div className="section-right">
          <ProgressBar label="Speech Detection" value="30%" customClass="fill-speech" />
          <ProgressBar label="Quality of Vocalization" value="40%" customClass="fill-speech" />
          <ProgressBar label="Emotion Recognition" value="35%" customClass="fill-speech" />
          <ProgressBar label="Motherese vs Traffic" value="30%" customClass="fill-speech" />
          <ProgressBar label="Motherese vs Techno" value="32%" customClass="fill-speech" />
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ label, value, customClass }) => {
  return (
    <div className="progress-bar">
      <div className="bar">
        <div className={customClass || "fill"} style={{ width: value }}>
          <div className="percentage-circle">{value}</div>
          <div className="label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage3;
