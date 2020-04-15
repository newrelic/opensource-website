import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/PageHeading"
import ContributorListing from '../components/ContributorListing'

import pageHeadingIconPlaceholder from '../images/page-heading-icon-placeholder.jpg'
import openIssueIcon from '../images/icon-open-issue.svg'
import chatIcon from '../images/icon-chat.svg'
import tagIcon from '../images/icon-tag.svg'
import commitIcon from '../images/icon-commit.svg'
import prIcon from '../images/icon-pr.svg'
import contributorIcon from '../images/icon-contributor.svg'
import openIssueGreyIcon from '../images/icon-open-issue-grey.svg'
import iconGitHubWhite from '../images/icon-github-white.svg'

import project from '../data/projects/nr1-workload-geoops/project.json'

const projectPage = () => {
  const contributors = [
    {
      name: 'Alex Webb',
      username: 'tinyleopard720',
      avatar: 'https://i.pravatar.cc/120?img=25',
      roles: ['code', 'ideas'],
      profileUrl: 'https://github.com/danielgolden'
    },
    {
      name: 'Savannah Black',
      username: 'sadwolf227',
      avatar: 'https://i.pravatar.cc/120?img=45',
      roles: ['code', 'ideas', 'design'],
      profileUrl: 'https://github.com/danielgolden'
    },
    // {
    //   name: 'Eleanor Edwards',
    //   username: 'redkoala130',
    //   avatar: 'https://i.pravatar.cc/120?img=30',
    //   roles: ['code', 'doc'],
    //   profileUrl: 'https://github.com/danielgolden'
    // },
    {
      name: 'Mitchell Richards',
      username: 'yellowbear776',
      avatar: 'https://i.pravatar.cc/120?img=59',
      roles: ['tool', 'code'],
      profileUrl: 'https://github.com/danielgolden'
    }  
  ]

  return(
    <Layout>
      <SEO title="A single project page" />
      <PageHeading
          title={project.title}
          subheader={project.description}
          icon={pageHeadingIconPlaceholder}
          tags={project.tags}
          hasSeparator
        />
      <div className="primary-content">
        <main className="primary-content-main">
          <h2>Integer posuere erat a ante venenatis</h2>
          <p>
          Donec sed odio dui. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, 
          egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, 
          eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. 
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          
          <h3>Integer posuere erat a ante venenatis</h3>
          <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus 
          mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
          <h3>What people are saying</h3>
          <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus 
          mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <blockquote>
            Vitae enim egestas egestas at gravida arcu, amet in. Facilisis at massa amet, aliquet 
            dui semper. Sit placerat sed et ornare faucibus egestas sit nisl, diam.
            <cite>Leslie Webb</cite>
          </blockquote>
          
          <blockquote>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas 
            faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna.
            <cite>Bildad the Shuhite</cite>
          </blockquote>

          <h3>Mattis risus ultricies</h3>
          <p>
          Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient 
          montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. 
          Donec id elit non mi porta gravida at eget metus.
          </p>
          <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis 
          in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper 
          nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Praesent 
          commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue 
          laoreet rutrum faucibus dolor auctor.
          </p>

          <h3>Top Contributors</h3>
          <p>
          Thanks goes to these wonderful people <Link to="https://allcontributors.org/docs/en/emoji-key">(emoji key)</Link>:
          </p>
          <ContributorListing data={contributors} />
        </main>
        <aside className="primary-content-aside">
          <div className="call-to-action-container">
            <div className="call-to-action-buttons">
              <div className="call-to-action-buttons-container">
                <button className="button-primary"><img src={iconGitHubWhite} alt="GitHub logo"/>Star</button>
                <button className="button-secondary">View GitHub Repo</button>
              </div>
              <small className="call-to-action-support">Need help with the project? <a href="#">Try the support thread</a></small>
            </div>
            <div className="call-to-action-category-specification">
              <h5 className="call-to-action-category"><Link to="/categories">New Relic One Category</Link></h5>
              <p className="call-to-action-description">
                This code is a part of the New Relic One Catalog. It is available for installation and 
                configuration via the New Relic One Homepage. You can install it via the Catalog 
                launcher in New Relic One.
              </p>
            </div>
          </div>

          <h4>Screenshots</h4>
          <img src="https://via.placeholder.com/280x168.png" alt="placeholder image"/>

          <h4>Repo stats</h4>
          <ul className="repo-stats">
            <li className="repo-stat repo-stat-contributors">
              <img src={contributorIcon} alt="contributor icon" className="repo-stat-icon" />
              <span className="repo-stat-count">12</span>
              <span className="repo-stat-label">Contributors</span>
            </li>
            <li className="repo-stat repo-stat-releases">
              <img src={tagIcon} alt="release icon" className="repo-stat-icon" />
              <span className="repo-stat-count">2</span>
              <span className="repo-stat-label">Releases</span>
            </li>
            <li className="repo-stat repo-stat-commits">
              <img src={commitIcon} alt="commit icon" className="repo-stat-icon" />
              <span className="repo-stat-count">298</span>
              <span className="repo-stat-label">Commits</span>
            </li>
            <li className="repo-stat repo-stat-pull-requests">
              <img src={prIcon} alt="pull request icon" className="repo-stat-icon" />
              <span className="repo-stat-count">2</span>
              <span className="repo-stat-label">Open Pull Requests</span>
            </li>
            <li className="repo-stat repo-stat-issues">
              <img src={openIssueGreyIcon} alt="open issue icon" className="repo-stat-icon" />
              <span className="repo-stat-count">19</span>
              <span className="repo-stat-label">Open Issues</span>
            </li>
          </ul>

          <div className="aside-header-item">
            <h4>Good first issues</h4>
            <a href="#" className="aside-header-item-button">View all</a>
          </div>

          <a href="#" className="project-page-issue">
            <div className="project-page-issue-header">
              <img src={openIssueIcon} alt="Open Issue Icon" className="project-page-issue-header-icon"/>
              <h5 className="project-page-issue-header-title">Allow backoff times to be user configured quis tortor orci. Etiam at risus et justo dignissim.</h5>
            </div>
            <footer className="project-page-issue-footer">
              <small className="project-page-issue-footer-meta">#126 opened on 2 Mar by breedx-nr</small>
              <div className="project-page-issue-footer-discussion">
                <img src={chatIcon} alt="Chat Icon" className="project-page-issue-footer-discussion-icon"/>
                <span className="project-page-issue-footer-discussion-count">2</span>
              </div>
            </footer>
          </a>
          <a href="#" className="project-page-issue">
            <div className="project-page-issue-header">
              <img src={openIssueIcon} alt="Open Issue Icon" className="project-page-issue-header-icon"/>
              <h5 className="project-page-issue-header-title">Issue title</h5>
            </div>
            <footer className="project-page-issue-footer">
              <small className="project-page-issue-footer-meta">#126 opened on 2 Mar by breedx-nr</small>
              <div className="project-page-issue-footer-discussion">
                <img src={chatIcon} alt="Chat Icon" className="project-page-issue-footer-discussion-icon"/>
                <span className="project-page-issue-footer-discussion-count">2</span>
              </div>
            </footer>
          </a>
          <a href="#" className="project-page-issue">
            <div className="project-page-issue-header">
              <img src={openIssueIcon} alt="Open Issue Icon" className="project-page-issue-header-icon"/>
              <h5 className="project-page-issue-header-title">Issue title</h5>
            </div>
            <footer className="project-page-issue-footer">
              <small className="project-page-issue-footer-meta">#126 opened on 2 Mar by breedx-nr</small>
              <div className="project-page-issue-footer-discussion">
                <img src={chatIcon} alt="Chat Icon" className="project-page-issue-footer-discussion-icon"/>
                <span className="project-page-issue-footer-discussion-count">2</span>
              </div>
            </footer>
          </a>
        </aside>
      </div>
    </Layout>
  )
}

export default projectPage
