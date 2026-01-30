import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/randeep_nzway-removebg-preview.png',
    testimonialText:
      'Firmelist helped us completely transform our digital presence. Their strategic approach to SEO and performance marketing delivered consistent leads and measurable growth. The team is professional, responsive, and genuinely invested in our success.',
    avatarName: 'Randeeep Singh',
    avatarDesignation: 'Founder, Nzwaytransport',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/bipin_sharma.png',
    testimonialText:
      'Working with Firmelist has been an excellent experience. Their creative campaigns and data-driven insights improved our engagement and conversion rates significantly. They understand branding deeply and execute with precision.',
    avatarName: 'Bipin Sharma',
    avatarDesignation: 'Ex-Digital Marketing Manager',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/Joseph_Miller-removebg-preview.png',
    testimonialText:
      'Working with Firmelist has been an excellent experience. Their creative campaigns and data-driven insights improved our engagement and conversion rates significantly. They understand branding deeply and execute with precision.',
    avatarName: 'Joseph Miller',
    avatarDesignation: 'Marketing Head, Mindora AI',
    ratings: '4.5',
  },
  {
    testimonialThumb: '/images/testimonial_1.jpeg',
    testimonialText:
      'Firmelist exceeded our expectations with their digital marketing expertise. Their strategic planning, creative execution, and consistent reporting helped us achieve better visibility and higher-quality leads. A reliable partner for long-term growth.',
    avatarName: 'Ella Joseph',
    avatarDesignation: 'Founder, GlowSocial Media',
    ratings: '4.5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

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
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
