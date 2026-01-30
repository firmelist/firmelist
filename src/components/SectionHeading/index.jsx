import React from 'react'
import parse from 'html-react-parser';
import Button from '../Button'
import Spacing from '../Spacing'
import Div from '../Div';

function renderHTML(value) {
  if (typeof value === 'string' && value.length) return parse(value);
  return value || null;
}

export default function SectionHeading({title, subtitle, btnLink, btnText, variant, children}) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      <h3 className="cs-section_subtitle">{renderHTML(subtitle)}</h3>
      <h2 className="cs-section_title">{renderHTML(title)}</h2>
      {children}
      {btnText && (
        <>
          <Spacing lg='45' md='20'/>
          <Button btnLink={btnLink} btnText={btnText}/>
        </>
      )}
    </Div>
  )
}
