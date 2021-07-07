import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import { Pill } from 'terra-pills';

const DisclosurePill = () => {
  const [open, setOpen] = useState(false);
  const pillRef = useRef();
  const disclosurePillId = 'test-disclosure-pill';
  const disclosurePopupId = 'test-disclosure-popup';

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
        label="Label"
        id={disclosurePillId}
        onSelect={handleOnSelect}
        refCallback={setPillNode}
        ariaHasPopup
        ariaExpanded={open}
        ariaControls={disclosurePopupId}
      />
      <Popup
        isOpen={open}
        isArrowDisplayed
        targetRef={getPillNode}
        onRequestClose={handleOnRequestClose}
        contentHeight="80"
        contentWidth="160"
      >
        <p id={disclosurePopupId} aria-labelledby={disclosurePillId}>Demo Popup</p>
      </Popup>
    </>
  );
};

export default DisclosurePill;
