import { z } from 'zod';
import { generateText, tool } from 'ai';
import { google } from '@ai-sdk/google';

async function main() {
  const result = await generateText({
    model: google("models/gemini-2.0-flash-exp"),
    tools: {
      weather: tool({
        description: 'Get the weather in a location',
        inputSchema: z.object({
          location: z.string().describe('The location to get the weather for'),
        }),
        execute: async ({ location }) => ({
          location,
          temperature: 72 + Math.floor(Math.random() * 21) - 10,
        }),
      }),
    },
    prompt: 'What is the weather in San Francisco?',
  });

  console.log(result.text);
}

main();