import React from 'react';
import Div from '../Div';
import './logolist.scss';
const partnerLogos = [
  {
    src: '/images/google-removebg-preview.png',
    alt: 'Partner',
  },
  {
    src: '/images/sem-removebg-preview.png',
    alt: 'Partner',
  },
  {
    src: '/images/slac-removebg-preview.png',
    alt: 'Partner',
  },
  {
    src: '/images/hubs-removebg-preview.png',
    alt: 'Partner',
  },
  {
    src: '/images/mail-removebg-preview.png',
    alt: 'Partner',
  },
];

export default function LogoList() {
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}
