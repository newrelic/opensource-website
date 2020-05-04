import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from './CodeBlock';

const components = {
  code: CodeBlock
};

const ProjectMainContent = props => {
  return (
    <>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      {props.mdx && (
        <MDXProvider components={components}>
          <MDXRenderer project={props.project}>{props.mdx}</MDXRenderer>
        </MDXProvider>
      )}
    </>
  );
};

ProjectMainContent.propTypes = {
  mdx: PropTypes.string
};

export default ProjectMainContent;
