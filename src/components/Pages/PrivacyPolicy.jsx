import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Div from '../Div';
import Spacing from '../Spacing';

export default function PrivacyPolicy() {
  pageTitle('Privacy Policy');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Page Heading */}
      <PageHeading
        title="Privacy Policy"
        bgSrc="images/privacy_policy_bg.jpeg"
        pageLinkText="Privacy Policy"
      />

      <Spacing lg="120" md="80" />

      <Div className="container">
        <Div className="row">
          <Div className="col-lg-10 offset-lg-1">

            <SectionHeading title="Privacy Policy" subtitle="Firmelist">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                Last updated: [Add Date]
              </p>
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Firmelist (“we”, “our”, or “us”) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, and
                safeguard your information when you visit our website or use
                our services.
              </p>
            </SectionHeading>

            <Spacing lg="60" md="40" />

            <SectionHeading title="1. Information We Collect">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                We may collect personal information such as your name, email
                address, phone number, company name, and any information you
                submit through contact forms.
              </p>
              <Spacing lg="15" md="10" />
              <p className="cs-m0">
                We also collect non-personal information automatically,
                including IP address, browser type, device information, pages
                visited, and usage data.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="2. How We Use Your Information">
              <Spacing lg="20" md="15" />
              <ul className="cs-list cs-style1">
                <li>To respond to inquiries and provide services</li>
                <li>To improve website functionality and performance</li>
                <li>To communicate updates and service-related information</li>
                <li>To analyze trends and marketing effectiveness</li>
                <li>To maintain security and prevent fraud</li>
              </ul>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="3. Cookies and Tracking Technologies">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                We use cookies and similar technologies to enhance user
                experience, analyze traffic, and improve our website. You can
                disable cookies through your browser settings, though some
                features may not function properly.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="4. Sharing of Information">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                Firmelist does not sell or rent your personal data. We may share
                information with trusted service providers or when required by
                law to protect our rights and comply with legal obligations.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="5. Data Security">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                We implement reasonable security measures to protect your data.
                However, no method of transmission over the internet is
                completely secure, and we cannot guarantee absolute security.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="6. Data Retention">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                We retain personal information only for as long as necessary to
                fulfill the purposes outlined in this policy and comply with
                legal requirements.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="7. Your Rights">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                You may have the right to access, correct, delete, or restrict
                the use of your personal data. To exercise these rights, please
                contact us.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="8. Third-Party Links">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                Our website may contain links to third-party websites. We are
                not responsible for their privacy practices and encourage you
                to review their policies.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="9. Children’s Privacy">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                Our services are not intended for children under 13. We do not
                knowingly collect personal data from children.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="10. Changes to This Policy">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with an updated revision date.
              </p>
            </SectionHeading>

            <Spacing lg="50" md="35" />

            <SectionHeading title="11. Contact Us">
              <Spacing lg="20" md="15" />
              <p className="cs-m0">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <Spacing lg="10" md="10" />
              <p className="cs-m0">
                <strong>Firmelist</strong><br />
                Email: info@firmelist.com<br />
                Website: https://www.firmelist.com
              </p>
            </SectionHeading>

          </Div>
        </Div>
      </Div>

      <Spacing lg="120" md="80" />
    </>
  );
}
