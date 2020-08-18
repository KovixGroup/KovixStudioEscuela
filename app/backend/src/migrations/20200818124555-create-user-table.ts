import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (
    queryInterface: QueryInterface,
    Sequelize: typeof DataTypes
  ): Promise<any> => {
    const model = queryInterface.sequelize.define('User', {
        id: { field: 'id', type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
      email: { field: 'email', type: Sequelize.STRING },
      password: { field: 'password', type: Sequelize.STRING },
      
          security_code: {
          type: Sequelize.STRING,
            allowNull: false
        },
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
    }, { tableName: 'User' });

    return model.sync({ alter: true, force: true });
  },
  down: (queryInterface: QueryInterface): Promise<any> => {
    return queryInterface.dropTable('User');
  }
};
