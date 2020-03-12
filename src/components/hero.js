import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import TrustpilotDesktop from "../images/svgs/trustpilot.svg"
import TrustpilotMobile from "../images/svgs/press-03.svg"
import Circle from "../images/svgs/circle.svg"

const Root = styled.section`
  display: flex;
  padding: 50px 0 100px;
  position: relative;

  .desktop {
    display: flex;
  }
  .mobile {
    display: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gatsby-image-wrapper {
    display: flex;
    width: 45%;
    max-width: 520px;
    margin-left: 20px;
    position: relative;
    z-index: 2;
  }

  hr {
    border: none;
    border-top: 4px solid #e6e6e6;
    width: 48px;
    border-radius: 4px;
    margin: 100px 0 30px;
  }

  .content {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 56px;
      line-height: 1;
      max-width: 530px;
      color: var(--primary);
      margin: 100px 0 20px;
    }
    p {
      font-size: 18px;
      line-height: 150%;
      max-width: 615px;
      margin: 30px 0 40px;
      font-weight: bold;
    }
    a {
      width: 250px;
      height: 50px;
      background: var(--secondary);
      box-shadow: 0px 15px 35px rgba(112, 112, 112, 0.45);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--white);
      transition: all 0.15s ease;

      &:hover {
        box-shadow: 0px 20px 80px rgba(112, 112, 112, 0.45);
        transition: all 0.25s ease;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: flex;
    }
    .gatsby-image-wrapper {
      display: none;
    }
    hr {
      display: none;
    }

    .content {
      h1 {
        font-size: 32px;
        line-height: 1.2;
        text-align: center;
        margin: 20px auto;
        max-width: inherit;
      }
      p {
        text-align: center;
        max-width: inherit;
      }
      .button {
        margin: 20px auto;
      }
      svg {
        margin: 50px auto 0;
      }
    }
  }
`

const Wrapper = styled.div`
  width: 320px;
  height: 420px;
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 120px;

  @media screen and (max-width: 768px) {
    top: -340px;
    right: -200px;
  }
`
const datas = {
  title: "Smarter than a business credit card",
  content:
    "iwoca is fast and flexible finance custom-designed for small businesses. Get £1,000- £250,000 delivered instantly to your bank account.",
  button: "Check your eligibility",
}

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const HeroBanner = () => (
  <Root>
    <div className="container">
      <div className="content">
        <h1>{datas.title}</h1>
        <p>{datas.content}</p>
        <Link to="#" className="button">
          {datas.button}
        </Link>
        <hr />
        <TrustpilotDesktop className="desktop" />
        <TrustpilotMobile className="mobile" />
      </div>
      <Image />
    </div>
    <Wrapper>
      <Circle />
    </Wrapper>
  </Root>
)

export default HeroBanner
