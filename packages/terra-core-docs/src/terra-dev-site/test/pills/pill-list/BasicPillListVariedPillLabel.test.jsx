import React from 'react';
import classNames from 'classnames/bind';
import PillList, { Pill } from 'terra-pills';
import styles from './PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const BasicPillListVariedPillLabel = () => (
  <div className={cx(['container', 'show-border', 'width-200'])}>
    <PillList
      ariaLabel="Pill Container"
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
  </div>
);

export default BasicPillListVariedPillLabel;
