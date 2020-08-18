import { DataTypes, QueryInterface, Sequelize } from 'sequelize';

require('sequelize-hierarchy')(Sequelize);

module.exports = {
  up: async (queryInterface: QueryInterface, DataType: typeof DataTypes) => {
    const { sequelize } = queryInterface;

    sequelize.define(
      'Group',
      {
        id: {
          type:          DataType.INTEGER,
          primaryKey:    true,
          autoIncrement: true
        },
        name: {
          type:      DataType.STRING,
          allowNull: false
        },
        description: {
          type: DataType.STRING
        },
        hierarchyLevel: {
          type: DataType.INTEGER
        },
        parentId: {
          type:       DataType.INTEGER,
          references: {
            model: 'Group',
            key:   'id'
          }
        },
        createdAt: {
          type: DataType.DATE
        },
        updatedAt: {
          type: DataType.DATE
        },
        deletedAt: {
          type: DataType.DATE
        }
      },
      { freezeTableName: true }
    );

    await (sequelize.models.Group as any).isHierarchy();
    await (sequelize.models.Group as any).rebuildHierarchy();
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Groupancestor', {});
  }
};
