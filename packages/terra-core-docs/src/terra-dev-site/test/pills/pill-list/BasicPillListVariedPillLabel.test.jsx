import React from 'react';
import classNames from 'classnames/bind';
import PillList from 'terra-pills/lib/PillList';
import Pill from 'terra-pills/lib/Pill';
// import styles from '../../../test/pills/pill-list/TestStyles.module.scss';
import styles from './TestStyles.module.scss';

const cx = classNames.bind(styles);

const BasicPillListVariedPillLabel = () => (
  <PillList
    ariaLabel="Pill Container"
    className={cx(['show-border', 'width-200'])}
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
);

export default BasicPillListVariedPillLabel;
