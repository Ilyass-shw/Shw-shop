import React from 'react';
import { MainImgContainer, Arrow } from './ProductViewMainImg.component';
import ZoomableImg from '../../CustomComponents/ZoomableImg/ZoomableImg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

interface ProductViewMainImgProps {
  main: number;
  setMain: React.Dispatch<React.SetStateAction<number>>;
  imgs: string[];
}
const ProductViewMainImg: React.FC<ProductViewMainImgProps> = ({
  main,
  setMain,
  imgs,
}) => {
  return (
    <MainImgContainer>
      <Arrow
        left={true}
        onClick={() =>
          setMain((current) => (current <= 0 ? imgs.length - 1 : current - 1))
        }
        data-testid="leftArrow"
      >
        <MdKeyboardArrowLeft />
      </Arrow>
      <ZoomableImg mainImg={imgs[main]} />
      <Arrow
        left={false}
        onClick={() =>
          setMain((current) => (current >= imgs.length - 1 ? 0 : current + 1))
        }
        data-testid="rightArrow"
      >
        <MdKeyboardArrowRight />
      </Arrow>
    </MainImgContainer>
  );
};

export default ProductViewMainImg;
