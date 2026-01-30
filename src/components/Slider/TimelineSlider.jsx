import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';
const timelineData = [
  [
    {
      year: '2011',
      name: 'Company Established',
      position: 'Firmelist was founded with a vision to deliver reliable web and digital solutions.',
    },
    {
      year: '2014',
      name: 'Digital Services Expansion',
      position: 'Launched full-scale web development and digital marketing services for growing businesses.',
    },
  ],
  [
    {
      year: '2019',
      name: 'Performance & Analytics Focus',
      position: 'Introduced data-driven marketing strategies and conversion-focused solutions.',
    },
    {
      year: '2022',
      name: 'Full-Stack Digital Transformation',
      position: 'Unified web development, AI-powered marketing, automation, and integrated service model.',
    },
  ],
  [
    {
      year: '2019',
      name: 'Google awards',
      position: 'Website of the day',
      type: 'Mobile exelence',
    },
    {
      year: '2021',
      name: 'CSS awards design',
      position: 'Honorable mention',
      type: 'Desktop exelence',
    },
  ],
];

export default function TimelineSlider() {
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
