import React from 'react';
import { render } from '../../../test-utils/testUtils';
import ZoomableImg from './ZoomableImg';
describe('ZoomableImg', () => {
  const mainImg = 'sr1';
  it('should render', () => {
    render(<ZoomableImg mainImg={mainImg} />);
  });

  it('should render match Snapshot', () => {
    const { asFragment } = render(<ZoomableImg mainImg={mainImg} />);
    expect(asFragment).toMatchSnapshot();
  });
});
