import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from '../../models/product';
import { ProductVersion } from '../../models/productVersion';
import { User } from '../../models/user';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true, 
  logging: false,
  entities: [Product, ProductVersion, User],
  migrations: [],
  subscribers: [],
});

export const initializeDbConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log('DB conected');
  } catch (error) {
    console.error('DB error:', error);
    throw error;
  }
};

export { AppDataSource };
