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
            'among trees', 'nature and mystery under the colorful light', '/images/among-trees.jpg', 'https://www.google.com', true
        ),
        (
            'shot', 'finding yourself after...', '/images/shot.jpg', 'https://www.google.com', true
        ),
        (
            'minimalistic-desktop', 'what if today is not just today...what if...', '/images/minimalistic-desktop.jpg', 'https://www.google.com', true
        ),
        (
            'tree', 'quiet childhood, but not alone', '/images/tree.jpg', 'https://www.google.com', true
        ),
        (
            'mountain-landscape', 'the gradient of nature in reverse', '/images/mountain-landscape.jpg', 'https://www.google.com', true
        ),
        (
            'minimal', 'beautiful danger, silent nature, teamwork', '/images/minimal.jpg', 'https://www.google.com', true
        );`
    );
}

run();
