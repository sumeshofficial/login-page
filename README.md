# Admin Login Page - Node.js & Express.js

A simple and secure admin login system built with Node.js, Express.js, and EJS templating.

## Features

- Admin login with session-based authentication  
- Environment variable management for credentials  
- Protected routes accessible only after login  
- Clear error messages for invalid login  
- Logout functionality  

## Technologies Used

- Node.js  
- Express.js  
- EJS  
- express-session  
- dotenv  

## Getting Started

### Prerequisites

- Node.js installed  
- npm installed  

### Installation

Clone the repository:  

```bash
git clone https://github.com/sumeshofficial/login-page.git
cd login-page
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the project root with the following variables:
```
ADMIN=your_admin_username
PASSWORD=your_admin_password
```
Replace `your_admin_username` and `your_admin_password` with your actual credentials.

Running the App

Start the server in development mode (auto-restarts on code changes):
```bash
npm run dev
```

Or start normally:
```bash
npm start
```

Open your browser and visit:
http://localhost:3000

Project Structure
```bash
login-page/
├── app.mjs             # Main application file  
├── config.js           # Exports environment variables  
├── .env                # Environment variables (not committed)  
├── public/             # Static files (CSS, images)  
├── views/              # EJS templates  
│   ├── index.ejs  
│   └── error.ejs  
├── .gitignore  
└── README.md
```
Security Note

1. Do not commit your .env file to GitHub.
2. Make sure .env is included in .gitignore to keep your credentials safe.


License

This project is open source under the MIT License.
