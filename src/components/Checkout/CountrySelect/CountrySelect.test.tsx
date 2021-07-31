import React from 'react';
import { renderWithFormProvider } from '../../../test-utils/testUtils';
import CountrySelect from './CountrySelect';

describe('CountrySelect', () => {
  it('should render', () => {
    renderWithFormProvider(<CountrySelect />);
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithFormProvider(<CountrySelect />);
    expect(asFragment()).toMatchSnapshot();
  });
});
