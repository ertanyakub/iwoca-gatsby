import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Phone from "../images/svgs/tel.svg"
import Email from "../images/svgs/email.svg"

const Root = styled.section`
  display: flex;
  background: var(--light-bg);
  padding: 65px 0;

  .content {
    max-width: 550px;
    margin: auto;
    text-align: center;

    .gatsby-image-wrapper {
      margin-top: -64%;
      max-width: 520px;
      width: 100%;
    }

    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 120%;
    }

    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 150%;
      margin: 35px 0;
    }
  }

  .method {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 18px;
    line-height: 150%;

    svg {
      margin-right: 10px;
    }

    hr {
      width: 100px;
      border: none;
      border-bottom: 2px solid #86b7eb;
      transform: rotate(90deg);
      margin: 50px 0;
      padding: 0;
    }

    .tel,
    .email {
      display: flex;
      margin: 0;
      align-items: center;
    }

    a {
      color: var(--third);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.15s ease;

      &:hover {
        border-bottom: 1px solid var(--third);
        transition: all 0.15s ease;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .method {
      flex-direction: column;

      hr {
        width: 36px;
        transform: rotate(0deg);
        margin: 40px 0;
      }
    }
  }
`
const datas = {
  title: "Questions? Speak to a real person",
  content:
    "Small business loans are all we do, so you'll get straight through to someone who can help, like Lisa – we're not fans of hold music. Call us from Monday to Friday (9am - 6pm). We accept applications over the phone.",
  phone: "020 3778 0274",
  email: "contact@iwoca.co.uk",
}

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "contact-us.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const ContactUs = () => (
  <Root>
    <div className="container">
      <div className="content">
        <Image />
        <h2>{datas.title}</h2>
        <p>{datas.content}</p>
      </div>
      <div className="method">
        <div className="tel">
          <Email />
          <a href={`mailto:` + datas.email}>{datas.email}</a>
        </div>
        <hr />
        <div className="tel">
          <Phone />
          <a href={`tel:` + datas.phone}>{datas.phone}</a>
        </div>
      </div>
    </div>
  </Root>
)

export default ContactUs
