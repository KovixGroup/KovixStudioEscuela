import { extname } from 'path';
import { QueryInterface } from 'sequelize';
import { File } from '../models/file/model';
import { Server } from '../server';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    await queryInterface.bulkInsert(
      'File',
      [
        /* Reset password template */
        {
          name:
            Server.options.environment.server.routing.defaultTemplates
              .defaultResetPasswordTemplate,
          path: File.resetPasswordTemplate,
          extension: extname(File.resetPasswordTemplate),
          type: 'email',
          key: 'reset-password',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      { transaction }
    );
    await transaction.commit();
  },
  down: async (queryInterface: QueryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    await queryInterface.bulkDelete(
      'File',
      {
        path: File.resetPasswordTemplate
      },
      { transaction }
    );
    await transaction.commit();
  }
};
