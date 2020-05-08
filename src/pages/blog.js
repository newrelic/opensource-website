import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import ArticlePreviews from '../components/ArticlePreviews';

import styles from './blog.module.scss';
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
    <Layout className="blog-post" fullWidth>
      <SEO title="A single blog post" />
      <PageHeading
        title="Blog Articles"
        subheader="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum."
      />
      <ArticlePreviews articles={articlePreviews} hero />
      <div className="primary-content">
        <main className={styles.recentArticles}>
          <div className={styles.recentArticlesHeaderSection}>
            <h4 className={styles.recentArticleHeaderSectionTitle}>
              Most recent articles
            </h4>
            <Link className={styles.recentArticlesMoreLink}>View all</Link>
          </div>

          <div className={styles.recentArticle}>
            <Link to="/blog-post" className={styles.recentArticleLink}>
              <img
                src="https://picsum.photos/130/212"
                className={styles.recentArticleFeaturedImage}
                alt=""
              />
            </Link>
            <div className={styles.recentArticlePrimaryContent}>
              <Link to="/blog-post" className={styles.recentArticleLink}>
                <h5 className={styles.recentArticleTitle}>
                  Sit volutpat pellentesque non nunc ut
                </h5>
              </Link>
              <p className={styles.recentArticleExcerpt}>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Donec ullamcorper nulla non
                metus auctor fringilla. Maecenas faucibus mollis interdum. Sed
                posuere consectetur est at lobortis. Duis mollis, est non
                commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit.
              </p>
            </div>
          </div>
          <div className={styles.recentArticle}>
            <Link to="/blog-post" className={styles.recentArticleLink}>
              <img
                src="https://picsum.photos/360/612"
                className={styles.recentArticleFeaturedImage}
                alt=""
              />
            </Link>
            <div className={styles.recentArticlePrimaryContent}>
              <Link to="/blog-post" className={styles.recentArticleLink}>
                <h5 className={styles.recentArticleTitle}>
                  Sit volutpat pellentesque non nunc ut
                </h5>
              </Link>
              <p className={styles.recentArticleExcerpt}>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Donec ullamcorper nulla non
                metus auctor fringilla. Maecenas faucibus mollis interdum. Sed
                posuere consectetur est at lobortis. Duis mollis, est non
                commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit.
              </p>
            </div>
          </div>
          <div className={styles.recentArticle}>
            <Link to="/blog-post" className={styles.recentArticleLink}>
              <img
                src="https://picsum.photos/164/122"
                className={styles.recentArticleFeaturedImage}
                alt=""
              />
            </Link>
            <div className={styles.recentArticlePrimaryContent}>
              <Link to="/blog-post" className={styles.recentArticleLink}>
                <h5 className={styles.recentArticleTitle}>
                  Sit volutpat pellentesque non nunc ut
                </h5>
              </Link>
              <p className={styles.recentArticleExcerpt}>
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus. Sed
                posuere consectetur est at lobortis. Donec ullamcorper nulla non
                metus auctor fringilla. Maecenas faucibus mollis interdum. Sed
                posuere consectetur est at lobortis. Duis mollis, est non
                commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default BlogPost;
