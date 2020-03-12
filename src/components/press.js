import React from "react"
import styled from "styled-components"
import Logo1 from "../images/svgs/press-01.svg"
import Logo2 from "../images/svgs/press-02.svg"
import Logo3 from "../images/svgs/press-03.svg"
import Logo4 from "../images/svgs/press-04.svg"
import Logo5 from "../images/svgs/press-05.svg"

const Root = styled.footer`
  display: flex;
  text-align: center;
  padding: 220px 0 300px;

  h2 {
    font-size: 32px;
    line-height: 120%;
    position: relative;
    display: flex;
    justify-content: center;

    &::after {
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

  .press {
    display: grid;
    grid-template-columns: 210px 210px 210px;
    grid-template-rows: 60px 60px;
    grid-auto-flow: row;
    margin: 60px auto;
    justify-content: center;
    grid-gap: 0 33px;

    svg {
      justify-self: center;
      align-self: center;

      &:nth-child(1) {
        grid-column: 1;
        grid-row: 1;
      }

      &:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
      }
      &:nth-child(3) {
        grid-column: 2;
        grid-row: 1 / 3;
      }
      &:nth-child(4) {
        grid-column: 3;
        grid-row: 1;
      }
      &:nth-child(5) {
        grid-column: 3;
        grid-row: 2;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 120px 0 200px;

    .press {
      grid-template-columns: 260px;
      grid-template-rows: 60px 60px 60px 60px 120px;
      grid-gap: 15px;

      svg {
        &:nth-child(1) {
          grid-column: 1;
          grid-row: 1;
        }
        &:nth-child(2) {
          grid-column: 1;
          grid-row: 2;
        }

        &:nth-child(3) {
          grid-column: 1;
          grid-row: 5;
        }

        &:nth-child(4) {
          grid-column: 1;
          grid-row: 3;
        }

        &:nth-child(5) {
          grid-column: 1;
          grid-row: 4;
        }
      }
    }
  }
`
const datas = {
  title: "Loved by small businesses (and big names)",
  brands: [
    { id: 1, brand: "Brand 1" },
    { id: 2, brand: "Brand 2" },
    { id: 3, brand: "Brand 3" },
    { id: 4, brand: "Brand 4" },
    { id: 5, brand: "Brand 5" },
  ],
}

const image = id => {
  switch (id) {
    case 1:
      return <Logo1 key={id} />
    case 2:
      return <Logo2 key={id} />
    case 3:
      return <Logo3 key={id} />
    case 4:
      return <Logo4 key={id} />
    case 5:
      return <Logo5 key={id} />
    default:
      return <Logo1 key={6} />
  }
}

const PressCom = () => (
  <Root>
    <div className="container">
      <h2>{datas.title}</h2>
      <div className="press">{datas.brands.map(item => image(item.id))}</div>
    </div>
  </Root>
)

export default PressCom
