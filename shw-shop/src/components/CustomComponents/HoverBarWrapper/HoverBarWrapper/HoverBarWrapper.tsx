import React from 'react';
import HoverBar from '../CustomHoverBar/HoverBar';
import { HoverBarWrapperProps } from '../types';

const HoverBarWrapper: React.FC<HoverBarWrapperProps> = ({
  children,
  durationInSec,
  repeate,
  imgNumber,
  active,
}) => {
  return (
    <div>
      {children}
      <HoverBar
        activate={active}
        durationInSec={durationInSec}
        repeate={repeate}
        imgNumber={imgNumber}
      />
    </div>
  );
};

export default HoverBarWrapper;
