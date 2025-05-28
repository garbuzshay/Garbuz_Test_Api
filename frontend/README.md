# Client Management Application

A modern, responsive React application for managing client information and tasks. This application provides an intuitive interface for viewing client details and managing their associated tasks.

## Features

- Client selection and management (fetches only client names/IDs on initial load for performance)
- Detailed client information display (full details fetched only after selection)
- Task management with status tracking
- Responsive and modern UI design
- Smooth animations and transitions
- Error handling and loading states

## Tech Stack

- React 19.1.0
- Axios for API requests
- Modern CSS features (CSS Variables, Flexbox, Grid)
- React Hooks for state management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
client-app/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── App.js          # Main application component
│   ├── App.css         # Main styles
│   └── index.js        # Application entry point
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## How It Works

- On initial load, the application fetches only the list of client names and IDs from the backend. This populates the client selection dropdown for a fast, lightweight startup.
- When a user selects a client from the dropdown, the app fetches all details for that client (such as email, phone, and tasks) and displays them.
- Task status updates are sent to the backend and reflected in the UI immediately.
- This approach optimizes performance and reduces unnecessary data transfer.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Styling

The application uses a combination of modern CSS features:
- CSS Variables for consistent theming
- Flexbox and Grid for layouts
- Smooth transitions and animations
- Responsive design principles

## Error Handling

The application includes comprehensive error handling:
- API error states
- Loading states with spinners
- User-friendly error messages
- Graceful fallbacks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing framework
- Create React App for the project setup
- All contributors who have helped shape this project
