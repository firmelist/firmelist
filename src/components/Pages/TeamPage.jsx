import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Team from '../Team';
const teamData = [
  {
    memberImage: '/images/Ashish_Kumar_Mishra-removebg-preview.png',
    memberName: 'Ashish Kumar Mishra',
    memberDesignation: 'Paid Media & Conversion Optimization',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/Shailesh_Arya-removebg-preview.png',
    memberName: 'Manshi',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/Rishu_Raj_singh-removebg-preview.png',
    memberName: 'Shreya',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/MD_SAKIB_ANSARI-removebg-preview.png',
    memberName: 'Vanshit Jain',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_3.jpeg',
    memberName: 'Kunal',
    memberDesignation: 'React Developer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_4.jpeg',
    memberName: 'Madhu Bhardwaj',
    memberDesignation: 'WP Developer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_1.jpeg',
    memberName: 'Saurabh',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Neha',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Amreen Anjum',
    memberDesignation: 'Digital Marketing Executive',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Komal Baghel',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Rajan Gupta',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
  {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Himanshu Bansal',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Shiva Basoya',
    memberDesignation: 'Digital Marketing Team Lead',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Mehak Tanwar',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Rishu Raj Singh',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Prateek Thakran',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Ritik Arora',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Versha Ahlawat',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Shailesh Kumar',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Rajesh Yadav',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Kunal Bhardwaj',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Ashish Mishra',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Deepak Pal',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Sahil Gupta',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Kartik Saklani',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Gaurav Lakhera',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Naurang Singh',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Dev Panchal',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Garvit Jain',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Ajay Kumar',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Arvind Kumar',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Sanjay Kumar',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Ruchi Verma',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Pavan Kumar',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Rahul Saini',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Anup Singh',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Sachin Saran',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Jubair Alam',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'MD Sakib Ansari',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
  },
   {
    memberImage: '/images/member_2.jpeg',
    memberName: 'Modhumita Mondal',
    memberDesignation: 'Product Designer',
    memberSocial: {
      linkedin: '/',
    },
    
  },
  
];

export default function TeamPage() {
  pageTitle('Team');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet our awesome <br/>team members"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
