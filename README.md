# Idea Collector

A simple web application for collecting, voting on, and managing ideas with notes and file attachments.

## Features

- ✅ Create new ideas with title and description
- ✅ Vote on ideas (moves them up in the list)
- ✅ Add detailed notes to ideas
- ✅ Attach files to ideas
- ✅ Persistent storage using JSON files
- ✅ Docker deployment with persistent volumes
- ✅ Comprehensive unit tests

## Tech Stack

- **Frontend**: Next.js 14 with React and TypeScript
- **Backend**: Next.js API Routes
- **Storage**: JSON files with persistent Docker volumes
- **Styling**: Tailwind CSS with shadcn/ui components
- **Testing**: Jest with React Testing Library
- **Deployment**: Docker with docker-compose

## Getting Started

### Development

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment

1. Build and run with docker-compose:
\`\`\`bash
docker-compose up -d
\`\`\`

2. The application will be available at [http://localhost:3000](http://localhost:3000)

3. Data will be persisted in the `idea-data` Docker volume.

### Manual Docker Build

\`\`\`bash
# Build the image
docker build -t idea-collector .

# Run with persistent volume
docker run -d \
  -p 3000:3000 \
  -v idea-data:/app/data \
  --name idea-collector \
  idea-collector
\`\`\`

## Testing

Run all tests:
\`\`\`bash
npm test
\`\`\`

Run tests in watch mode:
\`\`\`bash
npm run test:watch
\`\`\`

Generate coverage report:
\`\`\`bash
npm run test:coverage
\`\`\`

## API Endpoints

- `GET /api/ideas` - Get all ideas (sorted by votes)
- `POST /api/ideas` - Create a new idea
- `POST /api/ideas/[id]/vote` - Vote on an idea
- `PUT /api/ideas/[id]/notes` - Update idea notes
- `POST /api/ideas/[id]/files` - Upload file attachment

## Data Storage

The application uses JSON files for data persistence:

- `data/ideas.json` - Stores all ideas and metadata
- `data/uploads/` - Stores uploaded file attachments

When deployed with Docker, these files are stored in a persistent volume to ensure data survives container restarts.

## Project Structure

\`\`\`
├── app/
│   ├── api/ideas/          # API routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main application
├── __tests__/              # Test files
├── components/ui/          # shadcn/ui components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── data/                   # Persistent data storage
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose setup
└── jest.config.js          # Jest configuration
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

MIT License
\`\`\`

```dockerignore file=".dockerignore"
node_modules
.next
.git
.gitignore
README.md
Dockerfile
.dockerignore
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.env*.local
coverage
__tests__
jest.config.js
jest.setup.js
