import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRows from './TableRows';
import TableRow from './TableRow';
import TableCell from './TableCell';
import SelectableTableRows from './SelectableTableRows';
import TableSingleSelectableRows from './SingleSelectableRows';
import TableMultiSelectableRows from './MultiSelectableRows';
import TableSubheader from './TableSubheader';
import styles from './Table.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether or not the rows should be zebra striped
   */
  isStriped: PropTypes.bool,
  /**
   * Whether or not the table cells should be padded
   */
  isPadded: PropTypes.bool,
};

const defaultProps = {
  isStriped: true,
  isPadded: true,
};

const Table = ({
  children,
  isStriped,
  isPadded,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const tableClassNames = classNames(
    cx(
      'table',
      { striped: isStriped },
      { padded: isPadded },
      theme.className,
    ),
    customProps.className,
  );
  return (
    <table {...customProps} className={tableClassNames}>
      {children}
    </table>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.Rows = TableRows;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.SelectableTableRows = SelectableTableRows;
Table.SingleSelectableRows = TableSingleSelectableRows;
Table.MultiSelectableRows = TableMultiSelectableRows;
Table.Subheader = TableSubheader;

export default Table;
