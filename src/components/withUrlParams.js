// withUrlParams.js

import React from 'react';
import { Location } from '@reach/router';
import queryString from 'query-string';

const withUrlParams = (ComponentToWrap) => (props) =>
  (
    <Location>
      {({ location, navigate }) => (
        <ComponentToWrap
          {...props}
          location={location}
          navigate={navigate}
          urlParams={location.search ? queryString.parse(location.search) : {}}
        />
      )}
    </Location>
  );

export default withUrlParams;
