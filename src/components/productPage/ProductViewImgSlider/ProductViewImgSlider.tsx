import React, { useState } from 'react';
import 'react-medium-image-zoom/dist/styles.css';
import { CustomButton } from '../../../App/App.component';
import ProductViewMainImg from '../ProductViewMainImg/ProductViewMainImg';

import {
  ImgContainer,
  AllImgs,
  ImgBorder,
  Img,
} from './ProductViewImgSlider.component';

interface productViewImgSliderProps {
  imgs: string[];
}
const ProductViewImgSlider: React.FC<productViewImgSliderProps> = ({
  imgs,
}) => {
  const [main, setMain] = useState(0);

  return (
    <ImgContainer>
      <ProductViewMainImg main={main} setMain={setMain} imgs={imgs} />
      <AllImgs data-testid='miniImgs'>
        {imgs.map((src, index) => (
          <CustomButton key={src} onClick={() => setMain(index)}>
            <ImgBorder selected={src === imgs[main]}>
              <Img loading="lazy" src={src} data-testid={'miniImg ' + src} />
            </ImgBorder>
          </CustomButton>
        ))}
      </AllImgs>
    </ImgContainer>
  );
};

export default ProductViewImgSlider;
