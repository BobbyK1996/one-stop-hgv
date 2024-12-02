import { c1Image, cImage, ceImage, cpcImage } from '@/public';
import Bulletpoints from '@components/Bulletpoints';

export const COURSES_CARDS = [
  {
    id: 1,
    imageParams: {
      product: c1Image,
      alt: 'HGC C1',
    },
    title: 'HGC C1',
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
      alt: 'HGC C',
    },
    title: 'HGC C',
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
      alt: 'HGC C+E',
    },
    title: 'HGC C+E',
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
  companyNumber: 11625905,
};
