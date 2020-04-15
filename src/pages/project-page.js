import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeading from "../components/PageHeading"
import ContributorListing from '../components/ContributorListing'
import pageHeadingIconPlaceholder from '../images/page-heading-icon-placeholder.jpg'
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
          Sidebar content
        </aside>
      </div>
    </Layout>
  )
}

export default projectPage
