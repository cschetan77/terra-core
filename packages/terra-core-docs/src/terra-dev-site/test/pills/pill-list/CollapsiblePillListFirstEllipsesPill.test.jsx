import React, { useState } from 'react';
import Button from 'terra-button';
import PillList from 'terra-pills/lib/PillList';
import Pill from 'terra-pills/lib/Pill';

const CollapsiblePillListFirstEllipsesPill = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleRollUpPillOnClick = () => {
    setIsCollapsed(false);
  };

  const handleButtonOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <PillList
        ariaLabel="Pill Container"
        isCollapsed={isCollapsed}
        rollUpPillOnTrigger={handleRollUpPillOnClick}
      >
        <Pill
          label="Very Long Label which should show ellipses"
        />
        <Pill
          label="Random"
        />
      </PillList>
      <Button text="Toggle Roll Up" onClick={handleButtonOnClick} />
    </>
  );
};

export default CollapsiblePillListFirstEllipsesPill;
