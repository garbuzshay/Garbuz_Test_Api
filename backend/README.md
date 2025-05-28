# Client API

A modern, lightweight REST API built with ASP.NET Core 8.0 for managing client information and tasks. This API serves as the backend for the Client Management Application.

## Features

- RESTful API endpoints for client management (all under `/api/clients`)
- Endpoint for fetching only client names/IDs for optimized frontend loading
- Task status tracking and updates
- CORS support for frontend integration
- Simulated network delay for realistic testing
- Mock database with sample client data
- JSON response format
- Error handling and status codes

## Tech Stack

- ASP.NET Core 8.0
- C# 12.0
- Minimal API architecture
- System.Text.Json for JSON serialization
- CORS middleware for cross-origin requests

## Prerequisites

Before you begin, ensure you have the following installed:
- .NET 8.0 SDK
- Visual Studio 2022 or Visual Studio Code with C# extensions
- Git (optional, for version control)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd backend
```

2. Restore dependencies:
```bash
dotnet restore
```

3. Run the application:
```bash
dotnet run
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Get All Clients
- **GET** `/api/clients`
- Returns a list of all clients with their associated tasks
- Response: Array of `ClientDto` objects

### Get Client by ID
- **GET** `/api/clients/{id}`
- Returns a specific client by their ID
- Response: `ClientDto` object
- Status Codes:
  - 200: Success
  - 404: Client not found

### Get Client Names (for dropdown)
- **GET** `/api/clients/names`
- Returns a list of all client IDs and names (for fast dropdown population)
- Response: Array of objects: `{ clientId, name }`

### Update Task Status
- **PUT** `/api/clients/{clientId}/task/{taskId}`
- Updates the completion status of a specific task
- Request Body: `TaskUpdateRequest` object
- Response: Updated `TaskItem` object
- Status Codes:
  - 200: Success
  - 404: Client or task not found

## Data Models

### ClientDto
```csharp
public record ClientDto(string clientId, string name, string email, string phone, TaskItem[] tasks);
```

### TaskItem
```csharp
public record TaskItem(string taskId, string title, bool completed);
```

### TaskUpdateRequest
```csharp
public record TaskUpdateRequest(bool completed);
```

## Project Structure

```
ClientApi/
├── Controllers/           # API controllers
│   └── ClientsController.cs
├── Services/              # Business logic and data access
│   └── ClientService.cs
├── Models/                # Data models
│   ├── ClientDto.cs
│   ├── TaskItem.cs
│   └── TaskUpdateRequest.cs
├── Program.cs             # Main application entry point and API configuration
├── appsettings.json        # Application configuration
├── appsettings.Development.json  # Development-specific configuration
├── ClientApi.csproj        # Project file with dependencies
└── Properties/             # Project properties
```

## How It Works

- On initial load, the frontend calls `GET /api/clients/names` to fetch only the list of client names and IDs for the dropdown. This keeps the initial load fast and lightweight.
- When a user selects a client, the frontend calls `GET /api/clients/{id}` to fetch all details for that client (email, phone, tasks, etc).
- Task status updates are sent via `PUT /api/clients/{clientId}/task/{taskId}` and reflected in the UI immediately.
- This approach optimizes performance and reduces unnecessary data transfer.

## Development

The API includes several development-friendly features:
- Simulated network delay (500ms) for realistic testing
- Mock database with sample client data
- CORS configuration for local development
- Detailed error messages in development mode

## CORS Configuration

The API is configured to accept requests from:
- Origin: `http://localhost:3000` (React frontend)
- Methods: All HTTP methods
- Headers: All headers

## Error Handling

The API implements standard HTTP status codes:
- 200: Successful operation
- 404: Resource not found
- 500: Internal server error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Microsoft for ASP.NET Core
- The .NET community for excellent documentation and support
- All contributors who have helped shape this project 