import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen, within } from '../../../test-utils/testUtils';
import CustomSelectInput from './CustomSelectInput';

describe('CustomSelectInput', () => {
  it('should render all provided options with the correct initial value', () => {
    const options = ['option1', 'option2', 'option3'];
    const onChange = jest.fn() as () => void;
    render(
      <CustomSelectInput
        label={'my label'}
        value={'option2'}
        options={options}
        onChange={onChange}
        id={'idd'}
      />,
    );
    const selectInput = screen.getByLabelText('my label');

    expect(screen.getByText('option1')).toBeInTheDocument();
    expect(screen.getByText('option2')).toBeInTheDocument();
    expect(screen.getByText('option3')).toBeInTheDocument();

    expect(selectInput).toHaveValue('option2');
  });

  it('should change the value and call onChange function when another option is selected', () => {
    const options = ['option1', 'option2', 'option3'];
    const onChange = jest.fn() as () => void;
    const { rerender } = render(
      <CustomSelectInput
        label={'my label'}
        value={'option2'}
        options={options}
        onChange={onChange}
        id={'idd'}
      />,
    );

    expect(onChange).toHaveBeenCalledTimes(0);

    const selectInput = screen.getByLabelText('my label');
    const option3 = within(selectInput).getByText('option3');

    userEvent.selectOptions(selectInput, option3);

    expect(onChange).toHaveBeenCalledTimes(1);
    rerender(
      <CustomSelectInput
        label={'my label'}
        value={'option3'}
        options={options}
        onChange={onChange}
        id={'idd'}
      />,
    );
    expect(selectInput).toHaveValue('option3');
  });
});
