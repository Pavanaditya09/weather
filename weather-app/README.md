# Weather Climate - Weather Forecast Website

## Project Overview

Weather Climate is a responsive and dynamic weather forecast website built using React.js for the frontend and Node.js for the backend. The project provides accurate and real-time weather updates by integrating various modern tools and APIs.

## Features

- Real-time weather updates for multiple locations.
- User-friendly and responsive interface.
- Backend API for fetching weather data.
- Integration of modern libraries like Axios, TailwindCSS, and more.

---

## Project Structure

### Frontend

The frontend is built with **React.js** and **Vite** for fast and efficient development.

#### Key Components and Libraries

- **React**: Core library for building the UI.
- **Axios**: For API calls to fetch weather data.
- **TailwindCSS**: For modern, responsive styling.
- **React Icons**: For weather-related icons.
- **Luxon**: For date and time formatting.
- **React Loading**: To display loading indicators.

#### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the production-ready code.
- `npm run lint`: Run the ESLint linter.
- `npm run preview`: Preview the production build.

### Backend

The backend is built with **Node.js** and **Express.js**.

#### Key Libraries

- **Express**: Web framework for building the server.
- **Axios**: For making API requests.
- **dotenv**: To manage environment variables.
- **Cors**: To handle cross-origin requests.
- **Nodemon**: For automatic server restarts during development.

#### Scripts

- `npm start`: Start the production server.
- `npm run dev`: Start the development server with Nodemon.

---

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your system.
- A text editor like **VS Code**.
- For Windows users, ensure you have the Command Prompt, PowerShell, or Windows Terminal available.

### Installation

#### Clone the Repository

```bash
git clone <repository-url>
cd Weather-Climate
```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd weather-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Add the following:
     ```env
     PORT=5000
     API_KEY=<Your Weather API Key>
     ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the frontend URL (provided by Vite) in your browser.
2. Enter a location to fetch the weather data.

---

## Folder Structure

```
Weather-Climate/
├── Backend-server/
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── ...
├── weather-app/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── README.md
```

---
