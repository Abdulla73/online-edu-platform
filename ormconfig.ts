
import { Invoice } from './src/entities/invoice.entity';
import { Blog } from './src/entities/blog.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Abdulla',
  entities: [Blog, Invoice ],
  synchronize: true
};

export default config;