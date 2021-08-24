import styled from 'styled-components';

export const ImgContainer = styled.div`
  flex-shrink: 0;
  width: 90vw;
  align-self: center;
  @media screen and (min-width: 916px) {
    width: 60vw;
    display: flex;
    flex-direction: row-reverse;
  }
`;

// ============= ============= ============= ============= =============

export const AllImgs = styled.div`
  padding: 1rem 1rem;
  height: fit-content;
  width: fit-content;
  margin: auto;
  @media screen and (min-width: 916px) {
    padding: 0;
    margin: 0;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// ============= ============= ============= ============= =============

type ImgBorderProps = { selected: boolean };

export const ImgBorder = styled.div<ImgBorderProps>`
  display: flex;
  margin: 0 0.5rem;
  align-items: flex-start;
  border: ${({ selected }) => (selected ? '2.5px solid black' : 'none')};
`;

// ============= ============= ============= ============= =============

export const Img = styled.img`
  width: 11vw;
  margin: 0.5rem;
  @media screen and (min-width: 550px) {
    width: 8vw;
  }
`;
