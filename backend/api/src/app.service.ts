import { Injectable } from '@nestjs/common';
import knex from 'knex';
import { configDotenv } from 'dotenv';

configDotenv();
@Injectable()
export class AppService {
  dbClient: knex.Knex;

  constructor() {
    // console.log('db name', process.env.POSTGRES_DB);
    this.dbClient = knex({
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 3033,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
      },
    });
  }

  getHello(): string {
    const rezultat = Math.random() * 20 + 15;
    return 'rezultatul este ' + rezultat;
  }

  async getAllArtwork() {
    const allWork = await this.dbClient.raw(`select * from artistwork`);
    console.log('toata munca: ', allWork.rows);
    return allWork.rows;
  }

  async getIsVisibleWork() {
    const isVisibleWork = await this.dbClient.raw(
      `select * from artistwork where is_visible = true`,
    );
    console.log('doar vizibile: ', isVisibleWork);
    return isVisibleWork.rows;
  }
}
