import { hello } from "@go-for-it/core";
import { Box, render, Text } from "ink";
import type { CommandModule } from "yargs";

import { config } from "../config.js";

type HelloCommandOptions = {
  name?: string | undefined;
  loud?: boolean | undefined;
};

export const helloCommand: CommandModule<object, HelloCommandOptions> = {
  command: "hello [name]",
  describe: "Say hello",
  builder: (yargs) => {
    return yargs
      .positional("name", {
        describe: "Name to say hello to",
        type: "string",
      })
      .option("loud", {
        alias: "L",
        type: "boolean",
        description: "Say it loud",
        default: config.hello?.loud,
      });
  },
  handler: (argv) => {
    render(
      <Box>
        <Box borderStyle={"round"}>
          <Text>
            {hello(argv.name, {
              loud: argv.loud,
            })}
          </Text>
        </Box>
      </Box>,
    );
  },
};
