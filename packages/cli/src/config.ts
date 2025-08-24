import { loadConfig } from "unconfig";

export type GoForItConfig = {
  hello?: {
    loud?: boolean | undefined;
  };
};

export const { config } = await loadConfig<GoForItConfig>({
  sources: [
    {
      files: ["go-for-it.config", "gfi.config"],
      extensions: ["ts", "js", "mjs", "cjs"],
    },
  ],
  defaults: {
    hello: {
      loud: false,
    },
  },
});
