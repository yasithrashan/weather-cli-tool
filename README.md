# Weather CLI Tool

A simple command-line weather application that fetches real-time weather data using the OpenWeather API and Google's Gemini AI model.

## Features

- Get current weather information for any location worldwide
- Uses OpenWeather API for accurate, real-time data
- Powered by Google's Gemini 2.0 Flash AI model for natural language responses
- Simple command-line interface
- Automatic geocoding to convert location names to coordinates

## Prerequisites

- [Bun](https://bun.sh/) runtime
- OpenWeather API key
- Google AI API access

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yasithrashan/weather-cli-tool
```

2. Install dependencies:
```bash
bun install
```

3. Set up your environment variables:
Create a `.env` file in the root directory:
```env
OPENWEATHER_API_KEY=your_openweather_api_key_here
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here
```

## Getting API Keys

### OpenWeather API Key
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the API keys section
4. Copy your API key

### Google AI API Key
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Create a new project or use an existing one
3. Generate an API key
4. Copy your API key

## Usage

Run the application with a location as an argument:

```bash
bun run . "New York"
bun run . "London, UK"
bun run . "Tokyo, Japan"
bun run . "Paris"
```

### Examples

```bash
# Get weather for a city
bun run . "San Francisco"

# Get weather for a city with country
bun run . "Berlin, Germany"

# Get weather for a specific location
bun run . "Central Park, New York"
```

## Dependencies

- `zod` - Schema validation
- `ai` - AI SDK for tool integration
- `@ai-sdk/google` - Google AI SDK integration

## How It Works

1. The application takes a location argument from the command line
2. Uses the OpenWeather Geocoding API to convert the location name to coordinates
3. Fetches current weather data using the OpenWeather API
4. The Gemini AI model processes the weather data and provides a natural language response
5. The formatted weather information is displayed in the terminal

## Error Handling

The application includes error handling for:
- Missing location argument
- Invalid locations
- API connection issues
- Missing API keys

## API Rate Limits

- OpenWeather free tier: 1,000 calls/day, 60 calls/minute
- Google AI: Check your specific plan limits

## License

[MIT License](LICENSE)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For issues and questions, please open an issue in the GitHub repository.