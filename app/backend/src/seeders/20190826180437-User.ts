import { QueryInterface } from 'sequelize';
import { User } from '../models/user/model';
import { Server } from '../server';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          email: 'john@doe.com',
          password: await User.hashPassword(
            'Doe1234!',
            Server.options.authentication.saltRounds
          ),
          security_code: '',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          email: 'jane@doe.com',
          password: await User.hashPassword(
            'Doe1234!',
            Server.options.authentication.saltRounds
          ),
          security_code: '',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('User', {}, {});
  }
};
