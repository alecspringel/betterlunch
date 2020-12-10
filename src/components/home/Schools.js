import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const LOGOS = [
  {
    path: require("../../assets/schools/challenger.png"),
    title: "Challenger Logo",
  },

  {
    path: require("../../assets/schools/henderson-international.png"),
    title: "Henderson International Logo",
  },
  {
    path: require("../../assets/schools/faith.png"),
    title: "Faith Lutheran Logo",
  },
  {
    path: require("../../assets/schools/lvds.png"),
    title: "Las Vegas Day School Logo",
  },
  {
    path: require("../../assets/schools/marryhill.png"),
    title: "Marryhill Logo",
  },
]

const Schools = () => {
  var settings = {
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
  }
  return (
    <Slider {...settings}>
      {LOGOS.map(photo => (
        <div>
          <Logo src={photo.path} alt={photo.title} />
        </div>
      ))}
    </Slider>
  )
}

export default Schools

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
`
