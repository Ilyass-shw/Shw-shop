import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  renderWithReactHookForm,
  renderWithFormProvider,
  screen,
  waitFor,
} from '../../../test-utils/testUtils';
import Inputs from './Inputs';

describe('Inputs', () => {
  it('should render', () => {
    const { asFragment } = renderWithFormProvider(<Inputs />, 'withRouter');
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', {
        name: /keep me up to date on news and exclusive offers\./i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Apartment, suite, etc. (optional)'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Counrty/Region')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  //========================================================================

  it('should validate form fields', async () => {
    const verifyHowManyRequiredErrors = (Num: number): Promise<void> => {
      return waitFor(() => {
        expect(screen.queryAllByText('This is required.')).toHaveLength(Num);
      });
    };

    const saveData = jest.fn();
    renderWithReactHookForm(<Inputs />, saveData);

    const submitButton = screen.getByTestId('testSubmitButton');

    // verify initial state
    expect(screen.queryByText('This is required.')).not.toBeInTheDocument();
    userEvent.click(submitButton);
    await verifyHowManyRequiredErrors(7);
    expect(saveData).not.toHaveBeenCalled();

    // test validation for Email input
    userEvent.type(screen.getByPlaceholderText('Email'), 'example.gmail.com');
    expect(
      await screen.findByText('Please enter a valid email Address.'),
    ).toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText('Email'), 'example@gmail.com');

    await verifyHowManyRequiredErrors(6);

    await waitFor(() => {
      expect(
        screen.queryByText('Please enter a valid email Address.'),
      ).not.toBeInTheDocument();
    });

    // test validation for First name input
    userEvent.type(screen.getByPlaceholderText('First name'), 'Emilie');
    await verifyHowManyRequiredErrors(5);

    // test validation for Last name input
    userEvent.type(screen.getByPlaceholderText('Last name'), 'Sobolov');
    await verifyHowManyRequiredErrors(4);

    // test validation for Address input
    userEvent.type(
      screen.getByPlaceholderText('Address'),
      'Germany, strasse nummer 8',
    );
    await verifyHowManyRequiredErrors(3);

    // test validation for City input
    userEvent.type(screen.getByPlaceholderText('City'), 'Berlin');
    await verifyHowManyRequiredErrors(2);

    // test validation for country input
    userEvent.selectOptions(
      screen.getByPlaceholderText('Counrty/Region'),
      'Germany',
    );
    await verifyHowManyRequiredErrors(1);

    // test validation for Phone input
    userEvent.type(screen.getByPlaceholderText('Phone'), 'test');
    expect(
      await screen.findByText('Numbers only, please.'),
    ).toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText('Phone'), '04578163554');

    await verifyHowManyRequiredErrors(0);
  }, 8000);
});
