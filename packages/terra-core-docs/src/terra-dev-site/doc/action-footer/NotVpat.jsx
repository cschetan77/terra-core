import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Table from 'terra-table';
import vpatData from './VpatData.json';

import styles from './NotVpat.module.scss';

const cx = classNames.bind(styles);

const categoryTitles = {
  keyboardNavigationAndFocus: 'Keyboard Navigation and Focus',
  availableToAssistiveTechnology: 'Available To Assistive Technology',
  forms: 'Forms',
  responsive: 'Responsive',
  userControl: 'User Control',
  userGroups: 'User Groups',
  media: 'Media',
};

const propTypes = {
  /**
  * The button text.
  */
  children: PropTypes.string,
};

const Button = ({
  vpat,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const buttonClassNames = classNames(
    cx([
      'button',
      theme.className,
    ]),
    customProps.className,
  );

  const createRow = criteria => {
    const referenceCriteria = vpatData.criteria[criteria];
    const vpatResult = vpat.Results[criteria];
    return (
      {
        key: criteria,
        cells: [
          {
            key: `${criteria}-Criteria`,
            children: [
              referenceCriteria.criteriaText,
            ],
          },
          {
            key: `${criteria}-conformance`,
            children: [
              vpatResult.conformance,
            ],
          },
          {
            key: `${criteria}-explanation`,
            children: [
              vpatResult.explanation,
            ],
          },
          {
            key: `${criteria}-disability`,
            children: [
              vpatResult.disability,
            ],
          },
        ],
      }
    );
  };

  const createSection = categoryKey => (
    {
      sectionHeader: {
        id: `sub-${categoryKey}`,
        key: categoryKey,
        title: categoryTitles[categoryKey],
        // onToggle: handleSectionToggle,
        // metaData: { key: sectionData.key },
        // isCollapsed: collapsedKeys.indexOf(sectionData.key) >= 0,
      },
      rows: vpatData.categories[categoryKey].map(childItem => createRow(childItem)),
    }
  );

  return (
    <>
      <h2>
        NOT VPAT
      </h2>
      <ul>
        <li>
          Component Name: {vpat.ComponentName}
        </li>
        <li>
          PlatformType: {vpat.PlatformType}
        </li>
        <li>
          Component Version: {vpat.ComponentVersion}
        </li>
        <li>
          Component Description: {vpat.ComponentDescription}
        </li>
        <li>
          How this component will be used: {vpat.HowThisComponentWillBeUsed}
        </li>
        <li>
          Component Options: {vpat.ComponentOptions}
        </li>
        <li>
          Date Of Report: {vpat.DateOfReport}
        </li>
        <li>
          VPAT Report Version: {vpat.VPATReportVersion}
        </li>
      </ul>

      <Table
        summaryId="vpatTable"
        summary="This Table displays vpat information."
        numberOfColumns={4}
        cellPaddingStyle="standard"
        dividerStyle="horizontal"
        headerData={{
          cells: [
            { key: 'cell-0', id: 'toggle-0', children: 'Criteria' },
            { key: 'cell-1', id: 'toggle-1', children: 'Conformance' },
            { key: 'cell-2', id: 'toggle-2', children: 'Explanation' },
            { key: 'cell-2', id: 'toggle-2', children: 'disability' },
          ],
        }}
        bodyData={Object.keys(vpatData.categories).map(section => createSection(section))}
      />
    </>
  );
};

Button.propTypes = propTypes;

export default Button;
