import React from 'react';
import AdoptionStatus from './AdoptionStatus';

const UserDashboard = ({ userId }) => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <AdoptionStatus userId={userId} />
    </div>
  );
};

export default UserDashboard;
