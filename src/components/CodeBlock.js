// https://raw.githubusercontent.com/mdx-js/mdx/master/examples/syntax-highlighting/src/components/CodeBlock.js

import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const CodeBlock = ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <div style={{ marginTop: '40px', backgroundColor: 'black' }}>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => `/** @jsx mdx */${code}`}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      theme={undefined}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span className="line-number">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  live: PropTypes.bool,
  render: PropTypes.func,
};
export default CodeBlock;
