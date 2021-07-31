import styled from 'styled-components';
import { CustomButton } from '../../App/App.component';

export const SeparatorSection = styled.section`
  margin: 3.4rem 0;
  padding: 5rem;
  background-color: black;
`;

// ============= ============= ============= ============= =============
export const FooterContainer = styled.section`
  height: 11rem;
`;

// ============= ============= ============= ============= =============

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: 20rem;
  flex-wrap: wrap;
`;

// ============= ============= ============= ============= =============

export const IconRing = styled(CustomButton)`
  border-radius: 50%;
  background-color: white;
  padding: 0.6rem;
  margin: 0.4rem;
  border: 0.17rem solid black;
`;

// ============= ============= ============= ============= =============

export const SiteSection = styled.section`
  margin: auto;
  max-width: 28rem;
  padding: 1rem 0.1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

// ============= ============= ============= ============= =============

export const Site = styled(CustomButton)`
  font-size: small;
  padding: 0.4rem;
`;

// ============= ============= ============= ============= =============

export const Copyright = styled.p`
  margin: auto;
  font-size: x-small;
  width: fit-content;
  padding-bottom: 0.2rem;
`;
