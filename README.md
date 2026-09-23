# Trishanti - Frontend

Trishanti is a modern web application built for seamless user experience, high performance, and robust security.

---

## 🚀 Overview

This repository hosts the frontend codebase for the **Trishanti** platform. It provides the client-side user interfaces, state management, API integration, and user interactions.

---

## 📁 Repository Structure

```text
trishanti-frontend/
├── .gitignore               # Ignored files and patterns for Git
├── README.md                # Project documentation and quickstart
└── settings_api_and_flow.md # Canonical architectural, API, and flow specifications
```

*(Additional directories such as `src/`, `components/`, `services/`, and `pages/` will be established upon framework initialization)*

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PrayudhaSatria70/trishanti-frontend.git
   cd trishanti-frontend
   ```

2. **Install dependencies:**
   *(Once package.json is initialized)*
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

---

## 🔐 Security & Engineering Guidelines

- **Zero Secret Exposure**: Never commit API keys, tokens, or credentials to version control.
- **Strict Linting & Type Checking**: Adhere to ESLint and TypeScript conventions.
- **Contract Synchronization**: Ensure all frontend API calls align with backend route specifications detailed in `settings_api_and_flow.md`.

---

## 📜 Documentation

For full architectural details, data flow traces, settings, and API specifications, refer to [settings_api_and_flow.md](settings_api_and_flow.md).
