import React, { useEffect, useState, createElement } from 'react';
import PropTypes from 'prop-types';

import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { evaluateSync } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

import CodeBlock from './CodeBlock';

const components = {
  code: CodeBlock,
};

const ProjectMainContent = (props) => {
  const [JsxMdx, setJsxMdx] = useState(null);
  const { mdx } = props;

  useEffect(() => {
    const MDXContent = evaluateSync(mdx, {
      ...runtime,
      useMDXComponents,
    });
    setJsxMdx(MDXContent);
  }, []);

  return (
    <>
      {JsxMdx && (
        <MDXProvider components={components}>
          {createElement(JsxMdx.default)}
        </MDXProvider>
      )}
    </>
  );
};

ProjectMainContent.propTypes = {
  mdx: PropTypes.string,
};

export default ProjectMainContent;
