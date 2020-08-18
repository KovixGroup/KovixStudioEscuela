import { AccessType, InheritanceType } from '@skyframe/roles-and-permissions';
import { QueryInterface } from 'sequelize';

const entityNames = [
  'AccessUserActor',
  'AccessUserActorGroup',
  'Group',
  'Permission',
  'Role',
  'RolePermission',
  'AccessAssignment',
  'Resource',
  'ResourceHierarchy'
];

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.bulkInsert(
        'Role',
        [
          {
            name:        'Access Control Manager',
            description: 'Has access to all access control entities',
            createdAt:   new Date(),
            updatedAt:   new Date()
          }
        ],
        { transaction }
      );

      const managerId = await queryInterface.rawSelect(
        'Role',
        {
          where: { name: 'Access Control Manager' },
          transaction
        },
        'id'
      );

      const permissionNames = ['View', 'Add', 'Edit', 'Delete'];
      const permissionRecords = entityNames.reduce((res, entity) => {
        const entityPermissions = permissionNames.map(permission => ({
          name:               permission,
          description:        `${permission} ${entity}`,
          resourceEntityName: entity,
          createdAt:          new Date(),
          updatedAt:          new Date()
        }));

        return [...res, ...entityPermissions];
      }, []);

      await queryInterface.bulkInsert('Permission', permissionRecords, {
        transaction
      });

      const permissions = await queryInterface.select(null, 'Permission', {
        where: { resourceEntityName: entityNames },
        transaction
      });

      const permissionIds = permissions.map(
        permission => (permission as any).id as string
      );

      const rolePermissions = permissionIds.map(permissionId => ({
        permissionId,
        roleId:      managerId,
        accessType:  AccessType.allow,
        inheritUp:   InheritanceType.notSet,
        inheritDown: InheritanceType.allow,
        createdAt:   new Date(),
        updatedAt:   new Date()
      }));

      await queryInterface.bulkInsert('RolePermission', rolePermissions, {
        transaction
      });
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      const managerId = await queryInterface.rawSelect(
        'Role',
        { where: { name: 'Access Control Manager' }, transaction },
        'id'
      );

      const permissions = await queryInterface.select(null, 'Permission', {
        where: { resourceEntityName: entityNames },
        transaction
      });

      const permissionIds = permissions.map(
        permission => (permission as any).id as string
      );

      await queryInterface.bulkDelete(
        'RolePermission',
        { permissionId: permissionIds, roleId: managerId },
        { transaction }
      );

      await queryInterface.bulkDelete(
        'Permission',
        { id: permissionIds },
        { transaction }
      );

      await queryInterface.bulkDelete(
        'Role',
        { id: managerId },
        { transaction }
      );
    });
  }
};
