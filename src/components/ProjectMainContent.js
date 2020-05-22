import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './CodeBlock';

const components = {
  code: CodeBlock
};

const ProjectMainContent = props => {
  const { mdx, project } = props;
  return (
    <>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      {mdx && (
        <MDXProvider components={components}>
          <MDXRenderer project={project}>{mdx}</MDXRenderer>
        </MDXProvider>
      )}
    </>
  );
};

ProjectMainContent.propTypes = {
  mdx: PropTypes.string,
  project: PropTypes.object
};

export default ProjectMainContent;
