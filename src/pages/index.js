import React from "react"
import { Link, StaticQuery, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OpenTelemetryIcon from '../images/open-telemetry-icon.jpg'
import freeCodeCampIcon from '../images/free-code-camp-icon.jpg'
import tensorFlowIcon from '../images/tensor-flow-icon.jpg'

const IndexPage = () => {
  const projects = [
    {
      title: 'Open Telemetry',
      description: 'New Relic has invested 30 billion hours into the development of Open Telemetry to help provide robust portable telemetry to all.',
      icon: OpenTelemetryIcon,
      githubUrl: 'https://github.com/open-telemetry',
      website: 'https://opentelemetry.io/'
    },
    {
      title: 'freeCodeCamp',
      description: 'New Relic has invested 1,137,000 hours of engineering into freeCodeCamp to help provide educate the next generation engineers.',
      icon: freeCodeCampIcon,
      githubUrl: 'https://github.com/freeCodeCamp/freeCodeCamp',
      website: 'https://www.freecodecamp.org/'
    },
    {
      title: 'TensorFlow',
      description: 'We <3 TensorFlow and plan to continue to invest at least 10,000 weekly into the maintenance of the platform to help train ml mipsums.',
      icon: tensorFlowIcon,
      githubUrl: 'https://github.com/tensorflow',
      website: 'https://www.tensorflow.org/'
    },
  ];
  
  return(
    <Layout fullWidth>
      <SEO title="Home" />
      <div className="hero-container">
        <h2 className="homepage-hero-heading">
        We believe in an open web toward the development of better tools 
        in software for creating a more perfect web.
        </h2>
        <div className="homepage-hero-body">
          <p className="homepage-hero-body-copy">
            This is the place where you track with <a href="#">New Relic</a>’s open source presence. 
            Praesent commodo cursus magna, vel scelerisque nisl <a href="#">consectetur</a> et. 
            Fusce dapibus curus.
          </p>
          <p className="homepage-hero-body-copy">
            Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, 
            <a href="#">vestibulum</a> at eros. Fusce dapibus, tellus ac cursus commodo, tortor.
          </p>
        </div>
      </div>
      <div className="featured-external-projects">
        {projects.map(project => {
          return(
            <div className="featured-external-project" key={project.title}>
              <img className="featured-external-project-icon" src={project.icon} alt={`icon for ${project.title}`} />
              <h4 className="featured-external-project-title">{project.title}</h4>
              <p className="featured-external-project-description">{project.description}</p>
              <a href="#" className="button primary-button featured-external-project-button">Read more</a>
              <footer className="featured-external-project-footer">
                <a className="featured-external-project-footer-link" href={project.githubUrl}>View in Github</a>
                <a className="featured-external-project-footer-link" href={project.website}>
                  Go to website
                </a>
              </footer>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
