import knex from "knex";
import { configDotenv } from "dotenv";

configDotenv();
const dbClient = knex({
    client: "pg",
    connection: {
        host: "localhost",
        port: 3033,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    },
});

async function run() {
    await dbClient.raw(
        `
        drop table if exists artistwork;
        
        create table artistwork (
            id serial primary key,
            title varchar not null,
            description varchar,
            image varchar,
            clientlink varchar,
            is_visible boolean not null
        );

        insert into artistwork (
            title, description, image, clientlink, is_visible
        ) values (
            'twilight', 'nice view on the horizon', '/images/twilight.jpeg', 'https://www.google.com', true
        ),
        (
            'night', 'falling stars on the sky', '/images/night.jpeg', 'https://www.google.com', false
        ),
        (
            'vacation', 'time is in our favor this time', '/images/vacation.jpeg', 'https://www.google.com', true
        );`
    );
}

run();
