import { c1Image, cImage, ceImage, cpcImage } from '@/public';
import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from 'react-icons/ti';

import { SiTrustpilot } from 'react-icons/si';

import Bulletpoints from '@components/Bulletpoints';

export const COURSES_CARDS = [
  {
    id: 1,
    imageParams: {
      product: c1Image,
      alt: 'HGV C1',
    },
    title: 'HGV C1',
    content:
      'Category C1 training covers vehicles heavier than standard vans, like ambulances, delivery trucks, and small HGVs, ideal for roles not needing larger Category C or C+E vehicles.',
    dropdownContent: (
      <Bulletpoints
        bulletpoints={[
          'Driving techniques for vehicles between 3.5 and 7.5 tonnes.',
          'Safety checks and vehicle maintenance.',
          'Manoeuvring in urban and rural environments.',
          'Understanding weight distribution and load security.',
          'Preparation for the Category C1 driving test.',
          'Trainees earn a Category C1 license, qualifying them to drive medium-sized vehicles used by courier services, medical transport providers (e.g., ambulances), and small logistics companies.',
        ]}
      />
    ),
  },
  {
    id: 2,
    imageParams: {
      product: cImage,
      alt: 'HGV C',
    },
    title: 'HGV C',
    content:
      'For beginners looking to start their driving career with rigid vehicles over 7.5 tonnes, excluding trailers, as a foundation before progressing to articulated lorries.',
    dropdownContent: (
      <Bulletpoints
        bulletpoints={[
          'Driving techniques for vehicles over 7.5 tonnes, excluding trailers.',
          'Safe loading and unloading techniques.',
          'Navigating urban and rural routes.',
          'Safety checks and vehicle maintenance.',
          'Preparation for the Category C driving test.',
          'Graduates qualify for driving jobs such as refuse trucks, delivery vehicles, and medium-weight HGVs.',
        ]}
      />
    ),
  },
  {
    id: 3,
    imageParams: {
      product: ceImage,
      alt: 'HGV C+E',
    },
    title: 'HGV C+E',
    content:
      'For trainees targeting heavy articulated vehicles, like lorries, and advanced logistics roles. Covers vehicles over 7.5 tonnes with trailers above 750 kg.',
    dropdownContent: (
      <Bulletpoints
        bulletpoints={[
          'Driving techniques for vehicles over 7.5 tonnes, with trailers exceeding 750kg',
          'Coupling and uncoupling techniques.',
          'Maneuvering with long trailers.',
          'Advanced driving techniques for long-haul trips.',
          'Preparation for the C+E driving test.',
          'Trainees become eligible for jobs involving articulated trucks or HGVs in logistics companies.',
        ]}
      />
    ),
  },
  {
    id: 4,
    imageParams: {
      product: cpcImage,
      alt: 'CPC Courses',
    },
    title: 'CPC Courses',
    content:
      'Mandatory for professional HGV drivers in the UK and EU, this course is essential for meeting legal requirements and includes a combination of theoretical and practical training.',
    dropdownContent: (
      <Bulletpoints
        bulletpoints={[
          'Aimed at meeting legal requirements, this course combines theoretical and practical training.',
          '35 hours of periodic training over five years.',
          'Modules covering driver safety, efficiency, and road regulations.',
          'Focus on reducing fuel consumption and minimizing risks.',
          'Certification allows drivers to work professionally and maintain compliance with legal standards.',
        ]}
      />
    ),
  },
];

export const WHY_CHOOSE_ACCORDION = [
  {
    title: 'Efficient Process Management',
    content:
      'We handle all the paperwork, test bookings, and scheduling, so you can focus on learning.',
  },
  {
    title: 'Experienced Training Partners',
    content:
      'We work with a network of trusted professionals to ensure you get top-quality instruction.',
  },
  {
    title: 'Full Support Throughout',
    content:
      'From securing your medical exam to booking your practical test, we offer ongoing support for a seamless experience.',
  },
  {
    title: 'Career Preparation',
    content:
      'We help you prepare for the next steps, whether it’s securing your first job or preparing for interviews.',
  },
];

export const LOCATION_DETAILS = {
  registeredAddress: 'Your address here',
  companyNumber: 92883761,
};

export const SOCIALS_DATA = [
  // {
  //   logo: <SiTrustpilot />,
  //   href: 'https://www.google.co.uk/',
  //   newTab: true,
  // },
  {
    logo: <TiSocialFacebookCircular />,
    href: 'https://www.facebook.com/profile.php?id=61573622671796',
    newTab: true,
  },
  {
    logo: <TiSocialInstagramCircular />,
    href: 'https://www.instagram.com/roadreadyhgv',
    newTab: true,
  },
];

