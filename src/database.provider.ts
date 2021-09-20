import { Sequelize } from 'sequelize-typescript';
import { Corretora } from './corretora/entities/corretora.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'poupei',
      });
      sequelize.addModels([Corretora]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
