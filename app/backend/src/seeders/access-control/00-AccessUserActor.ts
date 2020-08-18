import { Op, QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'AccessUserActor',
      [
        {
          userId:    1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId:    2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete(
      'AccessUserActor',
      { userId: { [Op.between]: [1, 2] } },
      {}
    );
  }
};
