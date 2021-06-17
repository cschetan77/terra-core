import React, { useState } from 'react';
import Pill from 'terra-pills/lib/Pill';

const BasicRemovablePill = () => {
  const [isRemoved, setIsRemoved] = useState(true);

  const handleOnRemove = () => {
    setIsRemoved(false);
  };

  return (
    <div>
      {isRemoved && (
        <Pill
          label="Demo"
          onRemove={handleOnRemove}
        />
      )}
    </div>
  );
};

export default BasicRemovablePill;
