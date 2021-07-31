import React from 'react';
import { render } from '../../test-utils/testUtils';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('should render', () => {
    render(<HeroSection />);
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<HeroSection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
