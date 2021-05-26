import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';
import classNames from 'classnames/bind';
import styles from './ExampleStyles.module.scss';

const cx = classNames.bind(styles);

const HandlingPillTruncation = () => {
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
    <div className={cx('fixed-width-200')}>
      <PillList
        ariaLabel="Pill without Truncation"
        className={cx(['inline-pill-list', 'fixed-width-200'])}
      >
        <Pill
          label="cholecystectomy"
        />
      </PillList>
      <br />
      <PillList
        ariaLabel="Pill with Truncation"
      >
        <Pill
          label="cholecys..."
          title="cholecystectomy"
          onSelect={handleOnSelect}
          refCallback={setPillNode}
        />
        <Popup
          isOpen={open}
          isArrowDisplayed
          targetRef={getPillNode}
          onRequestClose={handleOnRequestClose}
          contentHeight="80"
          contentWidth="240"
        >
          <p>cholecystectomy</p>
        </Popup>
      </PillList>
    </div>
  );
};

export default HandlingPillTruncation;
