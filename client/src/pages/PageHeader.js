import React from 'react';
import './PageHeader.css'; // Ensure your CSS file has the necessary styles

const PageHeader = ({ title, imageSrc }) => {
  return (
    <div className="page-header">
      <div className="page-header-content">
        <h1 className="page-title">{title}</h1>
        <p className="breadcrumb">
          <span>&#x27A1;</span> Home / <span className="breadcrumb-highlight">{title}</span>
        </p>
      </div>
      <div className="page-header-image">
        <img src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

export default PageHeader;
