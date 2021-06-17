import React, { useRef, useState } from 'react';
import Avatar from 'terra-avatar';
import Popup from 'terra-popup';
import Pill from 'terra-pills/lib/Pill';
import exampleAvatarImage from '../../../common/images/space_150x150.jpg';

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
    <>
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
        <Avatar image={exampleAvatarImage} initials="JS" alt="Deep Space" />
      </Popup>
    </>
  );
};

export default DisclosurePill;
