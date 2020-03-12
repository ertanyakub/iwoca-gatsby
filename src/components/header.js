import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../images/svgs/logo.svg"
import Phone from "../images/svgs/tel.svg"

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto 0;
  }

  .tel {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 10px;
    }

    a {
      color: var(--third);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.15s ease;
      font-size: 18px;
      line-height: 150%;
      font-weight: 700;

      &:hover {
        border-bottom: 1px solid var(--third);
        transition: all 0.15s ease;
      }
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    .logo {
      margin: auto;
    }

    .tel {
      display: none;
    }
  }
`

const Header = ({ siteTitle }) => (
  <Root>
    <div className="container">
      <div className="logo">
        <Link to="/" title={siteTitle}>
          <Logo />
        </Link>
      </div>
      <div className="tel">
        <Phone />
        <a href="tel:02037780274">020 3778 0274</a>
      </div>
    </div>
  </Root>
)

export default Header
