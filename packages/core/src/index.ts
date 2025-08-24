import { defu } from "defu";

export type HelloOptions = {
  loud?: boolean | undefined;
};

export const hello = (name = "World", options?: HelloOptions) => {
  const opts = defu(options, { loud: false });

  const message = `Hello, ${name}!`;

  if (opts.loud) {
    return message.toUpperCase();
  }

  return message;
};
