import React from 'react';
import {
  BackgroundImage,
  HeroContent,
  HeroText,
  FirstPart,
  LastPart,
} from './HeroSection.component';

const HeroSection: React.FC = () => {
  return (
    <BackgroundImage>
      <HeroContent>
        <HeroText>
          <FirstPart>“Art is like a dance of the Heart,</FirstPart>
          <LastPart> when the Soul is free…”</LastPart>
        </HeroText>
      </HeroContent>
    </BackgroundImage>
  );
};

export default HeroSection;
