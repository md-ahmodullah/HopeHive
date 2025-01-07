# HopeHive Crowdfunding Platform

![Website Image](https://i.ibb.co.com/1GVfYwV/githope.png)

Welcome to Hope Hive! This project is a feature-rich platform showcasing modern web development techniques and tools to deliver a seamless user experience.

## Live Site

Visit the live website: [Hope Hive](https://hope-hive.netlify.app/)

## Features

- **Firebase Authentication**: Secure user authentication with email/password and social login options for enhanced usability and security.
- **Dynamic Routing with React Router**: Efficient and intuitive navigation across multiple routes, ensuring a smooth user experience.
- **Context API for State Management**: Centralized state management using Context API to manage data like user info, cart items, and theme settings across the application.
- **Interactive Typewriting Effect**: Displays dynamic text animations for an engaging user experience using React Typewriter.
- **Tooltips for Enhanced Usability**: Provides clear, interactive tooltips for intuitive navigation and better understanding of features.
- **Responsive Design**: Fully responsive layout for accessibility on all devices, including mobile, tablet, and desktop.
- **Dark and Light Mode Toggle**: Easily switch between dark and light themes with a user-friendly toggle.
- **Campaign Filtering and Sorting**: Intuitive options to filter campaigns by user email and sort by price or other criteria dynamically.
- **Data Integration with MongoDB**: Back-end data storage and retrieval powered by MongoDB, ensuring efficient and scalable database management.
- **Backend with Express.js and Node.js**: Robust and scalable backend developed using Express.js and Node.js, ensuring efficient API handling and server-side logic.
- **Secure API Endpoints**: Developed and hosted server-side logic on Vercel, providing fast and secure endpoints.
- **Optimized Performance**: Minimal load times and efficient data fetching to ensure a smooth browsing experience.

---

## Technology Stack

- **Frontend**: React, Tailwind CSS, DaisyUI, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Package Manager**: npm

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v18.3.1 or higher)
- npm (v9.6.0 or higher)
- Git

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/username/hopehive.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hopehive
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up Firebase:

   - Create a Firebase project and configure authentication.
   - Replace the `firebaseConfig` in `src/firebase/firebaseConfig.js` with your Firebase project details.

5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and go to `http://localhost:3000` to view the site.

---

## Dependencies

**Core Dependencies**:

```json
{
  "@emotion/react": "^11.13.5",
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-awesome-reveal": "^4.2.14",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.0.2",
  "react-simple-typewriter": "^5.0.1",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.14.5",
  "swiper": "^11.1.15"
}
```

**Development Dependencies**:

```json
{
  "@eslint/js": "^9.15.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.14",
  "eslint": "^9.15.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.12.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.15",
  "vite": "^6.0.1"
}
```

---

## Guidelines

- **Code Style**: Follow the ESLint rules defined in the project.
- **File Structure**: Maintain a clean and modular component-based structure.
- **API Configuration**: Replace placeholders with your backend API URL in the fetch requests.
- **State Management**: Use Context API for managing global state.
- **Security**: Ensure that protected routes and user-specific data fetching are correctly implemented.

---

## Contribution

Feel free to submit issues or pull requests for improvements and new features. Ensure all code follows the project's coding standards and is well-documented.

---

## License

This project is licensed under the [MIT License](LICENSE).
