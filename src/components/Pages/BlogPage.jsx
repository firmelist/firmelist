import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Pagination from '../Pagination';
import PostStyle2 from '../Post/PostStyle2';
import Div from '../Div';
import Sidebar from '../Sidebar.jsx';
import Spacing from '../Spacing';
const postData = [
  {
    thumb: '/images/post_4.jpeg',
    title: 'How Artificial Intelligence Is Transforming Modern Businesses',
    subtitle:
      'Artificial Intelligence (AI) is reshaping the way businesses operate across industries. From automating routine tasks to providing deep insights through data analysis, AI enables companies to work smarter and faster.AI-powered tools help organizations improve decision-making by analyzing large volumes of data in real time. Businesses can predict customer behavior, personalize experiences, and optimize operations with greater accuracy. This not only increases efficiency but also reduces costs and human error.',
    date: '07 Mar 2025',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_5.jpeg',
    title: 'How AI Is Changing the Future of Web Development',
    subtitle:
      'Artificial Intelligence is redefining how modern websites and web applications are built. From automated code generation to intelligent testing, AI enables developers to build faster, smarter, and more scalable digital products.AI-powered tools can analyze user behavior and optimize website layouts, performance, and accessibility in real time. Developers can also use AI to identify bugs, suggest code improvements, and automate repetitive development tasks, allowing teams to focus on innovation rather than manual work.',
    date: '05 Nov 2024',
    category: 'Web Development',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
  {
    thumb: '/images/post_6.jpeg',
    title: 'AI in Painting: Where Technology Meets Artistic Expression',
    subtitle:
      'Artificial Intelligence is transforming the world of painting by opening new possibilities for artistic creation. AI-powered tools can analyze thousands of artworks, learning styles, techniques, and color patterns to generate paintings that blend traditional artistry with modern technology.Artists use AI as a creative assistant to experiment with styles, explore abstract concepts, and visualize ideas faster. From generating digital paintings to enhancing hand-painted artwork, AI helps artists push creative boundaries while maintaining their personal expression.',
    date: '04 May 2024',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/blog-details',
  },
];

export default function BlogPage() {
  pageTitle('Blog');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Blog"
        bgSrc="/images/blog_hero_bg.jpeg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index) => (
              <Div key={index}>
                <PostStyle2
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length > index + 1 && <Spacing lg="95" md="60" />}
              </Div>
            ))}
            <Spacing lg="60" md="40" />
            <Pagination />
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
