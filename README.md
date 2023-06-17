# UCSD CSE Reddit Scraper

This project is a simple, visually appealing React application that displays relevant posts from the r/UCSD subreddit. It specifically targets posts related to the Computer Science (CS) or Computer Science and Engineering (CSE) department.

## Features

- Fetches data from Reddit's API, filtering for posts containing 'CS' or 'CSE'.
- Displays each post in an easy-to-read format.
- Frontend built with React and Vite for fast development and performance.
- Design and styling with Emotion and Framer Motion for animations.
- Backend Flask server using PRAW for communication with Reddit's API.

## Getting Started

This project is organized into two main directories: the frontend which houses the React application, and the backend which is a Flask server that communicates with Reddit's API.

### Prerequisites

Node.js and npm: You can download these from [here](https://nodejs.org/en).

Python 3: You can download it from [here](https://www.python.org/downloads/).

### Running the Frontend

In your terminal, navigate to the frontend directory and run the following commands:

```bash
# Install dependencies
npm install

# Run the application in development mode
npm run dev
```

### Running the Backend

In a new terminal window, navigate to the backend directory and run the following commands:

```bash
# Activate virtual environment
source venv/bin/activate

# Start Flask server
flask run
```
