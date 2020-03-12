import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../images/svgs/logo.svg"

const Root = styled.footer`
  display: flex;
  background: linear-gradient(180deg, var(--third) 0%, #0c2444 100%);
  padding: 65px 0 150px;
  color: var(--white);
  text-align: center;

  .logo {
    svg {
      fill: var(--white);

      path {
        fill: var(--white);
      }
    }

    p {
      display: flex;
      font-weight: 300;
      font-size: 13px;
      line-height: 150%;
      max-width: 240px;
      margin: 25px auto 50px;
    }
  }

  nav {
    ul {
      display: flex;
      justify-content: space-between;
      margin: auto;
      padding: 0;
      max-width: 1072px;

      li {
        max-width: 160px;
        list-style: none;
        font-size: 16px;
        line-height: 150%;
        width: 100%;

        a {
          color: #adc8d7;
          text-decoration: none;
          transition: all 0.15s ease;
          padding-bottom: 3px;
          border-bottom: 1px solid transparent;

          &:hover {
            border-bottom: 1px solid #adc8d7;
            transition: all 0.15s ease;
          }
        }
      }
    }
  }

  .disclaimer {
    font-weight: 300;
    font-size: 13px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    max-width: 1072px;
    margin: 100px auto 0;
  }

  @media screen and (max-width: 768px) {
    .disclaimer {
      font-size: 11px;
    }
    nav {
      ul {
        flex-direction: column;
        align-items: center;
        li {
          max-width: inherit;
          margin: 15px 0;
        }
      }
    }
  }
`
const datas = {
  iwoca: "iwoca Ltd, 247 Tottenham Court Road, London, W1T 7QX",
  disclaimer:
    "iwoca Limited is authorised and regulated by the Financial Conduct Authority (reference number: 723378) in relation to regulated credit agreements and are a registered account information service provider (reference number: 791804). We're also registered with the Information Commissioners Office in relation to the processing of personal information (registration number: Z3007540). iwoca Limited is incorporated in England and Wales (company number: 07798925). Our registered office is 10 Queen Street Place, London, EC4R 1AG.",
  menu: [
    { id: 1, name: "Privacy policy", url: "/privacy-policy" },
    { id: 2, name: "Terms of use", url: "/terms-of-use" },
    { id: 3, name: "Use of cookies", url: "/use-of-cookies" },
    { id: 4, name: "Products", url: "/products" },
    { id: 5, name: "Complaint policy", url: "/complaint-policy" },
    { id: 6, name: "Contact us", url: "/contact-us" },
  ],
}

const Footer = ({ siteTitle }) => (
  <Root>
    <div className="container">
      <div className="logo" title={siteTitle}>
        <Logo />
        <p>{datas.iwoca}</p>
      </div>
      <nav>
        <ul>
          {datas.menu.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.url} title={item.name}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="disclaimer">{datas.disclaimer}</div>
    </div>
  </Root>
)

export default Footer
