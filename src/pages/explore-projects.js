import React from "react"
import { StaticQuery } from "gatsby"
import Layout from "../components/layout"
import PageHeading from '../components/PageHeading'

import searchIcon from '../images/icon-search.svg';
import placeholderIcon from '../images/page-heading-icon-placeholder.jpg';

import styles from './projects.module.scss'

const exploreProjectsPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query ExploreProjectsQuery {
          allProjectsJson(limit: 100) {
            nodes {
              ...exploreProjectsFields
            }
          }
        }
      `}
      render={data => {
        const projects = data.allProjectsJson.nodes;

        const featuredProjects = projects.map((p, i) => {
          if (i < 3) {
            return (
              <div className={styles.featuredProject}>
                <img className={styles.featuredProjectIcon} src={placeholderIcon} alt={`icon for ${p.title}`} />
                <h4 className={styles.featuredProjectTitle}>{p.title}</h4>
                <p className={styles.featuredProjectDescription}>{p.description}</p>
                <a href="#" className={`button ${styles.featuredProjectButton}`}>Read more</a>
                <footer className={styles.featuredProjectFooter}>
                  <span className={styles.featuredProjectFooterLink}>{p.ossCategory.title}</span>
                  <span className={styles.featuredProjectFooterLink}>{p.primaryLanguage}</span>
                </footer>
              </div>
            )
          }
        })

        const projectListing = projects.map(p => {
          return (
            <div className={styles.projectContainer}>
              <header className={styles.projectHeader}>
                <img src={p.icon} alt="icon for" className={styles.projectIcon}/>
                <h5 className={styles.projectTitle}>{p.title}</h5>
              </header>
              <p className={styles.projectDescription}>{p.description}</p>
              <footer className={styles.projectFooter}>
                <span className={styles.projectFooterMeta}>{p.ossCategory.title}</span>
                <span className={styles.projectFooterMeta}>{p.primaryLanguage}</span>
              </footer>
            </div>
          )
        })
        return (
          <>
            <Layout>
          <PageHeading 
            title="Explore our projects" 
            subheader="Projects and products that we're developing in open source" 
          />

          <div className={styles.searchSection}>
            <div className={styles.searchContainer}>
              <img src={searchIcon} alt="search icon" className={styles.searchIcon} />
              <input type="text" placeholder="Search for a project" className={styles.searchInput} />
            </div>
            <div className={styles.searchFilters}>
              <select className={styles.searchFilter}>
                <option label="All Categories" value="" selected />
              </select>
              <select className={styles.searchFilter}>
                <option label="All Project Types" value="" selected />
              </select>
              <select className={styles.searchFilter}>
                <option label="Sort by" value="" selected />
              </select>
            </div>
          </div>

          <div className={styles.featuredProjects}>
            {featuredProjects}
          </div>

          <div className={styles.projectListingContainer}>
            {projectListing}
          </div>
        </Layout>
          </>
        )
      }}
    />
  )
}

export default exploreProjectsPage;