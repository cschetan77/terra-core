import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';
import classNames from 'classnames/bind';
import styles from './PillsExamplesCommon.module.scss';

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

  const pillsTruncationNotNeededExampleLabel = 'Example pill not forced to truncate the label:';
  const pillsTruncationNeededExampleLabel = 'Example pill forced to truncate the label, a popup is manually added:';
  const cholecystectomyText = 'cholecystectomy';

  return (
    <>
      <div>
        <p id="terra-pills-example-without-truncation-list-label">{pillsTruncationNotNeededExampleLabel}</p>
        <PillList
          ariaLabel={pillsTruncationNotNeededExampleLabel}
          ariaLabelledBy="terra-pills-example-without-truncation-list-label"
          className={cx(['fixed-width-400', 'show-border'])}
        >
          <Pill
            label={cholecystectomyText}
          />
        </PillList>
      </div>
      <br />
      <div>
        <p id="terra-pills-example-with-truncation-list-label">{pillsTruncationNeededExampleLabel}</p>
        <PillList
          ariaLabel={pillsTruncationNeededExampleLabel}
          ariaLabelledBy="terra-pills-example-with-truncation-list-label"
          className={cx(['fixed-width-100', 'show-border'])}
        >
          <Pill
            label={cholecystectomyText}
            title={cholecystectomyText}
            id="terra-pills-example-truncated-pill"
            onSelect={handleOnSelect}
            refCallback={setPillNode}
            ariaHasPopup
            ariaExpanded={open}
            ariaControls="terra-pills-example-truncation-full-text"
          />
          <Popup
            isOpen={open}
            isArrowDisplayed
            targetRef={getPillNode}
            onRequestClose={handleOnRequestClose}
            contentHeight="40"
            contentWidth="160"
          >
            <p
              id="terra-pills-example-truncation-full-text"
              aria-labelledby="terra-pills-example-truncated-pill"
              className={cx(['centered-paragraph'])}
            >
              {cholecystectomyText}
            </p>
          </Popup>
        </PillList>
      </div>
    </>
  );
};

export default HandlingPillTruncation;
