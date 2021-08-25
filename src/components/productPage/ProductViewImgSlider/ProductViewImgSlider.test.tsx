import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, screen } from '../../../test-utils/testUtils';
import ProductViewImgSlider from './ProductViewImgSlider';

describe('ProductViewImgSlider', () => {
  const imgs = ['src1', 'src2', 'src3'];

  it('should render', () => {
    renderWithRouter(<ProductViewImgSlider imgs={imgs} />);
  });

  it('should match Snapshot', () => {
    const { asFragment } = renderWithRouter(
      <ProductViewImgSlider imgs={imgs} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should change and display the right main img using the right arrow', () => {
    renderWithRouter(<ProductViewImgSlider imgs={imgs} />);
    const mainImg = screen.getByTestId('ZoomableImg') as HTMLImageElement;
    const rightArrow = screen.getByTestId('rightArrow');

    expect(mainImg.src).toContain('src1');
    userEvent.click(rightArrow);
    expect(mainImg.src).toContain('src2');
    userEvent.click(rightArrow);
    expect(mainImg.src).toContain('src3');
    userEvent.click(rightArrow);
    expect(mainImg.src).toContain('src1');
  });

  it('should render change and display the right main img using the left arrow', () => {
    renderWithRouter(<ProductViewImgSlider imgs={imgs} />);
    const mainImg = screen.getByTestId('ZoomableImg') as HTMLImageElement;
    const leftArrow = screen.getByTestId('leftArrow');

    expect(mainImg.src).toContain('src1');
    userEvent.click(leftArrow);
    expect(mainImg.src).toContain('src3');
    userEvent.click(leftArrow);
    expect(mainImg.src).toContain('src2');
    userEvent.click(leftArrow);
    expect(mainImg.src).toContain('src1');
  });

  it('should render change and display the right main img using the mini indicator imgs', () => {
    renderWithRouter(<ProductViewImgSlider imgs={imgs} />);
    const mainImg = screen.getByTestId('ZoomableImg') as HTMLImageElement;
    const miniImgSrc2 = screen.getByTestId('miniImg src2');
    const miniImgSrc3 = screen.getByTestId('miniImg src3');
    const miniImgSrc1 = screen.getByTestId('miniImg src1');

    expect(mainImg.src).toContain('src1');
    userEvent.click(miniImgSrc3);
    expect(mainImg.src).toContain('src3');
    userEvent.click(miniImgSrc1);
    expect(mainImg.src).toContain('src1');
    userEvent.click(miniImgSrc2);
    expect(mainImg.src).toContain('src2');
  });
});
