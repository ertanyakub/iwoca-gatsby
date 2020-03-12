import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import CircleSvg from "../images/svgs/circle.svg"
import EllipseSvg from "../images/svgs/ellipse.svg"
import CircleSmallSvg from "../images/svgs/circle2.svg"

const Root = styled.section`
  display: flex;
  position: relative;

  h2 {
    font-size: 32px;
    line-height: 120%;
    position: relative;
    display: flex;
    justify-content: center;

    &:after {
      border-bottom: 2px solid #81b4ea;
      content: "";
      display: block;
      margin: 5px 0 0;
      position: absolute;
      box-sizing: border-box;
      bottom: -20px;
      width: 60px;
      letter-spacing: 0.64px;
      line-height: 1;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    padding-top: 40px;
    position: relative;

    .gatsby-image-wrapper {
      margin-left: -40px;
      margin-right: 40px;
      width: 60%;
      max-width: 800px;
      position: relative;
      z-index: 2;
    }
  }

  .row {
    max-width: 550px;
    position: relative;
    z-index: 2;

    &:nth-child(1) .col span {
      color: #699fe3;
    }
    &:nth-child(2) .col span {
      color: #4d809e;
    }
    &:nth-child(3) .col span {
      color: #00b67a;
    }
    .col.bg {
      background: url("data:image/svg+xml;charset=utf8,%3Csvg width='5' height='136' viewBox='0 0 5 136' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='2.5' y1='3' x2='2.50001' y2='133' stroke='%23D9D9D9'/%3E%3Ccircle cx='2.5' cy='2.5' r='2' fill='%23D9D9D9' stroke='%23D9D9D9'/%3E%3Ccircle cx='2.5' cy='133.5' r='2' fill='%23D9D9D9' stroke='%23D9D9D9'/%3E%3C/svg%3E")
        no-repeat;
      background-position: 7px 0;
      min-height: 140px;
    }
    .col {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      span {
        display: flex;
        align-items: center;
        font-size: 32px;
        line-height: 120%;
        font-weight: 700;
        width: 25px;
        margin-right: 20px;
      }
      h3 {
        margin: 6px 0;
      }
      p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        padding-left: 45px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .wrapper .gatsby-image-wrapper {
      display: none;
    }
    .row {
      max-width: inherit;

      .col {
        flex-direction: column;
        align-items: center;

        span {
          font-size: 56px;
          width: 25px;
          margin-right: 0;
        }
        h3 {
          margin: 10px 0;
          font-size: 24px;
        }
        p {
          font-size: 16px;
          padding-left: 0;
          text-align: center;
        }
      }
      .col.bg {
        background: none;
        text-align: center;
      }
    }
  }
`
const Wrapper = styled.div`
  width: 320px;
  height: 420px;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  transform: rotate(180deg);

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Ellipse = styled.div`
  width: 242px;
  height: 242px;
  position: absolute;
  z-index: 1;
  left: 100px;
  bottom: -200px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const CircleSmall = styled.div`
  width: 224px;
  height: 224px;
  position: absolute;
  z-index: 1;
  left: 45%;
  bottom: -40px;

  @media screen and (max-width: 768px) {
    left: auto;
    right: -185px;
    bottom: -150px;

    circle {
      fill: var(--primary);
    }
  }
`

const datas = {
  title: "How it works",
  steps: [
    {
      id: 1,
      title: "Apply in minutes",
      content:
        "It takes five minutes from start to finish. We're designed with small businesses in mind, so we'll just need the basics about your business to make a decision.",
    },
    {
      id: 2,
      title: "Use your funds",
      content:
        "We'll approve you based on your business performance. You transfer as much as you need to your bank account, and the funds will typically be in your account in hours.",
    },
    {
      id: 3,
      title: "Repay or top up",
      content:
        "We don't charge early repayment fees: we only charge interest for the days you have the money. If you need more funds, applying for a top up is easy. As your business grows your credit limit will too.",
    },
  ],
}

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "how-it-works.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
const HowItWorks = () => (
  <Root>
    <div className="container">
      <h2>{datas.title}</h2>
      <div className="wrapper">
        <Image />
        <Ellipse>
          <EllipseSvg />
        </Ellipse>
        <CircleSmall>
          <CircleSmallSvg />
        </CircleSmall>
        <div className="content">
          {datas.steps.map((item, i) => {
            return (
              <div className="row" key={i}>
                <div className="col">
                  <span>{item.id}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="col bg">
                  <p>{item.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    <Wrapper>
      <CircleSvg />
    </Wrapper>
  </Root>
)

export default HowItWorks
