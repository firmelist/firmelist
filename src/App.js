import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import AboutPage from './components/Pages/AboutPage';
import ServicesPage from './components/Pages/ServicesPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import BlogPage from './components/Pages/BlogPage';
import ContactPage from './components/Pages/ContactPage';
import TeamPage from './components/Pages/TeamPage';
import FaqPage from './components/Pages/FaqPage';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import ErrorPage from './components/Pages/ErrorPage';

import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import FreelancerAgencyHome from './components/Pages/FreelancerAgencyHome';
import ArchitectureAgencyHome from './components/Pages/ArchitectureAgencyHome';
import CreativeSolutionHome from './components/Pages/CreativeSolutionHome';
import PersonalPortfolioHome from './components/Pages/PersonalPortfolioHome';

import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import VideoShowcaseHome from './components/Pages/VideoShowcaseHome';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import SeoServices from './components/Pages/SeoServices';

function App() {
  return (
    <Routes>

      {/* MAIN LAYOUT */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<AboutPage />} />
        <Route path="service" element={<ServicesPage />} />
        <Route path="service/:serviceDetailsId" element={<ServiceDetailsPage />} />

        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:portfolioDetailsId" element={<PortfolioDetailsPage />} />

        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="faq" element={<FaqPage />} />

        {/* ✅ PRIVACY POLICY */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* AGENCY HOMES */}
        <Route path="photography-agency" element={<PhotographyAgencyHome />} />
        <Route path="digital-agency" element={<DigitalAgencyHome />} />
        <Route path="marketing-agency" element={<MarketingAgencyHome />} />
        <Route path="freelancer-agency" element={<FreelancerAgencyHome />} />
        <Route path="architecture-agency" element={<ArchitectureAgencyHome />} />
        <Route path="creative-solution" element={<CreativeSolutionHome />} />
        <Route path="personal-portfolio" element={<PersonalPortfolioHome />} />
        <Route path="Seo-services" element={<SeoServices />} />

        <Route path="case-study/:caseStudyDetailsId" element={<CaseStudyDetailsPage />} />
      </Route>

      {/* FULL WIDTH HEADER LAYOUT */}
      <Route
        path="/"
        element={<Layout headerVariant="cs-site_header_full_width" />}
      >
        <Route path="creative-portfolio" element={<CreativePortfolioHome />} />
        <Route path="showcase-portfolio" element={<ShowcasePortfolioHome />} />
        <Route path="case-study-showcase" element={<CaseStudyShowcaseHome />} />
        <Route path="video-showcase" element={<VideoShowcaseHome />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
}

export default App;
