import React from 'react';
import { render } from '../../../test-utils/testUtils';
import SummaryItem from './SummaryItem';

describe('SummaryItem', () => {
  const Item = {
    name: 'itemOne',
    id: 3,
    description: 'rand',
    imgs: ['src'],
    price: 45,
  };

  it('should render', () => {
    render(<SummaryItem item={Item} quantity={5} />);
  });
  it('should match snapshot', () => {
    const { asFragment } = render(<SummaryItem item={Item} quantity={5} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
