import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.bulkInsert(
        'Group',
        [
          {
            name:           'Access Control Managers',
            hierarchyLevel: 1,
            createdAt:      new Date(),
            updatedAt:      new Date()
          }
        ],
        { transaction }
      );

      const accessControlManagersId = await queryInterface.rawSelect(
        'Group',
        {
          where: { name: 'Access Control Managers' },
          transaction
        },
        'id'
      );

      await queryInterface.bulkInsert(
        'Group',
        [
          {
            name:           'Admins',
            parentId:       accessControlManagersId,
            hierarchyLevel: 2,
            createdAt:      new Date(),
            updatedAt:      new Date()
          }
        ],
        { transaction }
      );

      const adminsId = await queryInterface.rawSelect(
        'Group',
        {
          where: { name: 'Admins' },
          transaction
        },
        'id'
      );

      await queryInterface.bulkInsert(
        'Group',
        [
          {
            name:           'Users',
            parentId:       adminsId,
            hierarchyLevel: 3,
            createdAt:      new Date(),
            updatedAt:      new Date()
          }
        ],
        { transaction }
      );
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete(
      'Group',
      { name: ['Access Control Managers', 'Admins', 'Users'] },
      {}
    );
  }
};
