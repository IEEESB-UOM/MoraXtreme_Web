# README.md

# Project Setup

This project is designed to connect to and use a PostgreSQL database.

## Environment Variables

Create a `.env` file at the root of your project. You can use `.env.example` as a template.
Example `.env.example`:

```env
DATABASE_URL=postgres://username:password@localhost:5432/dbname
PORT=5173
```

* `DATABASE_URL` → your PostgreSQL connection string
* `PORT` → random port to make it just work locally

Copy `.env.example` to `.env` and update values as needed:

```sh
cp .env.example .env
```

---

## Developing

Once you've installed dependencies:

```sh
npm install
# or pnpm install
# or yarn
```

Start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

---

## Building

To create a production version of your app:

```sh
npm run build
```
