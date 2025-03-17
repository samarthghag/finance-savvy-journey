# Finance Savvy Journey

A comprehensive financial management and education platform designed to help users track expenses, learn financial concepts, and practice investment strategies through a paper trading simulator.

## Features

- **Expense Tracker**: Monitor and categorize your spending habits with an intuitive interface
- **Financial Education**: Access curated resources on investment, mutual funds, and essential financial concepts
- **Paper Trading Simulator**: Practice investment strategies without risking real money

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase
- **State Management**: React Query
- **Routing**: React Router
- **Authentication**: Supabase Auth

## Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/finance-savvy-journey.git
cd finance-savvy-journey
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Setup

Create a `.env` file in the root directory with your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

- `/src`: Main source code directory
  - `/components`: Reusable UI components
  - `/pages`: Page components for each route
  - `/integrations`: External service integrations like Supabase
  - `/lib`: Utility functions and shared libraries
  - `/hooks`: Custom React hooks

## Deployment

You can deploy this project using services like:
- Netlify
- Vercel
- GitHub Pages

For detailed deployment instructions, see our [deployment guide](#).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Supabase](https://supabase.io/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Support

For support, email support@finacesavvyjourney.com or open an issue in the repository.
