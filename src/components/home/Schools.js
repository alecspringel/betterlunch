import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Challenger from '../../assets/schools/challenger.png';
import HendersonInternational from '../../assets/schools/henderson-international.png';
import Faith from '../../assets/schools/faith.png';
import LVDS from '../../assets/schools/lvds.png';
import Marryhill from '../../assets/schools/marryhill.png';

const LOGOS = [
  {
    path: Challenger,
    title: 'Challenger Logo',
  },

  {
    path: HendersonInternational,
    title: 'Henderson International Logo',
  },
  {
    path: Faith,
    title: 'Faith Lutheran Logo',
  },
  {
    path: LVDS,
    title: 'Las Vegas Day School Logo',
  },
  {
    path: Marryhill,
    title: 'Marryhill Logo',
  },
];

const Schools = () => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {LOGOS.map((photo) => (
        <div>
          <Logo src={photo.path} alt={photo.title} />
        </div>
      ))}
    </Slider>
  );
};

export default Schools;

const Logo = styled.img`
  max-height: 9.375rem;
  max-width: 18rem;
  opacity: 0.8;
  padding: 0 36px;
  margin: auto;
  object-fit: contain;
  @media (min-width: 28.125rem) {
    max-width: 25rem;
  }
`;
