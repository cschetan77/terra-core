import React, { useState } from 'react';
import Button from 'terra-button';
import PillList from 'terra-pills/lib/PillList';
import Pill from 'terra-pills/lib/Pill';

const CollapsiblePillListWithDifferentPillType = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleRollUpPillOnClick = () => {
    setIsCollapsed(false);
  };

  const handleButtonOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleOnRemove = () => {
    // Callback just to enable remove button
  };

  const handleOnSelect = () => {
    // Callback just to make pill selectable
  };

  return (
    <>
      <PillList
        ariaLabel="Pill Container"
        isCollapsed={isCollapsed}
        rollUpPillOnTrigger={handleRollUpPillOnClick}
      >
        <Pill
          label="Basic 1"
        />
        <Pill
          label="Removable"
          onRemove={handleOnRemove}
        />
        <Pill
          label="Popup"
          onSelect={handleOnSelect}
        />
        <Pill
          label="Removable and Popup"
          onSelect={handleOnSelect}
          onRemove={handleOnRemove}
        />
        <Pill
          label="Basic 2"
        />
      </PillList>
      <Button text="Toggle Roll Up" onClick={handleButtonOnClick} />
    </>
  );
};

export default CollapsiblePillListWithDifferentPillType;
