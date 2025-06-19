# Ice Cream App

A simple React application built with Vite for managing and exploring ice cream flavors. This project demonstrates modern React development practices, including component-based architecture, fast refresh, and ESLint integration.

## Project Overview

The Ice Cream App allows users to browse, add, and manage a list of ice cream flavors. It is designed as a learning project to showcase React with Vite, hot module replacement (HMR), and code quality tools.

## Folder Structure

```
ice-cream-app/
├── public/                 # Static assets
│   └── favicon.ico
├── src/                    # Source code
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-level components
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── .eslintrc.cjs           # ESLint configuration
├── vite.config.js          # Vite configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ice-cream-app.git
    cd ice-cream-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at [http://localhost:5173](http://localhost:5173).

## Deployment

To build the app for production:

```bash
npm run build
```

The output will be in the `dist/` folder. You can deploy this folder to any static hosting service (e.g., Netlify, Vercel, GitHub Pages).

## Known Issues or Limitations

- No backend integration; all data is stored in memory and will reset on refresh.
- No authentication or user management.
- Limited error handling for form submissions.
- Designed for demonstration and learning purposes, not for production use.

## Internal Documentation

- Components and functions are documented with inline comments for clarity.
- ESLint is configured to enforce code quality and consistency.
- For type safety and larger projects, consider migrating to TypeScript.

---

Feel free to contribute or raise issues in the repository!
