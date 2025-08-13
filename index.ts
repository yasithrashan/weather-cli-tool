import { z } from "zod";
import { generateText, tool } from "ai";
import { google } from "@ai-sdk/google";

const weatherTool = tool({
  name: "weather",
  description: "Get the weather in a location",
  inputSchema: z.object({
    location: z.string().describe("The location to get the weather for"),
  }),

  execute: async ({ location }) => {
    const temperature = 72 + Math.floor(Math.random() * 21) - 10;
    return {
      location,
      temperature,
    }
  },
});

async function main() {
  try {
    const args = process.argv.slice(2);
    if (args.length === 0) {
      console.log("usage: bun run index.ts <location>");
      return;
    }
    const location = args.join(" ");

    console.log(`Getting weather for: ${location}`);

    const result = await generateText({
      model: google("gemini-1.5-flash-latest"),
      tools: { weather: weatherTool },
      prompt: `Use the weather tool to tell me the weather in ${location}.`,
    });

    if (result.toolResults.length > 0) {
      for (const toolResult of result.toolResults) {
        console.log(`Tool "${toolResult.toolName}" returned:`, toolResult.output);
      }
    } else {
      console.log("Text:", result.text);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}


main();