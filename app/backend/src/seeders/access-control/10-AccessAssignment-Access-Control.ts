import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      const groupId = await queryInterface.rawSelect(
        'Group',
        {
          where: { name: 'Access Control Managers' },
          transaction
        },
        'id'
      );

      const roleId = await queryInterface.rawSelect(
        'Role',
        {
          where: { name: 'Access Control Manager' },
          transaction
        },
        'id'
      );

      await queryInterface.bulkInsert(
        'AccessAssignment',
        [
          {
            groupId,
            roleId,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        { transaction }
      );
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      const groupId = await queryInterface.rawSelect(
        'Group',
        {
          where: { name: 'Access Control Managers' },
          transaction
        },
        'id'
      );

      const roleId = await queryInterface.rawSelect(
        'Role',
        {
          where: { name: 'Access Control Manager' },
          transaction
        },
        'id'
      );

      await queryInterface.bulkDelete(
        'AccessAssignment',
        { groupId, roleId },
        { transaction }
      );
    });
  }
};
