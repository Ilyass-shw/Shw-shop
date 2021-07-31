import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '../../../test-utils/testUtils';
import SummaryToggleButton from './SummaryToggleButton';

describe('SummaryToggleButton', () => {
  const clickHandle = jest.fn();
  const TotalToPay = 200;

  it('should render', () => {
    render(
      <SummaryToggleButton
        show={true}
        clickHandle={clickHandle}
        TotalToPay={TotalToPay}
      />,
    );
  });

  it('should match snapshot when show prop equals true', () => {
    const { asFragment } = render(
      <SummaryToggleButton
        show={true}
        clickHandle={clickHandle}
        TotalToPay={TotalToPay}
      />,
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-bdvvaa bLOXmb"
          role="button"
        >
          <div
            class="sc-gsDJrp iNwdTk"
          >
            <h5
              class="sc-dkPtyc ivGcbN"
            >
              Show Order summray
            </h5>
            <h4
              class="sc-hKwCoD"
            >
               $200.00
            </h4>
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it('should match snapshot when show prop equals false', () => {
    const { asFragment } = render(
      <SummaryToggleButton
        show={false}
        clickHandle={clickHandle}
        TotalToPay={TotalToPay}
      />,
    );
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-bdvvaa bLOXmb"
          role="button"
        >
          <div
            class="sc-gsDJrp iNwdTk"
          >
            <h5
              class="sc-dkPtyc kHZCnP"
            >
              Hide Order summray
            </h5>
            <h4
              class="sc-hKwCoD"
            >
               $200.00
            </h4>
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  it('should call clickHandle function with the right parameter when the button is clicked', () => {
    let show = false;
    const { rerender } = render(
      <SummaryToggleButton
        show={show}
        clickHandle={clickHandle}
        TotalToPay={TotalToPay}
      />,
    );
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(clickHandle).toBeCalledTimes(1);
    expect(clickHandle).toBeCalledWith(true);
    show = true;
    rerender(
      <SummaryToggleButton
        show={show}
        clickHandle={clickHandle}
        TotalToPay={TotalToPay}
      />,
    );
    userEvent.click(button);
    expect(clickHandle).toBeCalledTimes(2);
    expect(clickHandle).toBeCalledWith(false);
  });
});
