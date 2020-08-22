import React from "react"
import { useMediaQuery } from "react-responsive"
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
  const isMobile = useMediaQuery({ maxDeviceWidth: 760 })
  const isDesktop = useMediaQuery({ minDeviceWidth: 1200 })
  const isWide = useMediaQuery({ minDeviceWidth: 1800 })

  var slidesToShow = 1
  var centerMode = true
  if (!isMobile) {
    slidesToShow = 2
    centerMode = false
  }
  if (isDesktop) {
    slidesToShow = 3
  }
  if (isWide) {
    slidesToShow = 4
  }

  console.log(slidesToShow)
  var settings = {
    dots: false,
    slidesToShow,
    autoplay: true,
    autoplaySpeed: 3000,
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
