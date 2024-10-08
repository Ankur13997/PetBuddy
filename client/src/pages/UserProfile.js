import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { FaEnvelope, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import '../css/UserProfile.css'; // Custom styles for UserProfile
import ApiConfig from '../utils/ApiConfig';
import { CircularProgress, Box } from '@mui/material';
const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${ApiConfig.backendUrl}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setProfileData(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err.response ? err.response.data : err);
        setError('Failed to load user profile.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    // Render a centered loading spinner while the context is loading
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full height to center the spinner
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (error) return <Navigate to="/login" />;;

  return (
    <>
      <Header />
      <PageHeader title="Profile" imageSrc="/images/blog.png" />
    
      <div className="user-profile container">
        {profileData ? (
          <>
            <div className="profile-card">
              <h2 className="profile-title">{profileData.name}'s Profile</h2>
              <p><FaEnvelope /> Email: <strong>{profileData.email}</strong></p>

              <h3>Adoption Applications</h3>
              <ul className="application-list">
                {profileData.applications && profileData.applications.length > 0 ? (
                  profileData.applications.map((app) => (
                    <li className="application-card" key={app._id}>
                      {/* <FaDog className="icon-dog" /> */}
                      <div>
                        <p><strong>Pet:</strong> {app.petId ? app.petId.name : 'Unknown Pet'}</p>
                        <p>
                          <strong>Status:</strong> {app.status === 'approved' ? (
                            <FaCheckCircle className="approved-icon" /> 
                          ) : (
                            <FaTimesCircle className="rejected-icon" />
                          )} {app.status}
                        </p>
                        <p><strong>Message:</strong> {app.message}</p>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No applications found.</li>
                )}
              </ul>
            </div>
          </>
        ) : (
          <div>Loading profile...</div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default UserProfile;
