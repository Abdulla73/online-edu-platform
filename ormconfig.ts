
import { Invoice } from './src/entities/invoice.entity';
import { Blog } from './src/entities/blog.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Registration } from 'src/entities/registration.entity';
import { LoginModule } from 'src/login/login.module';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Abdulla',
  entities: [Blog, Invoice,Registration],
  synchronize: true
};

export default config;