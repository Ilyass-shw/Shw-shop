import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithRouter, screen } from '../../test-utils/testUtils';
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
     renderWithRouter(<NavLinks />);

     const categoriesButton = screen.getByRole('link', {  name: /categories/i})
     const dropDowncategories = screen.getByTestId('dropdown Categories')
     expect(dropDowncategories).not.toBeVisible()
     userEvent.click(categoriesButton)
     expect(dropDowncategories).toBeVisible()

  });
});
