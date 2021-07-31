import styled, { css } from 'styled-components';

export const SummaryContainer = styled.aside`
  background-color: #fafafa;
  border-block: 1px solid #e6e6e6;

  @media screen and (min-width: 1200px) {
    position: fixed;
    width: 37vw;
    right: 0;
    top: 0;
    height: 100vh;
    border: 1px solid #e6e6e6;
  }
`;

// ============= ============= ============= ============= =============

export const SummaryContent = styled.div`
  max-width: 38rem;
  margin: auto;
  padding: 0 1rem;
  @media screen and (min-width: 1200px) {
    padding: 4rem 2rem;
  }
`;

// ============= ============= ============= ============= =============

const collapsing = css`
  position: relative;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
`;

export const Summary = styled.div<{ show: boolean }>`
  margin: auto;
  max-width: 40rem;
  transition: max-height 0.55s ease, opacity 0.6s ease-in;
  max-height: 1000px;
  overflow: ${({ show }) => (show ? 'visible' : 'hidden')};
  ${({ show }) => (show ? collapsing : '')}
`;
