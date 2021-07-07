import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@cerner/terra-docs';
import PillList, { Pill } from 'terra-pills';
import styles from './PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsiblePillListVariedPillLabel = () => {
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
        className={cx(['container', 'show-border', 'width-200'])}
      >
        <Pill
          label="Demo"
        />
        <Pill
          label="Long Label"
        />
        <Pill
          label="Very Long Label"
        />
        <Pill
          label="Very Long Label which should show ellipses"
        />
        <Pill
          label="Random"
        />
        <Pill
          label="Random 2"
        />
      </PillList>
      <Button onClick={handleButtonOnClick}>Toggle Roll Up</Button>
    </>
  );
};

export default CollapsiblePillListVariedPillLabel;
