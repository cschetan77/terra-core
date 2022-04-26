/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M29 47.938L15.036 33.974H.075V14.026h14.961L29 .062zM40.889 7.026L38.765 9.15a20.9 20.9 0 01.035 29.669l2.123 2.123a23.934 23.934 0 00-.033-33.916zM36.979 24a12.924 12.924 0 01-3.82 9.18l2.121 2.12a15.951 15.951 0 00-.035-22.631l-2.12 2.12A12.923 12.923 0 0136.979 24z" data-name="256" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconVolumeSetIncrease";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */