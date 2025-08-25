import "cli-testing-library/vitest";

import { configure } from "cli-testing-library";

// Increase render await time on CI as it can be slower
configure({
  renderAwaitTime: process.env.CI ? 5000 : 1000,
});

// Support for Vitest VS Code extension
process.env.PATH = `${__dirname}/node_modules/.bin:${process.env.PATH}`;
