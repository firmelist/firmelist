import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';

const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/terms-of-use',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const serviceMenu = [
  {
    title: 'UI/UX design',
    href: '/service',
  },
  {
    title: 'WP development',
    href: '/service',
  },
  {
    title: 'Digital marketing',
    href: '/service',
  },
  {
    title: 'React development',
    href: '/service',
  },
];

export default function Footer() {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/footer_logo.svg"
                  logoAlt="Logo"
                  text="Since 2011, Firmelist empowers businesses with innovative web development, eCommerce, and digital strategies, driving global brand success."
                />
                <SocialWidget />
              </Div>
            </Div>

            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget
                  menuItems={serviceMenu}
                  menuHeading="Services"
                />
              </Div>
            </Div>

            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>

            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Subscribe with your email to receive exclusive updates, offers, and the latest trends directly to you."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © 2026 Firmelist Technology
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget
              menuItems={copyrightLinks}
              variant="cs-style2"
            />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
