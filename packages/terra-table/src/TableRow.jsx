import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Table.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * Whether or not row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not row is selectable
   */
  isSelectable: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
  isSelectable: undefined,
};

const TableRow = ({
  children,
  isSelected,
  isSelectable,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const rowClassNames = classNames(
    cx(
      { 'is-selected': isSelected },
      { 'is-selectable': isSelectable },
      'row',
      theme.className,
    ),
    customProps.className,
  );

  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length > 16) {
    // eslint-disable-next-line no-console
    console.log(`Number of Columns are ${React.Children.count(children)}. This is more than columns limit`);
  }

  return (
    <tr {...customProps} aria-selected={isSelected} className={rowClassNames}>
      {children}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
