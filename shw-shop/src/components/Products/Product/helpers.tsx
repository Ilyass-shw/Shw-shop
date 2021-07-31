import { isInViewport } from '../../../helpers/isInViewport';

export const handleScroll = (
  img: Element | null | undefined,
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  // we need to make sure img.current in defined
  // before using it in isInViewport as the latter
  // accepts type Element only
  if (img) {
    setIsVisible(isInViewport(img));
  }
};
