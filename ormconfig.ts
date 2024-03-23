
import { Invoice } from './src/entities/invoice.entity';
import { Blog } from './src/entities/blog.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Registration } from 'src/entities/registration.entity';
import { LoginModule } from 'src/login/login.module';
import { ContractForm } from 'src/entities/contract-form.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Abdulla',
  entities: [Blog, Invoice,Registration,ContractForm],
  synchronize: true
};

export default config;