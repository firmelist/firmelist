import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function CaseStudyDetailsPage() {
  pageTitle('Case Study Details');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Case Study Details"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Case Study Details"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Case Study Example: How Acme Tech Boosted Lead Generation by 78% with Firmelist Services"
          subtitle="Marketing"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <img
          src="/images/case_study_img_1.jpeg"
          alt="Thumb"
          className="w-100 cs-radius_15"
        />
        <Spacing lg="140" md="80" />
        <h2 className="cs-font_38 text-center">Case Study Overview</h2>
        <Spacing lg="60" md="45" />
        <p className="cs-m0">
          The primary goal of this project was to develop a results-driven marketing strategy that increased brand visibility, audience engagement, and overall business growth. We focused on understanding customer behavior, identifying market opportunities, and creating a strategy rooted in data and creativity.

Through detailed research and analysis, we uncovered key insights into audience preferences and market trends. This allowed us to design a targeted approach that aligned business objectives with customer expectations, ensuring sustainable and measurable outcomes.
Most challenges arise when brands struggle to connect with the right audience at the right time. By addressing gaps in positioning and messaging, we helped the brand overcome market competition and establish a stronger presence.
          voluptatem sequi nesciunt. Ipsum quia dolor sit amet, consectetur
        </p>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_2.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_3.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
        <Div className="cs-shape_2"></Div>
        <Div className="cs-shape_2"></Div>
        <Div className="container">
          <Spacing lg="145" md="80" />
          <h2 className="cs-font_38 text-center">Case Study Research</h2>
          <Spacing lg="90" md="45" />
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <h3 className="cs-font_30 cs-m0">Marketing strategy</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                Our branding strategy focused on creating a consistent and impactful brand identity. We refined visual elements, tone of voice, and messaging to ensure the brand communicated trust, clarity, and value across all channels. <br />
                <br />
                By aligning the brand’s core values with its visual and verbal identity, we ensured a cohesive experience for customers. Every branding element was carefully crafted to support long-term recognition and credibility. Many brands face difficulties maintaining consistency across platforms. Our approach eliminated these challenges by implementing clear branding guidelines that strengthened the overall market perception.
              </p>
            </Div>
            <Div className="col-lg-6 offset-lg-1 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_4.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
          <Spacing lg="100" md="80" />
          <Div className="row align-items-center">
            <Div className="col-lg-6 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_5.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <h3 className="cs-font_30 cs-m0">Branding guideline</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                The implementation of the marketing and branding strategy delivered strong, measurable results. The brand experienced improved visibility, increased engagement, and a more defined market position.<br />
                <br />
                Key outcomes included:

Higher brand awareness across digital platforms

Improved audience engagement and retention

Stronger brand recognition and consistency

Enhanced customer trust and market credibility
              </p>
            </Div>
          </Div>
          <Spacing lg="150" md="80" />
        </Div>
      </Div>
      <Spacing lg="140" md="80" />
      <Div className="container text-center">
        <Div className="row col-lg-10 offset-lg-1">
          <h2 className="cs-font_38 cs-m0">Result of The Case Study</h2>
          <Spacing lg="60" md="45" />
          <p className="cs-m0">
            The strategic implementation of the marketing and branding plan delivered measurable and impactful results. By aligning business goals with data-driven insights and consistent brand messaging, the project achieved strong performance across key metrics.

The brand experienced a significant improvement in market visibility, allowing it to reach a broader and more relevant audience. Engagement levels increased as users responded positively to the refined messaging and cohesive brand identity across all platforms.
          </p>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
