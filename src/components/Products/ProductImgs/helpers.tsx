import React from 'react';
import { screen as srn, waitFor } from '../../../test-utils/testUtils';

export const setNextImg = (
  setCurrentImg: React.Dispatch<React.SetStateAction<number>>,
  imgsNumber: number,
): void => {
  setCurrentImg((current) => (current === imgsNumber - 1 ? 0 : current + 1));
};

export const checkIfAllImgsWereDisplayed = async (): Promise<void> => {
  await waitFor(
    () => {
      const Imgs = srn.getAllByAltText('randimg');
      expect(Imgs[0]).not.toBeVisible();
      expect(Imgs[1]).toBeVisible();
      expect(Imgs[2]).not.toBeVisible();
    },
    { timeout: 10000 },
  );
  await waitFor(
    () => {
      const Imgs = srn.getAllByAltText('randimg');
      expect(Imgs[0]).not.toBeVisible();
      expect(Imgs[1]).not.toBeVisible();
      expect(Imgs[2]).toBeVisible();
    },
    { timeout: 10000 },
  );
  await waitFor(
    () => {
      const Imgs = srn.getAllByAltText('randimg');
      expect(Imgs[0]).toBeVisible();
      expect(Imgs[1]).not.toBeVisible();
      expect(Imgs[2]).not.toBeVisible();
    },
    { timeout: 10000 },
  );
};
