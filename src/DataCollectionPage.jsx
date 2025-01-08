import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import INCLEN from './components/patient-history-form/INCLEN';
import ISAA from './components/patient-history-form/ISAA';
import CARS from './components/patient-history-form/CARS';

const DataCollectionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { dataCollectionMode } = location.state || { dataCollectionMode: [] };

  useEffect(() => {
    if (!dataCollectionMode || dataCollectionMode.length === 0) {
      navigate('/patienthistory'); // Redirect to /patienthistory if no dataCollectionMode present
    } else if (dataCollectionMode.includes('INCLEN')) {
        navigate('/INCLEN', { state: { dataCollectionMode } });
    } else if (dataCollectionMode.includes('ISAA')) {
        navigate('/ISAA', { state: { dataCollectionMode } });
    } else if (dataCollectionMode.includes('CARS')) {
        navigate('/CARS', { state: { dataCollectionMode } });
    } else {
      navigate('/patienthistory'); // Default to patienthistory if none of the options are present
    }
  }, [dataCollectionMode, navigate]);

  return (
    <div>
      {/* You can conditionally render components if needed, though they won't be displayed because of the navigation above */}
      {/* {dataCollectionMode.includes('INCLEN') && <INCLEN dataCollectionMode={dataCollectionMode} />}
      {dataCollectionMode.includes('ISAA') && <ISAA dataCollectionMode={dataCollectionMode} />}
      {dataCollectionMode.includes('CARS') && <CARS dataCollectionMode={dataCollectionMode} />} */}
    </div>
  );
};

export default DataCollectionPage;
