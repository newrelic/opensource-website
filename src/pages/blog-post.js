import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ArticlePreviews from '../components/ArticlePreviews';

import styles from './blog-post.module.scss';
import chevronIcon from '../images/icon-chevron-right.svg';
import articlePlaceholderImage1 from '../images/article-placeholder-image-1.jpg';
import articlePlaceholderImage2 from '../images/article-placeholder-image-2.jpg';
import articlePlaceholderImage3 from '../images/article-placeholder-image-3.jpg';

const BlogPost = () => {
  const articlePreviews = [
    {
      featuredImage: articlePlaceholderImage1,
      title: 'Why we invest in open source',
      snippet:
        'Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
    },
    {
      featuredImage: articlePlaceholderImage2,
      title: 'Open source in a pandemic',
      snippet:
        'Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
    },
    {
      featuredImage: articlePlaceholderImage3,
      title: 'Shipping around the globe',
      snippet:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo.'
    }
  ];

  return (
    <Layout className="blog-post">
      <SEO title="A single blog post" />
      <PageHeading
        title="The role of open telemetry in modern observability"
        blogMeta="by Joel Worrall on Thursday, April 9, 2020"
      />
      <div className="primary-content">
        <main className={`primary-content-main ${styles.primaryContentMain}`}>
          <p className={styles.leadParagraph}>
            Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula
            porta felis euismod semper. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros. Donec id elit non mi porta gravida at eget
            metus. Curabitur blandit tempus porttitor.
          </p>
          <img src="https://picsum.photos/1000/500" alt="" />
          <p>
            Donec sed odio dui. Donec sed odio dui. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          </p>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus
            vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper
            nulla non metus auctor fringilla. Vestibulum id ligula porta felis
            euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia
            quam venenatis vestibulum.
          </p>
          <p>
            Donec id elit non mi porta gravida at eget metus. Nullam quis risus
            eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue
            laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Donec sed odio dui.
          </p>

          <h3>Donec sed odio dui</h3>
          <blockquote>
            Donec sed odio dui. Donec sed odio dui. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            <cite>Harold Minor</cite>
          </blockquote>

          <h4>Nibh Fermentum</h4>
          <ul>
            <li>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.
            </li>
            <li>Nullam quis risus eget urna mollis ornare vel eu leo.</li>
            <li>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus.
            </li>
          </ul>

          <h4>Malesuada Mattis Fringilla Ridiculus</h4>
          <p>
            Etiam porta sem malesuada magna mollis euismod. Curabitur blandit
            tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.
            Aenean lacinia bibendum nulla sed consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
            dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur
            purus sit amet fermentum. Maecenas sed diam eget risus varius
            blandit sit amet non magna. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros.
          </p>
        </main>
        <aside className="primary-content-aside">
          <div className={styles.relatedProjectsContainer}>
            <h4>Related projects</h4>
            <ul className={styles.relatedProjectsList}>
              <li>
                <a href="#" className={styles.relatedProject}>
                  <img
                    src="#"
                    className={styles.relatedProjectIcon}
                    alt="icon for Project Name"
                  />
                  <span className={styles.relatedProjectName}>
                    Project name
                  </span>
                  <img
                    className={styles.relatedProjectChevron}
                    src={chevronIcon}
                    alt="arrow pointing right"
                  />
                </a>
              </li>
              <li>
                <a href="#" className={styles.relatedProject}>
                  <img
                    src="#"
                    className={styles.relatedProjectIcon}
                    alt="icon for Project Name"
                  />
                  <span className={styles.relatedProjectName}>
                    Project name
                  </span>
                  <img
                    className={styles.relatedProjectChevron}
                    src={chevronIcon}
                    alt="arrow pointing right"
                  />
                </a>
              </li>
              <li>
                <a href="#" className={styles.relatedProject}>
                  <img
                    src="#"
                    className={styles.relatedProjectIcon}
                    alt="icon for Project Name"
                  />
                  <span className={styles.relatedProjectName}>
                    Project name
                  </span>
                  <img
                    className={styles.relatedProjectChevron}
                    src={chevronIcon}
                    alt="arrow pointing right"
                  />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <hr />
      <div className={styles.relatedArticlesContainer}>
        <div className={styles.relatedArticlesHeaderSection}>
          <h3 className={styles.relatedArticlesSectionTitle}>
            Related articles
          </h3>
          <Link to="/blog" className={styles.relatedArticlesMoreLink}>
            view more articles
          </Link>
        </div>
        <ArticlePreviews size="small" articles={articlePreviews} />
      </div>
    </Layout>
  );
};

export default BlogPost;
