import React, { useState } from 'react';
import { Button } from '@cerner/terra-docs';
import TerraButton from 'terra-button';
import PillList, { Pill } from 'terra-pills';
import classNames from 'classnames/bind';
import styles from './PillsExamplesCommon.module.scss';

const cx = classNames.bind(styles);

const CollapsiblePillList = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleRollUpPillOnClick = () => {
    setIsCollapsed(false);
  };

  const handleOnRemove = () => {
    // eslint-disable-next-line no-alert
    window.alert('You clicked to remove this pill.');
  };

  const handleRemoveAll = () => {
    // eslint-disable-next-line no-alert
    window.alert('You clicked "clear all" to remove all pills.');
  };

  const handleButtonOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={cx('collapsible-pill-list-example')}>
        <p
          id="terra-pills-example-collapsible-pill-list-label"
          className={cx('pill-list-label')}
        >
          Applied Filters:
        </p>
        <PillList
          ariaLabel="Applied Filters"
          isCollapsed={isCollapsed}
          rollUpPillOnTrigger={handleRollUpPillOnClick}
          className={cx('inline-pill-list')}
        >
          <Pill
            label="Category: Selection 1"
            onRemove={handleOnRemove}
          />
          <Pill
            label="Category: Selection 2"
            onRemove={handleOnRemove}
          />
          <Pill
            label="Category: Selection 3"
            onRemove={handleOnRemove}
          />
          <Pill
            label="Category: Selection 4"
            onRemove={handleOnRemove}
          />
          <Pill
            label="Category: Selection 5"
            onRemove={handleOnRemove}
          />
          <Pill
            label="Category: Selection 6"
            onRemove={handleOnRemove}
          />
          <Pill
            label="Category: Selection 7"
            onRemove={handleOnRemove}
          />
          <Pill
            label="Category: Selection 8"
            onRemove={handleOnRemove}
          />
        </PillList>
        <TerraButton
          text="Clear All Filters"
          variant="de-emphasis"
          onClick={handleRemoveAll}
          className={cx('clear-filters-button')}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Button onClick={handleButtonOnClick} disabled={isCollapsed} className={cx('toggle-active-button')}>Manually toggle roll-up and collapsing Pill-List (for example only)</Button>
    </>
  );
};

export default CollapsiblePillList;
