import React from 'react';
import PillList, { Pill } from 'terra-pills';

const StandardPillList = () => (
  <div>
    <span>Your Focus Areas:</span>
    <PillList ariaLabel="Your Focus Areas">
      <Pill label="Preventative Health" />
      <Pill label="Physical Activity" />
      <Pill label="Nutrition" />
    </PillList>
  </div>
);

export default StandardPillList;
