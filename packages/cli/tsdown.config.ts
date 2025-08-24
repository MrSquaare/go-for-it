import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  banner: {
    js: "#!/usr/bin/env node",
  },
  clean: true,
});
