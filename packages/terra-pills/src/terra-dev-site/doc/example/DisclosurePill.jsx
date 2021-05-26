import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';
import avatar from './images/avatar-contact.png';

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
        label="Pat Wheatley"
        onSelect={handleOnSelect}
        refCallback={setPillNode}
      />
      <Popup
        isOpen={open}
        isArrowDisplayed
        targetRef={getPillNode}
        onRequestClose={handleOnRequestClose}
        contentHeight="240"
        contentWidth="320"
      >
        <img src={avatar} alt="temporary avatar" width="320" height="240" />
      </Popup>
    </PillList>
  );
};

export default DisclosurePill;

//         <p>Pat Wheatley contact details</p>
