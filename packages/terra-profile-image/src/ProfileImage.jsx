import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import TerraImage from 'terra-image';
import styles from './ProfileImage.module.scss';

const cx = classNamesBind.bind(styles);

/* eslint react/no-unused-prop-types: [0] */
const propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: PropTypes.string,
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: PropTypes.string,
  /**
  * Sets the `object-fit` style of the image from the following values: `cover`, `contain`, `scale-down`, `none`.
  * ![IMPORTANT](https://badgen.net/badge/UX/Design-Standards/blue) Anywhere the terra-profile-image is used to show images of People, _only_ `cover` and `contain` are acceptable.
  */
  fit: PropTypes.oneOf(['cover', 'scale-down', 'contain', 'none']),
  /**
   * Sets the height of the image. Note: always define the width and height of the image as number value in pixels, e.g. `height="75"` for "75px".
   */
  height: PropTypes.string,
  /**
   * Sets the width of the image. Note: always define the width and height of the image as number value in pixels, e.g. `width="75"` for "75px".
   */
  width: PropTypes.string,
  /**
   * Function to be executed when the profile image load is successful.
   */
  onLoad: PropTypes.func,
  /**
   * Function to be executed when the profile image load errors.
   */
  onError: PropTypes.func,
};

const defaultProps = {
  fit: 'cover',
  height: '75',
  width: '75',
};

class ProfileImageClass extends React.Component {
  constructor(props) {
    super(props);
    this.PlaceholderSpanRef = React.createRef();
    this.state = { placeholderImageSrc: undefined };
  }

  componentDidMount() {
    this.getPlaceholderImageSource(this.PlaceholderSpanRef.current);
  }

  getPlaceholderImageSource(currentPlaceholderRef) {
    if (currentPlaceholderRef) {
      const placeholderSpanStyles = window.getComputedStyle(currentPlaceholderRef, null);
      const placeholderImageUrl = placeholderSpanStyles.getPropertyValue('background-image');
      const placeholderImageString = placeholderImageUrl ? placeholderImageUrl.match(/\((.*?)\)/)[1].replace(/('|")/g, '') : undefined;
      this.setState({ placeholderImageSrc: placeholderImageString });
      this.forceUpdate();
    }
  }

  createPlaceholderImage(imageClasses) {
    const {
      fit, src, ...props
    } = this.props;

    const theme = this.context;

    if (this.state.placeholderImageSrc) {
      return (
        <TerraImage
          {...props}
          src={this.state.placeholderImageSrc}
          fit={fit}
          className={[cx('placeholder-image'), imageClasses]}
        />
      );
    }
    return (<span ref={this.PlaceholderSpanRef} className={cx(['placeholder-span', theme.className])} />);
  }

  render() {
    const {
      fit, src, ...props
    } = this.props;

    const theme = this.context;

    const ProfileImageClassNames = classNames(
      cx([
        'profile-image',
        theme.className,
      ]),
      props.className,
    );

    if (src) {
      return (<TerraImage {...props} src={src} fit={fit} placeholder={this.createPlaceholderImage(ProfileImageClassNames)} className={ProfileImageClassNames} />);
    }
    return (<React.Fragment>{this.createPlaceholderImage(ProfileImageClassNames)}</React.Fragment>);
  }
}

ProfileImageClass.propTypes = propTypes;
ProfileImageClass.defaultProps = defaultProps;
ProfileImageClass.contextType = ThemeContext;

export default ProfileImageClass;
