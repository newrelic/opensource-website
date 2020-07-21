import { createSerializer } from 'jest-emotion';
import * as emotion from '@emotion/core';
import '@testing-library/jest-dom/extend-expect';

expect.addSnapshotSerializer(createSerializer(emotion));
