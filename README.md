# Client Management System

A full-stack application for managing client information and tasks, featuring a modern React frontend and a robust ASP.NET Core backend API.

## Project Structure

```
root/
├── backend/    # ASP.NET Core 8.0 REST API
├── frontend/   # React 19 client application
└── README.md   # Main project documentation (this file)
```

## Features

- View and manage client information
- Track and update client tasks
- Fast, responsive UI with modern design
- RESTful API with robust error handling
- Optimized data loading for performance

---

## Backend: Client API ([details](backend/README.md))
- **Tech:** ASP.NET Core 8.0, C# 12
- **Location:** `backend/`
- **Description:** Provides RESTful endpoints for client and task management, with mock data and simulated network delay for development.
- **How to Run:**
  1. `cd backend`
  2. `dotnet restore`
  3. `dotnet run`
  4. API available at `http://localhost:5000`

---

## Frontend: Client Management App ([details](frontend/README.md))
- **Tech:** React 19, Axios, CSS
- **Location:** `frontend/`
- **Description:** Modern, responsive UI for selecting clients, viewing details, and managing tasks. Optimized for fast initial load.
- **How to Run:**
  1. `cd frontend`
  2. `npm install`
  3. `npm start`
  4. App available at `http://localhost:3000`

---

## High-Level Architecture

```
+-------------------+         HTTP (REST)         +-------------------+
|   React Frontend  |  <----------------------->  |   ASP.NET Backend |
|  (frontend/)      |        API calls           |   (backend/)      |
+-------------------+                            +-------------------+
         |                                                 |
         |<---------- Localhost (CORS enabled) ------------>|
```

- The frontend fetches client names/IDs for dropdowns, then loads full details on selection.
- Task status updates are sent to the backend and reflected in the UI immediately.

---

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd [project-root]
   ```
2. **Start the backend:**
   ```bash
   cd backend
   dotnet restore
   dotnet run
   ```
3. **Start the frontend:**
   ```bash
   cd frontend
   npm install
   npm start
   ```
4. **Open your browser:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

---

## More Information
- [Backend README](backend/README.md): API endpoints, data models, and backend setup
- [Frontend README](frontend/README.md): UI features, scripts, and frontend setup

---

## License
MIT 