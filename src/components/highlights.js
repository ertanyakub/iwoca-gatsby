import React from "react"
import styled from "styled-components"
import Icon1 from "../images/svgs/highlights-02.svg"
import Icon2 from "../images/svgs/highlights-01.svg"
import Icon3 from "../images/svgs/highlights-03.svg"
import CircleSvg from "../images/svgs/circle.svg"
import CircleSmallSvg from "../images/svgs/circle2.svg"

const Root = styled.section`
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    background: var(--light-bg);
    border-radius: 24px;
    padding: 68px 80px;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 32px;
    line-height: 120%;
    position: relative;
    display: flex;
    justify-content: center;
    color: var(--primary);

    &:after {
      border-bottom: 2px solid #699fe3;
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

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 50px;

    .col {
      max-width: 300px;
      width: 100%;
    }
    h3 {
      font-size: 24px;
      line-height: 120%;
    }
    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 150%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;

    .container {
      padding: 60px 20px;
    }

    h2 {
      margin: 0;
    }

    .row {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 70px;
      .col {
        max-width: inherit;
        width: 100%;
        margin-bottom: 20px;
        padding: 0 10px;
      }
    }
  }
`
const Circle = styled.div`
  display: none;
  width: 320px;
  height: 420px;
  position: absolute;
  z-index: 1;
  right: -10px;
  top: 40%;

  path {
    fill: #4d809e;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const Circle2 = styled.div`
  display: none;
  width: 320px;
  height: 420px;
  position: absolute;
  z-index: 1;
  left: -300px;
  top: 10%;

  path {
    fill: #acc8d7;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const CircleSmall = styled.div`
  display: none;
  width: 224px;
  height: 224px;
  position: absolute;
  z-index: 1;
  left: -100px;
  bottom: -100px;

  circle {
    fill: #0c2340;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const datas = {
  title:
    "Running a business, you need funds in hand to be ready for anything. From the everyday orders to making your next big bet.",
  highlights: [
    {
      id: 1,
      title: "Cash or card? Use both",
      content:
        "Funds go straight to your bank account for you to use any way you need. Like paying direct deposits and VAT bills - you can't do that with a credit card.",
    },
    {
      id: 2,
      title: "No fees, ever",
      content:
        "iwoca funds are free until you draw down, and then we just charge interest by the day. There's no annual fees, set up fees or early repayment fees.",
    },
    {
      id: 3,
      title: "Lightning fast service",
      content:
        "You won't need to wait for a card to arrive in the mail. Get approved in hours then start using your funds instantly.",
    },
  ],
}

const icon = id => {
  switch (id) {
    case 1:
      return <Icon1 />
    case 2:
      return <Icon2 />
    case 3:
      return <Icon3 />
    default:
      return <Icon1 />
  }
}

const Highlights = () => (
  <Root>
    <div className="container">
      <h2>{datas.title}</h2>
      <div className="row">
        {datas.highlights.map((item, i) => {
          return (
            <div className="col" key={i}>
              {icon(item.id)}
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          )
        })}
      </div>
    </div>
    <Circle>
      <CircleSvg />
    </Circle>
    <Circle2>
      <CircleSvg />
    </Circle2>
    <CircleSmall>
      <CircleSmallSvg />
    </CircleSmall>
  </Root>
)

export default Highlights
