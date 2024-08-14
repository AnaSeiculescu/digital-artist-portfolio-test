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
    await dbClient.schema.dropTableIfExists("artistwork");

    await dbClient.schema.createTable("artistwork", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("description");
        table.string("image");
        table.string("clientlink");
        table.boolean("is_visible").notNullable();
    });

    await dbClient("artistwork").insert([
        {
            title: "among trees",
            description:
                "nature and mystery under the colorful light, playing and dancing for the Earth; it is unknown what we should expect as it will not share with us nothing but sensations",
            image: "/images/among-trees.jpg",
            clientlink: "https://www.deviantart.com/freya-passifolle/art/Among-Trees-Small-Group-884376795",
            is_visible: true,
        },
        {
            title: "shot",
            description: "finding yourself after...",
            image: "/images/shot.jpg",
            clientlink: "https://www.deviantart.com/josemau1900/art/Shot-18-400032201",
            is_visible: true,
        },
        {
            title: "minimalistic-desktop",
            description:
                "what if today is not just today, what if today would be everywhere, anytime, what if all is just today...what if...?",
            image: "/images/minimalistic-desktop.jpg",
            clientlink: "https://www.deviantart.com/jmnaleef/art/Minimalistic-Desktop-903011560",
            is_visible: true,
        },
        {
            title: "somewhere",
            description: "quiet childhood, but not alone",
            image: "/images/somewhere.jpg",
            clientlink: "https://www.deviantart.com/djmattricks/art/Somewhere-52892874",
            is_visible: true,
        },
        {
            title: "mountain-landscape",
            description: "the gradient of nature in reverse",
            image: "/images/mountain-landscape.jpg",
            clientlink: "https://www.deviantart.com/rahasqc/art/Flat-Landscape-Wallpaper-1-668185454",
            is_visible: true,
        },
        {
            title: "minimal",
            description: "beautiful danger, silent nature, teamwork...will you come and visit?",
            image: "/images/minimal.jpg",
            clientlink: "https://www.deviantart.com/docberlin77/art/Minimal-Part-II-446426920",
            is_visible: true,
        },
    ]);
}

// async function run() {
//     await dbClient.raw(
//         `
//         drop table if exists artistwork;

//         create table artistwork (
//             id serial primary key,
//             title varchar not null,
//             description varchar,
//             image varchar,
//             clientlink varchar,
//             is_visible boolean not null
//         );

//         insert into artistwork (
//             title, description, image, clientlink, is_visible
//         ) values (
//             'among trees', 'nature and mystery under the colorful light, playing and dancing for the Earth', '/images/among-trees.jpg', 'https://www.google.com', true
//         ),
//         (
//             'shot', 'finding yourself after...', '/images/shot.jpg', 'https://www.google.com', true
//         ),
//         (
//             'minimalistic-desktop', 'what if today is not just today, what if today would be everywhere, anytime, what if all is just today...what if...\\?', '/images/minimalistic-desktop.jpg', 'https://www.google.com', true
//         ),
//         (
//             'somewhere', 'quiet childhood, but not alone', '/images/somewhere.jpg', 'https://www.google.com', true
//         ),
//         (
//             'mountain-landscape', 'the gradient of nature in reverse', '/images/mountain-landscape.jpg', 'https://www.google.com', true
//         ),
//         (
//             'minimal', 'beautiful danger, silent nature, teamwork...will you come and visit\\?', '/images/minimal.jpg', 'https://www.google.com', true
//         );`
//     );
// }

run();
