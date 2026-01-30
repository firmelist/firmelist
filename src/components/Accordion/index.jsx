import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: 'Do you provide AI-powered web development services?',
    answer:
      'Yes, we develop modern, scalable websites integrated with AI capabilities such as automation, personalization, chatbots, performance tracking, and data explainability to enhance user experience and business efficiency.',
  },
  {
    question: 'Do you provide AI-driven digital marketing services?',
    answer:
      'Yes, we offer AI-powered SEO, content generation, campaign automation, performance marketing, analytics, and conversion optimization to deliver measurable marketing results.',
  },
  {
    question: 'Will I receive source code and design files after project completion?',
    answer:
      'Yes, once the project is completed and approved, we provide all finalized source code, design files, and documentation for full ownership and future use.',
  },
  {
    question: 'How do you manage project timelines and communication?',
    answer:
      'We follow an agile process with clear milestones, regular progress updates, and transparent communication to ensure timely delivery and alignment throughout the project.',
  },
  {
    question: 'Do you offer support and maintenance after launch?',
    answer:
      'Yes, we provide ongoing support, performance monitoring, updates, security maintenance, and AI-based enhancements after launch. Support and maintenance services are available based on selected plans and project requirements.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
