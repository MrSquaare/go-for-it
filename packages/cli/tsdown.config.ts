import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/cli.ts"],
  banner: {
    js: "#!/usr/bin/env node",
  },
  clean: true,
});
