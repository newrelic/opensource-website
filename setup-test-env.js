import { createSerializer } from 'jest-emotion';
import * as emotion from '@emotion/react';
import '@testing-library/jest-dom/extend-expect';
import { mockMediaQueryList } from 'use-media/lib/useMedia';

expect.addSnapshotSerializer(createSerializer(emotion));

global.matchMedia = jest.fn().mockImplementation((media) => ({
  ...mockMediaQueryList,
  media,
  match: false,
}));
