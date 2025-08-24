import { Box, render, Text } from "ink";
import type { CommandModule } from "yargs";

export const indexCommand: CommandModule = {
  command: "$0",
  describe: "Go for it!",
  handler: () => {
    render(
      <Box>
        <Box borderStyle={"round"}>
          <Text>Go for it!</Text>
        </Box>
      </Box>,
    );
  },
};
