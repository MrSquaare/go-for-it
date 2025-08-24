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
    },
  ],
  defaults: {
    hello: {
      loud: false,
    },
  },
});
