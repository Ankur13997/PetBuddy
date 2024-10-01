import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApiConfig from '../utils/ApiConfig';
const AdoptionStatus = ({ userId }) => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');

  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${ApiConfig.backendUrl}/api/adoptions/user/${userId}`);
      setApplications(response.data);
    } catch (err) {
      setError('Error fetching applications.');
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [userId]);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Your Adoption Applications</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <ul>
          {applications.map((app) => (
            <li key={app._id}>
              Pet ID: {app.petId} - Status: {app.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdoptionStatus;
