/*
 * Generic utilities
 */
export const isEmptyObject = obj => {
  return !Object.values(obj).some(x => x !== null && x !== '');
};

/*
 * A clunky attempt at creating a reverse mapping from Gatsby's router's `pathname` back to what is generating the content
 * TO DO - Follow-up in Gatbsy support thread(s) to see if we can more directly access the src file or component that is tied to a given location->pathname
 */

const githubBaseUrl =
  'https://github.com/newrelic/opensource-website/tree/develop';

const editLinksMap = {
  '/explore-projects': `${githubBaseUrl}/src/templates/explore-projects.js`,
  '/projects/(.*)': `${githubBaseUrl}/src/data/project-main-content/$match.mdx`,
  '/blog': `${githubBaseUrl}/src/pages/blog.js`
};

export const getEditLinkFromLocation = ({ location }) => {
  const { pathname } = location;

  const result = Object.entries(editLinksMap).reduce(
    (previousValue, [expression, value]) => {
      if (previousValue.link) {
        return previousValue;
      }

      const match = pathname.match(expression);

      if (Array.isArray(match) && match[0]) {
        if (value.indexOf('$match') >= 0) {
          return { link: value, slug: match[1] };
        }
        return { link: value, slug: '' };
      }

      return previousValue;
    },
    { link: false, slug: '' }
  );

  if (result.link) {
    if (result.link.indexOf('$match') >= 0) {
      const link = result.link.replace('$match', result.slug.replace('/', '-'));
      // console.log(`Edit link for this page: ${link}`);
      return link;
    }
    const link = result.link;
    // console.log(`Edit link for this page: ${link}`);
    return link;
  }

  return false;
};
