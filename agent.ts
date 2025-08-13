import { generateText } from "ai"
import { google } from '@ai-sdk/google'
import "dotenv/config";

const { text } = await generateText({
    model: google("models/gemini-2.0-flash-exp"),
    prompt: 'what is tool calling'
})

console.log(text);