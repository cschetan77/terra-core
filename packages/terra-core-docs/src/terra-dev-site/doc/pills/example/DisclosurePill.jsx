import React, { useRef, useState } from 'react';
import Avatar from 'terra-avatar';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';
import Spacer from 'terra-spacer';
// import fakeavatar from './images/avatar-contact.png';
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
        contentHeight="480"
        contentWidth="320"
      >
        <Spacer padding="large medium">
          <Avatar image={exampleAvatarImage} size="1.5em" initials="JS" alt="Deep Space" />
          <p>Pat Wheatley</p>
          <p>Role Position Second Line here</p>
          <p>Department Location</p>

          <p>Phone</p>
          <p>US +1 (888) 888-1234</p>

          <p>Email</p>
          <p>username.lastname@email.com</p>
        </Spacer>
      </Popup>
    </PillList>
  );
};

export default DisclosurePill;

//         <p>Pat Wheatley contact details</p>
//        <img src={fakeavatar} alt="temporary avatar" width="320" height="240" />
