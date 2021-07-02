import React, { useState } from 'react';
import { Pill } from 'terra-pills';

const BasicRemovablePill = () => {
  const [isRemoved, setIsRemoved] = useState(true);

  const handleOnRemove = () => {
    setIsRemoved(false);
  };

  return (
    <div>
      {isRemoved && (
        <Pill
          label="Label"
          onRemove={handleOnRemove}
        />
      )}
    </div>
  );
};

export default BasicRemovablePill;
