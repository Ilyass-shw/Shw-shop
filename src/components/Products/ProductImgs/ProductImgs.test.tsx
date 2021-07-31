import React from 'react';
import { screen, renderWithRouter } from '../../../test-utils/testUtils';
import ProductImgs from './ProductImgs';
import { checkIfAllImgsWereDisplayed } from './helpers';

const imgs = ['src1', 'src2', 'src3'];

describe('ProductImgs', () => {
  it('should render imgs for all src', () => {
    renderWithRouter(
      <ProductImgs
        imgs={imgs}
        isVisible={false}
        isOnHover={false}
        alt="randimg"
      />,
    );

    const Imgs = screen.getAllByAltText('randimg') as HTMLImageElement[];
    expect(Imgs).toHaveLength(3);
    expect(Imgs[0].src).toContain('src1');
    expect(Imgs[1].src).toContain('src2');
    expect(Imgs[2].src).toContain('src3');
  });
  it('should render imgs with the first one is the only visible one', () => {
    renderWithRouter(
      <ProductImgs
        imgs={imgs}
        isVisible={false}
        isOnHover={false}
        alt="randimg"
      />,
    );

    const Imgs = screen.getAllByAltText('randimg') as HTMLImageElement[];
    expect(Imgs[0]).toBeVisible();
    expect(Imgs[1]).not.toBeVisible();
    expect(Imgs[2]).not.toBeVisible();
  });

  it('should display all imgs sequentially on small devices when product is visible', async () => {
    global.innerWidth = 300;
    const { rerender } = renderWithRouter(
      <ProductImgs
        imgs={imgs}
        isVisible={false}
        isOnHover={false}
        alt="randimg"
      />,
    );

    const Imgs = screen.getAllByAltText('randimg');
    expect(Imgs[0]).toBeVisible();
    expect(Imgs[1]).not.toBeVisible();
    expect(Imgs[2]).not.toBeVisible();

    rerender(
      <ProductImgs
        imgs={imgs}
        isVisible={true}
        isOnHover={false}
        alt="randimg"
      />,
    );

    await checkIfAllImgsWereDisplayed();
  }, 30000);

  it('should display all imgs sequentially on bigger devices when product is hoverd on', async () => {
    global.innerWidth = 980;
    const { rerender } = renderWithRouter(
      <ProductImgs
        imgs={imgs}
        isVisible={false}
        isOnHover={false}
        alt="randimg"
      />,
    );

    const Imgs = screen.getAllByAltText('randimg');
    expect(Imgs[0]).toBeVisible();
    expect(Imgs[1]).not.toBeVisible();
    expect(Imgs[2]).not.toBeVisible();

    rerender(
      <ProductImgs
        imgs={imgs}
        isVisible={false}
        isOnHover={true}
        alt="randimg"
      />,
    );

    await checkIfAllImgsWereDisplayed();
  }, 30000);
});
