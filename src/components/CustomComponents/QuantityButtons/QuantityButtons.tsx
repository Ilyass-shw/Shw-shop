import React from 'react';
import {
  QuantityBlock,
  QuantityButton,
  Quantity,
} from './QuantityButtons.component';

interface QuantityButtonsProps {
  productID: number;
  productQuantity: number;
  UpdateItemQuantity?: (productID: number, productQuantity: number) => void;
  setItemQuantity?: React.Dispatch<React.SetStateAction<number>>;
}
const QuantityButtons: React.FC<QuantityButtonsProps> = ({
  productID,
  productQuantity,
  UpdateItemQuantity,
  setItemQuantity,
}) => {
  if (setItemQuantity) {
    return (
      <QuantityBlock>
        <QuantityButton
          onClick={() =>
            setItemQuantity((current) => (current > 1 ? current - 1 : 1))
          }
        >
          -
        </QuantityButton>
        <Quantity>{productQuantity}</Quantity>
        <QuantityButton
          onClick={() => setItemQuantity((current) => current + 1)}
        >
          +
        </QuantityButton>
      </QuantityBlock>
    );
  } else if (UpdateItemQuantity) {
    return (
      <QuantityBlock>
        <QuantityButton
          onClick={() =>
            UpdateItemQuantity(
              productID,
              productQuantity > 1 ? productQuantity - 1 : 1,
            )
          }
        >
          -
        </QuantityButton>
        <Quantity>{productQuantity}</Quantity>
        <QuantityButton
          onClick={() => UpdateItemQuantity(productID, productQuantity + 1)}
        >
          +
        </QuantityButton>
      </QuantityBlock>
    );
  } else {
    return <p>failed to render buttons</p>;
  }
};

export default QuantityButtons;
