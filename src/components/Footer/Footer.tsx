import React from 'react';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GrInstagram, GrSnapchat } from 'react-icons/gr';
import { ImYoutube } from 'react-icons/im';
import { IconContext } from 'react-icons';

import {
  SeparatorSection,
  FooterContainer,
  SocialMedia,
  IconRing,
  SiteSection,
  Site,
  Copyright,
} from './Footer.component';

const Footer: React.FC = () => {
  return (
    <>
      <SeparatorSection />
      <FooterContainer>
        <SocialMedia>
          <IconContext.Provider
            value={{
              style: { transform: 'translateY(2px)' },
            }}
          >
            <IconRing>
              <FaFacebookF size="24px" />
            </IconRing>
            <IconRing>
              <GrInstagram size="24px" />
            </IconRing>
            <IconRing>
              <FaTwitter size="24px" />
            </IconRing>
            <IconRing>
              <GrSnapchat size="24px" />
            </IconRing>
            <IconRing>
              <ImYoutube size="24px" />
            </IconRing>
          </IconContext.Provider>
        </SocialMedia>

        <SiteSection>
          <Site>Contact Support</Site>
          <Site>FAQ</Site>
          <Site>Privacy Policy</Site>
          <Site>Shipping & Returns</Site>
          <Site>Terms & Conditions</Site>
        </SiteSection>
        <Copyright>&copy; 2021 Sdw</Copyright>
      </FooterContainer>
    </>
  );
};
export default Footer;
