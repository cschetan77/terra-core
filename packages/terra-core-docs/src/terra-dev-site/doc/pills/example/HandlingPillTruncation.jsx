import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './PillsDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const HandlingPillTruncation = () => {
  const theme = React.useContext(ThemeContext);
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

  const pillsTruncationNotNeededExampleLabel = 'Example pill list not forcing a basic pill to truncate the label:';
  const pillsTruncationNeededExampleLabel = 'Example pill list forcing a basic pill to truncate the label, a popup needs to be added manually:';
  const cholecystectomyText = 'cholecystectomy';

  return (
    <div className={cx(['terra-pills-doc-example-handling-truncation', theme.className])}>
      <p
        id="terra-pills-doc-example-without-truncation-list-label"
        className={cx('label')}
      >
        {pillsTruncationNotNeededExampleLabel}
      </p>
      <div className={cx(['show-outer-container', 'truncation-protection-width'])}>
        <PillList
          ariaLabel={pillsTruncationNotNeededExampleLabel}
          ariaLabelledBy="terra-pills-doc-example-without-truncation-list-label"
          className={cx('show-pill-list')}
        >
          <Pill
            label={cholecystectomyText}
          />
        </PillList>
      </div>
      <p
        id="terra-pills-doc-example-with-truncation-list-label"
        className={cx(['label', 'space-between'])}
      >
        {pillsTruncationNeededExampleLabel}
      </p>
      <div className={cx(['show-outer-container', 'truncation-forced-width'])}>
        <PillList
          ariaLabel={pillsTruncationNeededExampleLabel}
          ariaLabelledBy="terra-pills-doc-example-with-truncation-list-label"
          className={cx('show-pill-list')}
        >
          <Pill
            label={cholecystectomyText}
            title={cholecystectomyText}
            id="terra-pills-doc-example-truncated-pill"
            onSelect={handleOnSelect}
            refCallback={setPillNode}
            ariaHasPopup
            ariaExpanded={open}
            ariaControls="terra-pills-doc-example-truncation-full-text"
          />
          <Popup
            isOpen={open}
            isArrowDisplayed
            targetRef={getPillNode}
            onRequestClose={handleOnRequestClose}
            contentHeight="auto"
            contentWidth="160"
          >
            <div className={cx(['terra-pills-doc-example-handling-truncation-popup-sample-content'])}>
              <p
                id="terra-pills-doc-example-truncation-full-text"
                aria-labelledby="terra-pills-doc-example-truncated-pill"
                className={cx(['centered-text'])}
              >
                {cholecystectomyText}
              </p>
            </div>
          </Popup>
        </PillList>
      </div>
    </div>
  );
};

export default HandlingPillTruncation;
