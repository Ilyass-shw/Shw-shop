import React from 'react';
import ProductViewMainImg from './ProductViewMainImg';
import { render, screen } from '../../../test-utils/testUtils';
import userEvent from '@testing-library/user-event';

describe('ProductViewMainImg', () => {
  const setMain = jest.fn();
  const main = 0;
  const imgs = ['src1', 'src2', 'src3'];
  
  it('should render', () => {
    render(<ProductViewMainImg setMain={setMain} main={main} imgs={imgs} />);
  });

  it('should call setMain clicking the right arrows', () => {
    render(<ProductViewMainImg setMain={setMain} main={main} imgs={imgs} />);
    const mainImg = screen.getByTestId('ZoomableImg') as HTMLImageElement;
    const rightArrow = screen.getByTestId('rightArrow');

    expect(mainImg.src).toContain('src1');
    userEvent.click(rightArrow);
    expect(setMain).toHaveBeenCalledTimes(1);
    userEvent.click(rightArrow);
    expect(setMain).toHaveBeenCalledTimes(2);
    userEvent.click(rightArrow);
    expect(setMain).toHaveBeenCalledTimes(3);
  });

  it('should call setMain clicking the right main img using the left arrows', () => {
    render(<ProductViewMainImg setMain={setMain} main={main} imgs={imgs} />);
    const mainImg = screen.getByTestId('ZoomableImg') as HTMLImageElement;
    const leftArrow = screen.getByTestId('leftArrow');

    expect(mainImg.src).toContain('src1');
    userEvent.click(leftArrow);
    expect(setMain).toHaveBeenCalledTimes(1);
    userEvent.click(leftArrow);
    expect(setMain).toHaveBeenCalledTimes(2);
    userEvent.click(leftArrow);
    expect(setMain).toHaveBeenCalledTimes(3);
  });
});
