import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { FormattedMessage } from 'react-intl';
import Button from 'terra-button';
import Divider from 'terra-divider';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import * as KeyCode from 'keycode-js';
import styles from './StatusView.module.scss';

const cx = classNamesBind.bind(styles);

const StatusViewVariants = {
  NODATA: 'no-data',
  NOMATCHINGRESULTS: 'no-matching-results',
  NOTAUTHORIZED: 'not-authorized',
  ERROR: 'error',
};

/* eslint-disable react/forbid-foreign-prop-types */
const propTypes = {
  /**
   * An array of objects containing terra-button properties. A key attribute is required for each object.
   * This array is used to render buttons in the bottom section.
   * Example:`[{ text: 'Button 1', key: 1, variant: 'neutral', onClick: onClickFunction}]`
   */
  buttonAttrs: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),

  /**
   * Display a custom glyph. Overrides a variant's default glyph.
   * Set `focusable=false` for svg element used as `customGlyph`.
   */
  customGlyph: PropTypes.node,

  /**
   * Display a custom glyph. Overrides a variant's default glyph.
   * Set `focusable=false` for svg element used as `customGlyph`.
   */
  errorLog: PropTypes.Object,

  /**
   *  Aligns the component at the top of the container rather than "centered"
   */
  isAlignedTop: PropTypes.bool,

  /**
   * Determines if the glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,

  /**
   * The descriptive text, displayed under the title.
   */
  message: PropTypes.string,

  /**
   * The title displayed under the glyph. Variants contain default titles that can be overriden by this prop.
   */
  title: PropTypes.string,

  /**
   * Sets the glyph and title using a pre-baked variant. One of the following: `no-data`,
   * `no-matching-results`, `not-authorized`, or `error`
   */
  variant: PropTypes.oneOf(['no-data', 'no-matching-results', 'not-authorized', 'error']),
};
/* eslint-enable react/forbid-foreign-prop-types */

const defaultProps = {
  buttonAttrs: [],
  customGlyph: undefined,
  errorLog: undefined,
  isAlignedTop: false,
  isGlyphHidden: false,
  message: undefined,
  title: undefined,
  variant: undefined,
};

const generateButtons = (buttonAttrsArray) => {
  if (!buttonAttrsArray.length) {
    return undefined;
  }

  return buttonAttrsArray.map(button => <Button {...button} className={cx(['button', button.className])} />);
};

const StatusView = ({
  buttonAttrs,
  customGlyph,
  errorLog,
  isAlignedTop,
  isGlyphHidden,
  message,
  title,
  variant,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const [isShowOpen, setIsShowOpen] = React.useState(false);
  // const [errorLog, setErrorLog] = React.useState({});

  let glyphSection;
  if (customGlyph && !isGlyphHidden) {
    glyphSection = (
      <div className={cx('glyph')}>
        {customGlyph}
      </div>
    );
  } else if (variant && !isGlyphHidden) {
    glyphSection = (
      <div className={cx('glyph')}>
        <div className={cx(variant, 'glyph-icon')} />
      </div>
    );
  }

  let defaultTitle;
  if (variant) {
    defaultTitle = <FormattedMessage id={`Terra.status-view.${variant}`} />;
  }

  // Custom title takes precedence
  let titleSection;
  if (title || defaultTitle) {
    titleSection = (
      <p className={cx('title')}>
        {title || defaultTitle}
      </p>
    );
  }

  let messageSection;
  if (message) {
    messageSection = (
      <p className={cx('message')}>
        {message}
      </p>
    );
  }

  let actionSection;
  const buttons = generateButtons(buttonAttrs);
  if (buttons) {
    actionSection = (
      <div className={cx('actions')}>
        {buttons}
      </div>
    );
  }

  let dividerSection;
  if (titleSection && (messageSection || actionSection)) {
    dividerSection = (
      <div className={cx('divider')}>
        <Divider />
      </div>
    );
  }

  const outerViewClassNames = classNames(
    cx(
      'outer-view',
      { 'is-aligned-top': isAlignedTop },
      theme.className,
    ),
    customProps.className,
  );

  const innerViewClassNames = cx([
    'inner-view',
  ]);

  const handleShowHideClick = () => {
    setIsShowOpen(!isShowOpen);
  };

  const handleShowHideKeyDown = (event) => {
    // Add focus styles for keyboard navigation.
    // The onFocus event doesn't get triggered in some browsers, hence, the focus state needs to be managed here.
    if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      setIsShowOpen(!isShowOpen);
    }
  };

  return (
    <div {...customProps} className={outerViewClassNames}>
      <div className={cx('top-space')} />
      <div className={innerViewClassNames}>
        {glyphSection}
        {titleSection}
        {dividerSection}
        {messageSection}
        {actionSection}
      </div>
      {
        errorLog && errorLog.stack && isShowOpen && (
          <div className={cx('error-log-text')}>
            {errorLog.stack}
          </div>
        )
      }
      {errorLog && errorLog.stack
      && (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" role="button" className={cx('show-hide-button')} onClick={handleShowHideClick} onKeyDown={handleShowHideKeyDown}>
        {
        isShowOpen ? 'Hide Error Log ' : 'Show Error Log '
        }
        {
        isShowOpen ? <IconCaretUp /> : <IconCaretDown />
        }
      </a>
      )}
      <div className={cx('bottom-space')} />
    </div>
  );
};

StatusView.propTypes = propTypes;
StatusView.defaultProps = defaultProps;
export default StatusView;
export { StatusViewVariants };
