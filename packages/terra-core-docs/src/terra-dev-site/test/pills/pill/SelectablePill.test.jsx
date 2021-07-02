import React from 'react';
import { Pill } from 'terra-pills';

const SelectablePill = () => {
  const handleOnSelect = () => {
    // Callback just to make pill selectable
  };

  return (
    <Pill
      label="Label"
      onSelect={handleOnSelect}
    />
  );
};

export default SelectablePill;
