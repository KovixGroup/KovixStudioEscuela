import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: any) => {
    const transaction = await queryInterface.sequelize.transaction();
    await queryInterface.createTable(
      'File',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        path: {
          type: Sequelize.STRING,
          allowNull: false
        },
        extension: {
          type: Sequelize.STRING,
          allowNull: false
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: 'uniqueTypeAndKey'
        },
        key: {
          type: Sequelize.STRING,
          unique: 'uniqueTypeAndKey'
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        },
        deleted_at: {
          type: Sequelize.DATE
        }
      },
      { transaction }
    );

    await queryInterface.addConstraint('File', ['type', 'key'], {
      name: 'uniqueTypeAndKey',
      type: 'unique',
      transaction
    });

    transaction.commit();
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('File');
  }
};
