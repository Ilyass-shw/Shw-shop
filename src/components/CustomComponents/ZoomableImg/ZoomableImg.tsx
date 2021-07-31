import React, { useCallback, useState } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import { MainImg } from './ZoomableImg.component';

interface ZoomableImgProps {
  mainImg: string;
}

const ZoomableImg: React.FC<ZoomableImgProps> = ({ mainImg }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
  return (
    <ControlledZoom
      overlayBgColorEnd={'black'}
      isZoomed={isZoomed}
      onZoomChange={handleZoomChange}
    >
      <MainImg
        data-testid="ZoomableImg"
        loading="lazy"
        src={mainImg}
      />
    </ControlledZoom>
  );
};

export default ZoomableImg;
