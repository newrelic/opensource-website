import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/PageHeading"
import pageHeadingIconPlaceholder from '../images/page-heading-icon-placeholder.jpg'

const SecondPage = () => (
  <Layout>
    <SEO title="A single project page" />
    <PageHeading
        title="Project Title Here"
        subheader="A nice, 2 line project description. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod."
        icon={pageHeadingIconPlaceholder}
        tags={["Community Project", "Java"]}
      />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
