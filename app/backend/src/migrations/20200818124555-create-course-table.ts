import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (
    queryInterface: QueryInterface,
    Sequelize: typeof DataTypes
  ): Promise<any> => {
    const model = queryInterface.sequelize.define('Course', {
      id: { field: 'id', type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
      year: { field: 'year', type: Sequelize.INTEGER },
      letter: { field: 'letter', type: Sequelize.STRING },
      schoolId: { field: 'school_id', type: Sequelize.INTEGER, allowNull: false },
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
    }, { tableName: 'Course' });

    return model.sync({ alter: true, force: true });
  },
  down: (queryInterface: QueryInterface): Promise<any> => {
    return queryInterface.dropTable('Course');
  }
};
