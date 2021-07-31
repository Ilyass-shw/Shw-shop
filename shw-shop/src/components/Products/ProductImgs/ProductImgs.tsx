import React, { useEffect, useRef, useState } from 'react';
import { setNextImg } from './helpers';
import { ItemImage, ItemImages } from './ProductImgs.component';
import HoverBarWrapper from '../../CustomComponents/HoverBarWrapper/HoverBarWrapper/HoverBarWrapper';
import { useWindowWidth } from '../../../helpers/useWindowWidth';
import { nanoid } from '@reduxjs/toolkit';

interface productImgs {
  imgs: string[];
  alt: string;
  isOnHover: boolean;
  isVisible: boolean;
}

const ProductImgs: React.FC<productImgs> = ({
  imgs,
  alt,
  isOnHover,
  isVisible,
}) => {
  const [currentImg, setCurrentImg] = useState(0);

  const img = useRef<HTMLImageElement>(null);
  const imgsNumber = imgs.length;
  let timeout: ReturnType<typeof setTimeout>;
  const isOnMobile = useWindowWidth() < 957;

  useEffect(() => {
    // slide imgs when product is visible on mobile
    // and on hover on bigger screens.
    if ((isVisible && isOnMobile) || (isOnHover && !isOnMobile)) {
      timeout = setTimeout(() => setNextImg(setCurrentImg, imgsNumber), 1500);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      // We want to reslide to the first img in two cases:
      // -when product is out and back again in viewport, on mobiles.
      // -when user hovers again on the product, on bigger screens.
      if ((!isVisible && isOnMobile) || (!isOnMobile && !isOnHover)) {
        setCurrentImg(0);
      }
    };
  }, [currentImg, imgsNumber, isVisible, isOnMobile, isOnHover]);

  return (
    <HoverBarWrapper
      repeate={'infinite'}
      imgNumber={imgsNumber}
      active={(isVisible && isOnMobile) || (isOnHover && !isOnMobile)}
    >
      <ItemImages data-testid="product-images">
        {imgs.map((src, index) => (
          <ItemImage
            loading="lazy"
            alt={alt}
            ref={img}
            src={src}
            key={nanoid()}
            currentImgg={imgs[currentImg] === src}
            index={index}
          />
        ))}
      </ItemImages>
    </HoverBarWrapper>
  );
};

export default ProductImgs;
