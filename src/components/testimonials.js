import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Root = styled.section`
  display: flex;
  text-align: center;
  max-width: 1072px;
  margin: 40px auto;

  h3 {
    font-size: 30px;
    line-height: 120%;
    color: var(--primary);
    margin: -30px auto 50px;
  }

  h4 {
    font-size: 24px;
    line-height: 120%;
    color: #699fe3;
  }

  .gatsby-image-wrapper {
    max-width: 158px;
    margin: auto;
  }
`
const datas = {
  user: "Tim Law - Simply Plants",
  content:
    "“The process has been easy, uncomplicated and very quick. Their service is excellent with regular contact and support. I highly recommend this company for any business that needs finance.”",
}

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "testimonials.png" }) {
        childImageSharp {
          fluid(maxWidth: 158) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Testimonials = () => (
  <Root>
    <div className="container">
      <Image />
      <h3>{datas.content}</h3>
      <h4>{datas.user}</h4>
    </div>
  </Root>
)

export default Testimonials
