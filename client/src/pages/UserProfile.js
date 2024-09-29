import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaCheckCircle, FaTimesCircle, FaDog } from 'react-icons/fa';
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import './UserProfile.css'; // Custom styles for UserProfile

const UserProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/profile`, {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
