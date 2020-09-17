import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Notice.module.scss';

const cx = classNames.bind(styles);

const getTitle = (variant) => {
  if (variant === 'best-practice') {
    return 'Best Practice';
  }

  if (variant === 'caution') {
    return 'Caution';
  }

  if (variant === 'deprecation') {
    return 'Deprecated';
  }

  if (variant === 'maintenance') {
    return 'In Maintenance';
  }

  if (variant === 'note') {
    return 'Note';
  }

  return 'error';
};

const propTypes = {
  /**
   * The aria-level attribute specifies the heading level of the notice. If no level is present, a value of 2 is the default.
   */
  ariaLevel: PropTypes.oneOf([
    2,
    3,
    4,
    5,
    6,
  ]),
  /**
  * The main body text of the notice.
  */
  children: PropTypes.string,
  /**
  * The type of notice.
  */
  variant: PropTypes.oneOf([
    'best-practice',
    'caution',
    'deprecation',
    'maintenance',
    'note',
  ]),
};

const defaultProps = {
  ariaLevel: 2,
  variant: 'deprecation',
};

const Notice = ({
  ariaLevel,
  variant,
  children,
}) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx('notice', variant, theme.className)}>
      <div role="heading" className={cx('title')} aria-level={ariaLevel}>
        <span>
          {getTitle(variant)}
        </span>
      </div>
      <p className={cx('paragraph')}>
        {children}
      </p>
    </div>
  );
};

Notice.propTypes = propTypes;
Notice.defaultProps = defaultProps;

export default Notice;
