import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';

const DisclosurePill = () => {
  const [open, setOpen] = useState(false);
  const pillRef = useRef();

  const setPillNode = (node) => {
    pillRef.current = node;
  };

  const getPillNode = () => pillRef.current;

  const handleOnSelect = () => {
    setOpen(true);
  };

  const handleOnRequestClose = () => {
    setOpen(false);
  };

  return (
    <PillList
      ariaLabel="Example of a Basic Pill with a Popover"
    >
      <Pill
        label="Demo"
        onSelect={handleOnSelect}
        refCallback={setPillNode}
      />
      <Popup
        isOpen={open}
        isArrowDisplayed
        targetRef={getPillNode}
        onRequestClose={handleOnRequestClose}
        contentHeight="160"
        contentWidth="160"
      >
        <p>Demo Popup</p>
      </Popup>
    </PillList>
  );
};

export default DisclosurePill;
