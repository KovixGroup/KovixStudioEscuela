import { AccessType, InheritanceType } from '@skyframe/roles-and-permissions';
import { Op, QueryInterface } from 'sequelize';

const adminPermissions = {
  User: ['View', 'Add', 'Edit', 'Delete'],
  School: ['View', 'Add', 'Edit', 'Delete'],
  SchoolClass: ['View', 'Add', 'Edit', 'Delete'],
  Teacher: ['View', 'Add', 'Edit', 'Delete'],
  CourseEnrollment: ['View', 'Add', 'Edit', 'Delete'],
  Student: ['View', 'Add', 'Edit', 'Delete'],
  Course: ['View', 'Add', 'Edit', 'Delete'],
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.bulkInsert(
        'Role',
        [
          {
            name:        'Admin',
            description: 'Has access to all application entities',
            createdAt:   new Date(),
            updatedAt:   new Date()
          }
        ],
        { transaction }
      );

      const adminId = await queryInterface.rawSelect(
        'Role',
        {
          where: { name: 'Admin' },
          transaction
        },
        'id'
      );

      const permissionRecords = Object.entries(adminPermissions).reduce(
        (res, [entity, permissionNames]) => {
          const records = permissionNames.map(permission => ({
            name:               permission,
            description:        `${permission} ${entity}`,
            resourceEntityName: entity,
            createdAt:          new Date(),
            updatedAt:          new Date()
          }));

          return [...res, ...records];
        },
        []
      );

      await queryInterface.bulkInsert('Permission', permissionRecords, {
        transaction
      });

      const viewPermissions = await queryInterface.select(null, 'Permission', {
        where: {
          name:               'View',
          resourceEntityName: Object.keys(adminPermissions)
        },
        transaction
      });

      const viewPermissionIds = viewPermissions.map(
        permission => (permission as any).id as string
      );

      const viewRolePermissions = viewPermissionIds.map(permissionId => ({
        permissionId,
        roleId:      adminId,
        accessType:  AccessType.allow,
        inheritUp:   InheritanceType.notSet,
        inheritDown: InheritanceType.allow,
        createdAt:   new Date(),
        updatedAt:   new Date()
      }));

      await queryInterface.bulkInsert(
        'RolePermission',
        viewRolePermissions,
        { transaction }
      );

      const otherPermissions = await queryInterface.select(
        null,
        'Permission',
        {
          where: {
            name:               { [Op.ne]: 'View' },
            resourceEntityName: Object.keys(adminPermissions)
          },
          transaction
        }
      );

      const otherPermissionIds = otherPermissions.map(
        permission => (permission as any).id as string
      );

      const otherRolePermissions = otherPermissionIds.map(permissionId => ({
        permissionId,
        roleId:      adminId,
        accessType:  AccessType.allow,
        inheritUp:   InheritanceType.notSet,
        inheritDown: InheritanceType.deny,
        createdAt:   new Date(),
        updatedAt:   new Date()
      }));

      await queryInterface.bulkInsert(
        'RolePermission',
        otherRolePermissions,
        { transaction }
      );
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      const managerId = await queryInterface.rawSelect(
        'Role',
        { where: { name: 'Admin' }, transaction },
        'id'
      );

      const permissions = await queryInterface.select(null, 'Permission', {
        where: { resourceEntityName: Object.keys(adminPermissions) },
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
