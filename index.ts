import { number, z } from "zod";
import { generateText, tool } from "ai";
import { google } from "@ai-sdk/google";


const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

const weatherTool = tool({
  name: "weather",
  description: "Get the real weather in a location using OpenWeather API",
  inputSchema: z.object({
    location: z.string().describe("The location to get the weather for"),
  }),
  execute: async ({ location }) => {
    const geo = await getGeoLocation(location);
    if (geo) {
      await getWeather(geo.lat, geo.lon)
    }
  }
});

async function getGeoLocation(location: string): Promise<{ name: string, lat: number, lon: number } | undefined> {
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    location
  )}&limit=1&appid=${OPENWEATHER_API_KEY}`;

  const geoRes = await fetch(geoUrl);

  if (!geoRes.ok) throw new Error(`Geocoding API error: ${geoRes.statusText}`);
  const result = (await geoRes.json()) as { name: string, lat: number, lon: number }[];

  if (!result.length) {
    throw new Error(`No location found for "${location}"`);
  }
  return result[0];
}

async function getWeather(lat: number, lon: number) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;

  const weatherRes = await fetch(weatherUrl);
  if (!weatherRes.ok) throw new Error(`Weather API error: ${weatherRes.statusText}`);

  const data = await weatherRes.json();
  return data;
}



