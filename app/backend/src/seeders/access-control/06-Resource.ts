import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const resources = [
      /* Add resources here. */
    ];

    if (resources.length > 0) {
      await queryInterface.bulkInsert('Resource', resources, {});
    }
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Resource', {}, {});
  }
};
