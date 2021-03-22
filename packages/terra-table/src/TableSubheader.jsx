import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Table.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed in the subheader row
   */
  content: PropTypes.node.isRequired,

  /**
   * Number of columns the subheader must span
   */
  colSpan: PropTypes.number,
};

const TableSubheader = ({
  content,
  colSpan,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  // count is based on the number of columns and assigned in the table component which contains this subheader
  return (
  <tr data-terra-table-subheader-row>
    <td {...customProps} className={classNames(cx('subheader', theme.className), customProps.className)} colSpan={colSpan}>
      {content}
    </td>
  </tr>
  );
};

TableSubheader.propTypes = propTypes;

export default TableSubheader;
