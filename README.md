# AI-Powered Weather CLI Tool

A simple command-line weather application built with TypeScript, Bun, and the Vercel AI SDK that uses Google's Gemini model to provide weather information.

## Features

- Get weather information for any location
- Powered by Google's Gemini 1.5 Flash model
- Built with TypeScript and Bun
- Uses Zod for schema validation
- Fast and lightweight

## Prerequisites

- [Bun](https://bun.sh/) installed on your system
- Google AI API key (for Gemini model access)

## Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up your Google AI API key as an environment variable:
   ```bash
   export GOOGLE_GENERATIVE_AI_API_KEY="your-api-key-here"
   ```

   Or create a `.env` file in the project root:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your-api-key-here
   ```

## Dependencies

The project uses the following key dependencies:

- `ai` - Vercel AI SDK for LLM integration
- `@ai-sdk/google` - Google AI provider for the AI SDK
- `zod` - TypeScript-first schema validation

Add them to your `package.json`:
```json
{
  "dependencies": {
    "ai": "^3.0.0",
    "@ai-sdk/google": "^0.0.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

## Usage

Run the weather tool from the command line:

```bash
bun run index.ts <location>
```

### Examples

```bash
# Get weather for a city
bun run index.ts "New York"

# Get weather for a city and state
bun run index.ts "San Francisco, CA"

# Get weather for a city and country
bun run index.ts "London, UK"

# Multiple word locations
bun run index.ts "Los Angeles"
```

## How It Works

1. **Command Line Parsing**: The tool accepts location arguments from the command line
2. **Tool Definition**: A weather tool is defined with Zod schema validation for the location input
3. **Mock Weather Data**: The tool generates random temperature data (72°F ± 10°F) for demonstration purposes
4. **AI Integration**: Uses Google's Gemini model to process the weather request and format the response
5. **Output**: Displays either the tool results or the AI-generated text response

## Code Structure

- `weatherTool`: Defines the weather tool with input schema and execution logic
- `main()`: Main function that handles command-line arguments and orchestrates the weather request
- Error handling for robust CLI experience

## Notes

- This is a demonstration tool that generates mock weather data
- In a production environment, you would integrate with a real weather API (e.g., OpenWeatherMap, AccuWeather)
- The temperature is randomly generated between 62°F and 82°F

## License

This project is provided as-is for educational and demonstration purposes.

## Contributing

Feel free to fork this project and adapt it for your needs. Some potential improvements:

- Integrate with a real weather API
- Add more weather parameters (humidity, wind speed, etc.)
- Support for different temperature units
- Weather forecasts and historical data
- Better error handling and validation