# 🍦 Ice Cream React App

A pixel-perfect, fully responsive React.js web application that replicates a Figma design for an ice cream landing page. The project is built using functional components, React hooks, and modular styling.

---

## 📌 Project Overview

This application is a **pixel-accurate clone** of a provided Figma prototype, implemented using React.js with a clean, maintainable structure and full responsiveness across devices. It showcases:
- Landing page with multiple ice cream flavors
- Modular component architecture
- Usage of React Context for shared state (like selected flavor)
- Responsive layout using Flexbox and custom styling

---

## 📁 Folder Structure

## 📁 Folder Structure

```
ICE-CREAM/
│
├── public/                  # Public assets
│   ├── Blueberry.png
│   ├── Chocolate.png
│   ├── Evergreen.png
│   ├── Strawberry.png
│   └── vite.svg
│
├── src/
│   ├── assets/              # Internal static assets
│   │   └── react.svg
│   │
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── IceCreams.jsx
│   │   ├── LargeIceCreamAtBottom.jsx
│   │
│   ├── Context/             # React Context for shared state
│   │   └── Flavour.jsx
│   │
│   ├── pages/               # Application page views
│   │   └── IceCreamLanding.jsx
│   │
│   ├── App.jsx              # Root component
│   ├── App.css
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── eslint.config.js
└── README.md
```

yaml
Copy
Edit

---

## 🚀 Setup & Installation

Follow these steps to run the project locally:

### Prerequisites:
- Node.js (v16 or later)
- npm or yarn

### Steps:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ice-cream-app.git
cd ice-cream-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
Visit http://localhost:5173/
🌐 Deployment
To deploy the app on Vercel or Netlify:

Netlify
Set build command to: npm run build

Set publish directory to: dist

Vercel
Automatically detects Vite + React project

Just connect the GitHub repository and deploy

🧠 Internal Documentation
✅ Flavour.jsx (in Context)
Handles shared state like selected flavor using React Context API.

✅ Header.jsx
Renders the navigation bar and logo. Responsive on all screen sizes.

✅ IceCreams.jsx
Displays list/grid of available ice cream flavors dynamically.

✅ LargeIceCreamAtBottom.jsx
Shows featured flavor image at the bottom of the page.

✅ IceCreamLanding.jsx
Main page that brings all components together.

⚠️ Known Issues or Limitations
No real backend – all data (like images/flavors) is hardcoded/static.

Flavor details or cart functionality not included (only design replication).

Accessibility improvements (ARIA roles) can be enhanced further.

✨ Features
Pixel-perfect implementation from Figma

Fully responsive design

Clean and modular folder structure

React Hooks for state management

Context API for shared flavor selection state

🧪 Technologies Used
React.js (functional components & hooks)

Vite (for fast builds and dev server)

Tailwind CSS (or custom CSS modules)

React Context API

📸 Preview

🧑‍💻 Author
Ashish Patel
Feel free to reach out for collaboration or suggestions.

📄 License
This project is open-source and available under the MIT License.

yaml
Copy
Edit

---

Let me know if you want help **tailoring this to your actual GitHub repo name**, or want me to **auto-ge