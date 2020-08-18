import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const resourceHierarchies = [
      /* Add resource hierarchies here. */
    ];

    if (resourceHierarchies.length > 0) {
      await queryInterface.bulkInsert(
        'ResourceHierarchy',
        resourceHierarchies,
        {}
      );
    }
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('ResourceHierarchy', {}, {});
  }
};
