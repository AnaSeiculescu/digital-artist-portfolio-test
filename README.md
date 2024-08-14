# digital-artist-portfolio-test

## Project Overview

This project is a web application for managing and displaying the work of a digital artist, built using a modern JavaScript stack.
It features a React-based frontend for a responsive user interface and a NestJS backend that handles API requests and database interactions.

## Project Setup and Running the Application

1. You need Node.js and Docker installed on your computer.
2. Navigate to the `backend` directory, and create the `.env` files (one in the `api` directory and another in the `database` directory), based on `.env.example`.
3. Navigate to the `docker-compose.yaml` file and run the `docker compose app` command to start the database.
4. Navigate to the `backend/database` directory and setup the database running the `npm run dbsetup` command (it will run the `dbsetup.js` file) - you should run this command only once, unless you want to recreate the database table with the initial data.
5. Navigate to the `backend/api` directory and run the api using the `npm run start:dev` command.
6. Navigate to the `frontend` directory and run the `npm run dev` command to start the frontend/Vite development server.
7. Open the browser at the URL provided by Vite (`http://localhost:port_provided`) to view the application.

## Short Presentation

-   The app displays the projects using `masonry-layout`.
-   The header menu bar opens a vertical panel with a form where the artist can add projects to his portfolio.
-   The projects displayed have image, title, description, the client site link to visit, and functionalities such as:
    -   hidding the project from the list,
    -   updating the project,
    -   deleting the project from the list.

## Unrealized Functionalities

Your test has some requirements that I did not manage to implement:

-   First, it seems like the application should have had an admin account and a user account. I have only focused on the admin account, where the artwork can be managed.
-   The image upload functionality is not implemented.
-   My project does not have testing included.

## Tools and Technologies Used

Frontend:

-   Vite: Used as the frontend tooling, it provides the build process and the development server.
-   React: Used to build the user interface due to its component-based architecture.

Backend:

-   NestJS: A Node.js framework used for building the server-side application.
-   Knex.js: A SQL query builder for Node.js, it was used to interact with the PostgreSQL database.

DataBase:

-   PostreSQL: A relational database, it is managed through Docker.
-   Docker: Used to containerize the PostgreSQL database, it ensures a consistent environment across different development setups.

Environment Variables:

-   Dotenv: It is used to manage environment variables, allowing sensitive data such as database credentials to be stored securely in a ".env" file.
