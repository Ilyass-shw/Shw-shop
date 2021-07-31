import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  renderWithFormProvider,
  screen,
  waitFor,
} from '../../../test-utils/testUtils';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  window.alert = (): void => undefined; // provide an empty implementation for window.alert

  it('should render', () => {
    renderWithFormProvider(
      <CheckoutForm isSmallScreen={false} />,
      'withRouter',
    );
  });

  //========================================================================

  it('should match snapshot on big Screen', () => {
    const { asFragment } = renderWithFormProvider(
      <CheckoutForm isSmallScreen={false} />,
      'withRouter',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  //========================================================================

  it('should match snapshot on small Screen', () => {
    const { asFragment } = renderWithFormProvider(
      <CheckoutForm isSmallScreen={true} />,
      'withRouter',
    );
    expect(asFragment()).toMatchSnapshot();
  });

  //========================================================================

  it('should submit correct form data', async () => {
    const saveData = jest.fn();
    renderWithFormProvider(
      <CheckoutForm isSmallScreen={false} saveData={saveData} />,
      'withRouter',
    );

    const submitButton = screen.getByRole('button', {
      name: /continue to shipping/i,
    });
    // verify data not submitted when clicking submit button with empty inputs
    userEvent.click(submitButton);
    expect(saveData).not.toHaveBeenCalled();

    // fill in data
    userEvent.type(screen.getByPlaceholderText('Email'), 'example@gmail.com');
    userEvent.click(
      screen.getByRole('checkbox', {
        name: /keep me up to date on news and exclusive offers\./i,
      }),
    );
    userEvent.type(screen.getByPlaceholderText('First name'), 'Emilie');
    userEvent.type(screen.getByPlaceholderText('Last name'), 'Sobolov');
    userEvent.type(
      screen.getByPlaceholderText('Address'),
      'Germany, strasse nummer 8',
    );
    userEvent.type(screen.getByPlaceholderText('City'), 'Berlin');
    userEvent.selectOptions(
      screen.getByPlaceholderText('Counrty/Region'),
      'Germany',
    );
    userEvent.type(screen.getByPlaceholderText('Phone'), '04578163554');

    //verify data is submitted correctly
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(saveData).toHaveBeenCalledWith({
        Address: 'Germany, strasse nummer 8',
        Address2: '',
        City: 'Berlin',
        Country: 'DE',
        FirstName: 'Emilie',
        LastName: 'Sobolov',
        PhoneNumber: '04578163554',
        buyerAcceptMarketing: true,
        email: 'example@gmail.com',
      }),
    );
  }, 8000);
});
