import React from 'react';
import classNames from 'classnames/bind';
import PillList, { Pill } from 'terra-pills';
import styles from './PillsDocExampleCommon.module.scss';

const cx = classNames.bind(styles);

const StandardPillList = () => (
  <div className={cx('standard-pill-list-example')}>
    <p
      id="terra-pills-example-standard-pill-list-label"
      className={cx('pill-list-label')}
    >
      Your Focus Areas:
    </p>
    <PillList
      ariaLabel="Your Focus Areas:"
      ariaLabelledBy="terra-pills-example-standard-pill-list-label"
      className={cx('inline-pill-list')}
    >
      <Pill label="Preventative Health" />
      <Pill label="Physical Activity" />
      <Pill label="Nutrition" />
    </PillList>
  </div>
);

export default StandardPillList;
