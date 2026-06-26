# 📓 CalcNote Dashboard

A comprehensive, feature-rich web dashboard application named **CalcNote** built with **React 19**, **Vite**, **Redux Toolkit**, and **Firebase Cloud Messaging (FCM)**. 

CalcNote combines calculations management, note-taking, a product catalog with shopping cart functionality, security utilities like a password generator, and real-time push notification features under a clean, unified modern interface.

---

## 🚀 Key Features

- **📓 Calculations & Text Notepad (CalcNote Core)**: 
  - An interactive calculation workspace where users can perform basic arithmetic (`+`, `-`, `*`, `/`) and save expressions to local storage.
  - A text notes input to capture and save text snippets.
  - An organized history page (Home) displaying stored calculations and notes with custom pagination.
- **🔐 Secure Access Control**: Features route guarding via React Router, preventing unauthorized access to dashboard sections.
- **🎨 Custom-Tailored Styling & Themes**: Highly responsive layouts styled using native CSS variables with Light Mode, Dark Mode, and automatic system preference synchronization.
- **🛍️ Products Catalog & Shopping Cart**:
  - Full product list with detailed modal-based product specifications.
  - Redux-backed shopping cart to add, remove, and manage item quantities seamlessly.
- **🔔 Firebase Push Notifications**: Complete **Firebase Cloud Messaging (FCM)** service worker registration with incoming background message toast notifications via `react-hot-toast`.
- **🔑 Custom Password Generator**: A built-in security tool to generate passwords with customizable criteria (uppercase, lowercase, digits, special characters, and length slider).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) & [Vite](https://vite.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [React Redux](https://react-redux.js.org/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Push Notification Engine**: [Firebase (v12)](https://firebase.google.com/) (FCM)
- **Toast Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Styling**: Pure CSS with global design tokens (`index.css`)

---

## 📂 Project Architecture

```bash
dashboard/
├── public/
│   └── firebase-messaging-sw.js  # Service worker for FCM
├── src/
│   ├── Components/
│   │   ├── About.jsx             # About page section
│   │   ├── Carts.jsx             # Shopping cart component
│   │   ├── Functionalities.jsx   # Calculations and Textpad core features
│   │   ├── Home.jsx              # Main feed displaying paginated history of CalcNote
│   │   ├── Password.jsx          # Security password generator tool
│   │   ├── Products.jsx          # Product list catalog
│   │   ├── ProtectedRoute.jsx    # Auth route protector
│   │   ├── Sidebar.jsx           # Sidebar navigation panel
│   │   └── ThemeToggle.jsx       # Theme controller switch
│   ├── Pages/
│   │   ├── Dashboard.jsx         # Outer dashboard shell
│   │   ├── Login.jsx             # Secure login screen
│   │   ├── NotFound.jsx          # 404 page
│   │   └── ProductDetails.jsx    # Individual product details page
│   ├── notifications/
│   │   └── firebase.jsx          # Firebase FCM setup & token generation logic
│   ├── redux/
│   │   ├── reducers/
│   │   │   ├── cartSlice.jsx     # Cart reducer & actions
│   │   │   ├── productSlice.jsx  # Catalog list state
│   │   │   └── themeSlice.jsx    # App theme state
│   │   └── store.jsx             # Global redux store configuration
│   ├── App.jsx                   # Central routing & service worker registration
│   ├── index.css                 # Global stylesheets with variables
│   └── main.jsx                  # App entry point
├── package.json
└── vite.config.js
```

---

## ⚙️ Setup and Installation

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the dependencies:
```bash
# Navigate to the dashboard directory
cd dashboard

# Install dependencies
npm install
```

### 3. Running Locally
Run the Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To compile optimization assets:
```bash
npm run build
```
To run the preview build:
```bash
npm run preview
```
