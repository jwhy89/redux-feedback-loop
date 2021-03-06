# Jay's Redux Feedback Loop

Jay's Redux Feedback Loop web application allows users to submit feedback through a multi-part form. After the user has navigated through the form and submitted their feedback, they are routed to a `Thank You Page` and are able to restart the feedback loop by clicking the `Leave New Feedback` button. There is also an admin page that can be viewed by navigating to `localhost:3000/#/admin`. The user is able to view a table of the feedback submitted and delete feedback submissions.

## Built With

* React
* Redux
* Javascript
* Node.js
* Express
* PostgreSQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you get started, make sure you have the following software installed:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Create database

1. Create a new database called `prime_feedback`
2. Then create a table called `feedback`

```SQL
CREATE DATABASE "prime_feedback";

CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
);
```

### Installing

Steps to get the development environment running.

1. Download this project.
2. Run `npm install`
3. Start PostgreSQL if not running already by using `brew services start postgresql`
4. Run `npm server`
5. `cmd + t` to open a new terminal window and Run `npm run client`
6. Navigate to `localhost:3000`

### Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create a Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables

## These are features I did not get to and would like to implement in the future.
There were many features that I did not get to. I would like to add the following features:

1. Add additional styling: either CSS or Material UI.
1. Making the application more mobile friendly.

## Author

Jarvis Yang

## Acknowledgements

Prime Digital Academy
