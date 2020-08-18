import { Op, QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      const groupId = await queryInterface.rawSelect(
        'Group',
        {
          where: { name: 'Admins' },
          transaction
        },
        'id'
      );

      const accessUserActors = await queryInterface.select(
        null,
        'AccessUserActor',
        {
          where: { userId: { [Op.between]: [1, 2] } },
          transaction
        }
      );

      const accessUserActorsIds = accessUserActors.map(
        accessUserActor => (accessUserActor as any).id as string
      );

      const records = accessUserActorsIds.map(accessUserActorId => ({
        accessUserActorId,
        groupId,
        createdAt: new Date(),
        updatedAt: new Date()
      }));

      await queryInterface.bulkInsert('AccessUserActorGroup', records, {
        transaction
      });
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      const groupId = await queryInterface.rawSelect(
        'Group',
        {
          where: { name: 'Admins' },
          transaction
        },
        'id'
      );

      const accessUserActors = await queryInterface.select(
        null,
        'AccessUserActor',
        {
          where: { userId: { [Op.between]: [1, 2] } },
          transaction
        }
      );

      const accessUserActorsIds = accessUserActors.map(
        accessUserActor => (accessUserActor as any).id as string
      );

      await queryInterface.bulkDelete(
        'AccessUserActorGroup',
        { groupId, accessUserActorsIds },
        { transaction }
      );
    });
  }
};
