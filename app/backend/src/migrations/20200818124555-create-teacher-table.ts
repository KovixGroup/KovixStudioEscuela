import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (
    queryInterface: QueryInterface,
    Sequelize: typeof DataTypes
  ): Promise<any> => {
    const model = queryInterface.sequelize.define('Teacher', {
      id: { field: 'id', type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
      firstName: { field: 'first_name', type: Sequelize.STRING },
      lastName: { field: 'last_name', type: Sequelize.STRING },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE
      }
    }, { tableName: 'Teacher' });

    return model.sync({ alter: true, force: true });
  },
  down: (queryInterface: QueryInterface): Promise<any> => {
    return queryInterface.dropTable('Teacher');
  }
};
