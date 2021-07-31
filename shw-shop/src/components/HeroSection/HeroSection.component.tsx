import styled from 'styled-components';

export const BackgroundImage = styled.section`
  background: url('https://jonnajintonsweden.com/wp-content/uploads/2020/09/test-header-4-4500x1550.jpg')
    45% / cover no-repeat;
  height: 22.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;

  @media screen and (min-width: 520px) {
    background-position: 25% 25%;
  }
`;

// ============= ============= ============= ============= =============

export const HeroContent = styled.div`
  width: 40vw;
  height: 60%;
  color: #f1f1f1;
`;

// ============= ============= ============= ============= =============

export const HeroText = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital@1&display=swap');

  margin-left: 3vw;
  margin-top: 3vw;

  p {
    padding: 10px 10px 5px 10px;
    font-family: 'Quattrocento Sans', sans-serif;
    font-style: italic;
    text-shadow: 0 0 white;
    font-size: clamp(14px, 17px, 17px);
    width: 55vw;
    max-width: 23.4rem;
  }

  @media screen and (min-width: 364px) and (max-width: 485px) {
    margin-left: 6vw;
    p {
      width: 42vw;
    }
  }
`;

export const FirstPart = styled.p``;

// ============= ============= ============= ============= =============

export const LastPart = styled.p`
  text-align: end;
`;

// ============= ============= ============= ============= =============
