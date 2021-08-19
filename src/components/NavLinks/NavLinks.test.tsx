import React from 'react';
import { renderWithRouter } from '../../test-utils/testUtils';
import NavLinks from './NavLinks';

describe('NavLinks', () => {
  it('should render', () => {
    renderWithRouter(<NavLinks />);
  });
  it('should match snapshot', () => {
    const { asFragment } = renderWithRouter(<NavLinks />);
    expect(asFragment).toMatchSnapshot();
  });
  it('should match snapshot', () => {
    const { asFragment } = renderWithRouter(<NavLinks />);

    expect(asFragment()).toMatchSnapshot();
  });
});
