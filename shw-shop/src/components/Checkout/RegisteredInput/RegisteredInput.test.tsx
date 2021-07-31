import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  renderWithReactHookForm,
  screen,
  waitFor,
} from '../../../test-utils/testUtils';
import RegisteredInput from './RegisteredInput';

describe('RegisteredInput', () => {
  const saveData = jest.fn();

  it('should render', () => {
    renderWithReactHookForm(
      <RegisteredInput
        Name="email"
        registerOptions={{ required: 'This is required.' }}
        type="email"
        placeholder="Email"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="email"
      />,
      saveData,
    );
  });

  it('should match snapshot', () => {
    const { asFragment } = renderWithReactHookForm(
      <RegisteredInput
        Name="email"
        registerOptions={{ required: 'This is required.' }}
        type="email"
        placeholder="Email"
        autoCapitalize="off"
        spellCheck="false"
        autoComplete="email"
      />,
      saveData,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should watch input correctly', () => {
    renderWithReactHookForm(
      <RegisteredInput Name="phone" type="tel" placeholder="Phone " />,
      saveData,
    );
    const registeredInput = screen.getByPlaceholderText('Phone');
    userEvent.type(registeredInput, 'example.net@gmail.com');
    expect(registeredInput).toHaveValue('example.net@gmail.com');
  });

  it('should display correct error message and submit correctly', async () => {
    renderWithReactHookForm(
      <RegisteredInput
        Name="email"
        type="email"
        placeholder="Email"
        registerOptions={{
          required: 'This is required.',
          maxLength: {
            value: 15,
            message: 'This phone number is too long.',
          },
        }}
      />,
      saveData,
    );
    const registeredInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByTestId('testSubmitButton');

    // verify initial state
    expect(screen.queryByAltText('This is required.')).not.toBeInTheDocument();
    expect(
      screen.queryByAltText('This phone number is too long.'),
    ).not.toBeInTheDocument();

    // verify state after clicking submit button with empty inputs
    userEvent.click(submitButton);
    expect(await screen.findByText('This is required.')).toBeInTheDocument();
    expect(saveData).not.toHaveBeenCalled();

    //try submitting with an email that is not valid.
    userEvent.type(registeredInput, 'ThisIsAReallyLongEmailAddress@gmail.com');
    expect(
      await screen.findByText('This phone number is too long.'),
    ).toBeInTheDocument();
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(saveData).not.toHaveBeenCalled();
    });

    //try an email that is valid.
    userEvent.clear(registeredInput);
    userEvent.type(registeredInput, 'ex@gmail.com');
    await waitFor(() => {
      expect(
        screen.queryByText('This phone number is too long.'),
      ).not.toBeInTheDocument();
    });

    // submit information
    userEvent.click(submitButton);
    await waitFor(() => {
      expect(saveData).toHaveBeenCalledWith({ email: 'ex@gmail.com' });
    });
  });
});