export const CONTACT_DATA = {
  // address: 'Your address here',
  // addressLink: 'www.google.com',
  email: 'info@roadreadyhgv.com',
  phoneNumber: '0330 043 0030',
};

export const dataArray = [
  {
    header: 'Introduction',
    content: [
      {
        mainContent:
          'These terms and conditions (“Terms”) govern the agreement between Road Ready HGV (“we,” “us,” or “our”) and the individual (“you” or “your”) enrolling in our HGV training programs.',
      },
      {
        mainContent:
          'By booking and attending our courses, you agree to comply with these Terms.',
      },
    ],
  },
  {
    header: 'Eligibility',
    content: [
      {
        mainContent: 'You must meet the following requirements to enroll:',
        subContent: [
          'Be at least 18 years old.',
          'Hold a valid UK driving license or provisional license with the correct HGV entitlement.',
          'Be medically fit to operate heavy goods vehicles, as certified by a DVLA-approved medical examiner.',
        ],
      },
      {
        mainContent:
          'It is your responsibility to ensure you meet these criteria before booking.',
      },
    ],
  },
  {
    header: 'Booking and Payments',
    content: [
      {
        mainContent:
          'A booking is confirmed only upon receipt of a completed application form and payment of the required deposit or full course fee.',
      },
      {
        mainContent:
          'All course fees must be paid in full no later than [X days] before the course start date.',
      },
      {
        mainContent:
          'Payment plans may be available at our discretion. Late payments may result in additional charges or cancellation of your booking.',
      },
    ],
  },
  {
    header: 'Cancellations and Refunds',
    content: [
      {
        mainContent:
          '1.	Cancellations made more than [X days] before the start date: [X]% refund.',
      },
      {
        mainContent: '2.	Cancellations made within [X days]: No refund',
        subContent: [
          'If we cancel or reschedule your course, you will be offered an alternative date or a full refund.',
          'No refunds will be given for failure to attend the course or failure to meet the eligibility requirements.',
        ],
      },
    ],
  },
  {
    header: 'Course Rescheduling',
    content: [
      {
        mainContent:
          'You may request to reschedule your course with at least [X days] notice before the start date, subject to availability. An administration fee of [£X] may apply.',
      },
    ],
  },
  {
    header: 'Course Attendance and Conduct',
    content: [
      {
        mainContent:
          'You must attend all scheduled sessions and adhere to the start and finish times provided.',
      },
      {
        mainContent:
          'If you are late, we may not be able to accommodate you, and no refund will be given.',
      },
      {
        mainContent:
          'You must behave respectfully toward staff and other trainees. Any abusive or disruptive behavior may result in removal from the course without a refund.',
      },
    ],
  },
  {
    header: 'Examinations and Certification',
    content: [
      {
        mainContent:
          'We provide training to prepare you for the HGV driving test; however, we do not guarantee you will pass.',
      },
      {
        mainContent:
          'Additional training and test attempts can be booked at an additional cost.',
      },
    ],
  },
  {
    header: 'Liability',
    content: [
      {
        mainContent: 'We are not responsible for:',
        subContent: [
          'Loss of income or employment opportunities due to failure to pass tests.',
          'Personal property damage or loss during training sessions.',
        ],
      },
      {
        mainContent:
          'Our liability is limited to the total fees paid for your course.',
      },
    ],
  },
  {
    header: 'Data Protection',
    content: [
      {
        mainContent:
          'Your personal information will be handled in accordance with the General Data Protection Regulation (GDPR).',
      },
      {
        mainContent:
          'We may use your data to contact you about your course, certifications, and relevant promotions.',
      },
    ],
  },
  {
    header: 'Amendments to Terms and Conditions',
    content: [
      {
        mainContent:
          'We reserve the right to amend these Terms at any time. Changes will be communicated to you in writing or via email.',
      },
    ],
  },
  {
    header: 'Governing Law',
    content: [
      {
        mainContent:
          'These Terms are governed by the laws of [England and Wales/Scotland/Northern Ireland]. Any disputes shall be subject to the exclusive jurisdiction of the courts of [your jurisdiction].',
      },
    ],
  },
  {
    header: 'Contact Information',
    content: [
      {
        mainContent:
          'For any questions or concerns regarding these Terms, please contact us:',
        subContent: [
          'Email: info@roadreadyhgv.com',
          'Phone: 0330 043 0030',
          'Address: Platinum Suite, Unimix House, Abbey Road, London, NW10 7TR',
        ],
      },
    ],
  },
];
