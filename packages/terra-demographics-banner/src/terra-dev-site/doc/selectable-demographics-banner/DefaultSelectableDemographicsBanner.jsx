import React, { useState } from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';

const DefaultSelectableDemographicsBanner = () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics banner clicked');
  };

  const handleInfoButtonClick = () => {
    setMessage('Info Button clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        age="25 Years"
        dateOfBirth="May 9, 1993"
        gender="Male"
        personName="Johnathon Doe"
        preferredFirstName="John"
        selectableTileOnClick={handleDemographicsClick}
        infoButtonOnClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default DefaultSelectableDemographicsBanner;
