import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from '../components/landing';
import Hours from '../components/hours';
import Header from '../components/header';
// import Contact from '../components/contact';
// import GreyMap from '../components/map';

const IndexPage = () => (
  <Layout>
    <Header nude/>
    <SEO title="Home" />
    <Landing/>
    <Hours/>
    {/* <Contact/>
    <GreyMap/> */}
  </Layout>
)

export default IndexPage
