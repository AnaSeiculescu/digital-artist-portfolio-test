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

  async getAllArtwork(showOnlyVisible: boolean) {
    let command = 'select * from artistwork order by id asc';
    if (showOnlyVisible) {
      command += ' where is_visible = true';
    }

    // command += ' order by id';

    const allWork = await this.dbClient.raw(command);
    // console.log('toata munca: ', allWork.rows);
    return allWork.rows;
  }

  async getArtworkById(id: number) {
    const artwork = await this.dbClient('artistwork').where({ id }).first();
    return artwork;
  }

  async createArtwork(data: any) {
    const newArtwork = await this.dbClient('artistwork')
      .insert(data)
      .returning('*');
    return newArtwork[0];
  }

  // async uploadImage(data: any) {
  //   const newImage = await this.
  // }

  async updateArtwork(id: number, data: any) {
    const updateArtwork = await this.dbClient('artistwork')
      .where({ id })
      .update(data)
      .returning('*');
    return updateArtwork[0];
  }

  async deleteArtwork(id: number) {
    const deleteArtwork = await this.dbClient('artistwork')
      .where({ id })
      .del()
      .returning('*');
    return deleteArtwork[0];
  }

  // async getIsVisibleWork() {
  //   const isVisibleWork = await this.dbClient.raw(
  //     `select * from artistwork where is_visible = true`,
  //   );
  //   // console.log('doar vizibile: ', isVisibleWork);
  //   return isVisibleWork.rows;
  // }
}
