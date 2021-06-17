import React from 'react';
import Pill from 'terra-pills/lib/Pill';

const SelectablePill = () => {
  const handleOnSelect = () => {
    // Callback just to make pill selectable
  };

  return (
    <Pill
      label="Demo"
      onSelect={handleOnSelect}
    />
  );
};

export default SelectablePill;
