import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'

export default function SeoServices() {
  pageTitle('UI/UX Design Services')
  const params = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero */}
      <PageHeading 
        title='UI & UX Design Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={params.serviceDetailsId}
      />

      <Spacing lg='145' md='80'/>

      {/* Process */}
      <Div className="container">
        <SectionHeading 
          title='Our UI/UX Design Process' 
          subtitle='How We Work' 
          variant='cs-style1 text-center'
        />

        <Spacing lg='90' md='45'/>

        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='User Research & Discovery'
              subtitle='We analyze user behavior, business goals, and competitors to understand real user needs and identify design opportunities.'
            />
            <Spacing lg='30' md='30'/>
          </Div>

          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Wireframing & UX Flow'
              subtitle='Clear wireframes and user flows help us define structure, navigation, and interactions before visual design begins.'
            />
            <Spacing lg='30' md='30'/>
          </Div>

          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='UI Design & Prototyping'
              subtitle='We craft visually engaging interfaces and interactive prototypes to test usability, refine details, and validate the experience.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>

      <Spacing lg='120' md='50'/>

      {/* Services List */}
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img 
                src="/images/service_img_1.jpeg" 
                alt="UI UX Design Service" 
                className='cs-radius_15 w-100' 
              />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>

          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              Our UI/UX Design Services
            </h2>

            <Spacing lg='50' md='30'/>

            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Website UI/UX Design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>

                <Button btnLink='/service/service-details' btnText='Mobile App UI/UX Design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>

                <Button btnLink='/service/service-details' btnText='SaaS Product Design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>

                <Button btnLink='/service/service-details' btnText='Dashboard & Admin Panels' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>

                <Button btnLink='/service/service-details' btnText='Landing Page Design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>

              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='UX Audit & Redesign' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>

                <Button btnLink='/service/service-details' btnText='Design System Creation' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>

                <Button btnLink='/service/service-details' btnText='Wireframes & Prototypes' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>

                <Button btnLink='/service/service-details' btnText='Usability Testing' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg='150' md='80'/>

      {/* Testimonials */}
      <TestimonialSlider />

      <Spacing lg='145' md='80'/>

      {/* FAQ */}
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>

        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Frequently Asked Questions' 
                subtitle='UI/UX Design FAQs'
              />
              <Spacing lg='90' md='45'/>
            </Div>

            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg='150' md='80'/>

      {/* CTA */}
      <Div className="container">
        <Cta 
          title='Let’s design something <br /><i>impactful</i> together'
          btnText='Hire a UI/UX Designer' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
