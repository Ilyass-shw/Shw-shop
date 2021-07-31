import React from 'react';
import { render } from '../../test-utils/testUtils';
import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
