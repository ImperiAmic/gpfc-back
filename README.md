# 🐲 Godzilla Poblenou Fan Club – Back End

This is the backend service for the Godzilla Poblenou Fan Club application. **Built with Typescript and using Express and MongoDB**, this API REST enables management of Godzilla films data.

_SKREE-ONK!_

---

## Table of Contents

1.  [Introduction](#1-introduction)
2.  [Main Features](#2-main-features)
3.  [Core Stack](#3-core-stack)
4.  [Getting Started](#4-getting-started)
5.  [Available Scripts](#5-available-scripts)
6.  [API Endpoints](#6-api-endpoints)
7.  [Contributing](#7-contributing)
8.  [License](#8-license)
9.  [Author](#9-author)

---

## 1. Introduction

Welcome to the **Godzilla Poblenou Fan Club** back-end repository. This service is a REST API that provides data about Godzilla movies: monster stats, allies, enemies, appearances and more. It serves as the backbone of the application, connecting the database to the front end and supporting full CRUD operations.

---

## 2. Main Features

- Manage Godzilla-related movies and monsters (title, year, director, etc.).
- Store monster stats: height, weight, abilities, allies/enemies.
- Filtering, sorting and pagination support.

---

## 3. Core Stack

- TypeScript for development.
- Node.js for JavaScript runtime.
- Express as the server framework.
- MongoDB as the database.
- Mongoose as the MongoDB object modeling.
- Jest for test environment.
- Render for deployment.

---

## 4. Getting Started

### Prerequisites

- MongoDB
- Node.js ≥ 14
- npm

### Setup

```bash
# Clone the repository
git clone
cd gpfc-back

# Install dependencies
npm install

cp .env.sample .env
# Configure your Local Host port connection in the .env file
# Configure your MongoDB connection string in the .env file
# Configure your allowed origins, separated by commas, in the .env file

npm start
```

---

## 5. Available Scripts

```bash
npm start               # Start production server
npm run start:dev       # Start production server on watch mode
npm run build           # Compiles .ts files in src folder
npm run build:dev       # Compiles .ts files in src folder on watch mode
npm test                # Run tests
npm run test:dev        # Run tests on watch mode
npm run test:coverage   # Run tests coverage
```

---

## 6. API Endpoints

| Method | URL                    | Description                               | Body (example) | Response (example)                                 | Implemented? |
| ------ | ---------------------- | ----------------------------------------- | -------------- | -------------------------------------------------- | ------------ |
| GET    | /                      | Get server status                         | -              | `{ message: "🏓" }`                                | ❌           |
| GET    | /godzillas             | Get paginated list of godzillas           | -              | `{ godzillas: Godzilla[], godzillasTotal: number}` | ❌           |
| GET    | /godzillas?page=1      | Get paginated list of godzillas on page 1 | -              | `{ godzillas: Godzilla[], godzillasTotal: number}` | ❌           |
| GET    | /godzillas/godzilla:Id | Get an specific godzilla                  | -              | `{ godzilla: { Godzilla } }`                       | ❌           |
| DELETE | /godzillas/:godzillaId | Delete a godzilla from DB                 | -              | `{ godzilla: { Godzilla } }`                       | ❌           |
| POST   | /godzillas/            | Add a godzilla to DB                      | `{ Godzilla }` | `{ godzilla: { Godzilla } }`                       | ❌           |
| PUT    | /godzillas/:godzillaId | Edit a godzilla from the DB               | `{ Godzilla }` | `{ godzilla: { Godzilla } }`                       | ❌           |

---

## 7. Contributing

Contributions are welcome! If you find bugs, want to suggest improvements or add new features, feel free to open an issue or submit a pull request.

---

## 8. License

This project is licensed under the [CC BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/).  
See the [`LICENSE`](./LICENSE) file for more details.

---

## 9. Author

This project was made with love by [Imperi Amic](https://www.imperiamic.com/).
