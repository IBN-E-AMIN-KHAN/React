# Job Card Project

A simple React and Vite project that displays a responsive collection of job listing cards. Each card includes a company logo, company name, posting date, role, employment and experience tags, hourly pay, location, and action buttons.

## Features

- Displays ten sample job listings from well-known companies.
- Reusable `Card` component for rendering each listing.
- Responsive wrapping layout with a dark background.
- Company logos loaded from Google's favicon service.
- Save and Apply Now controls, with a bookmark icon from `lucide-react`.

> The Save and Apply Now buttons are currently presentational and do not have click handlers or persistence.

## Tech Stack

- React 19
- Vite
- JavaScript (JSX)
- CSS
- [Lucide React](https://lucide.dev/) for the bookmark icon

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

From this project directory:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Project Structure

```text
04-card-project/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images and other imported assets
│   ├── components/
│   │   └── Card.jsx        # Reusable job card component
│   ├── App.jsx             # Job data and card list
│   ├── App.css             # Optional app stylesheet
│   ├── index.css           # Global and card layout styles
│   └── main.jsx            # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Customizing Listings

The sample listings are defined in the `jobs` array in `src/App.jsx`. Add, remove, or update an object in that array to change the cards shown in the application.

Each listing uses the following fields:

```js
{
  brandLogo,
  companyName,
  postedDate,
  post,
  tag1,
  tag2,
  pay,
  location
}
```

## Notes

- Logo images use remote URLs, so an internet connection may be required for them to load.
- The current project does not include a backend, database, routing, or job application workflow.