import React from "react"

import Layout from "../components/layout"
import HeroBanner from "../components/hero"
import Testimonials from "../components/testimonials"
import SEO from "../components/seo"
import Press from "../components/press"
import ContactUs from "../components/contact-us"
import Highlights from "../components/highlights"
import HowItWorks from "../components/how-it-works"

const IndexPage = () => (
  <Layout>
    <SEO title="Iwoca" />
    <HeroBanner />
    <Highlights />
    <Testimonials />
    <HowItWorks />
    <Press />
    <ContactUs />
  </Layout>
)

export default IndexPage
