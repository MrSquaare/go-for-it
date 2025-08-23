import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.tsx"],
  banner: {
    js: "#!/usr/bin/env node",
  },
  clean: true,
});
