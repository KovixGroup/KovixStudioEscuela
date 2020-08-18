import { AccessType, InheritanceType } from '@skyframe/roles-and-permissions';
import { QueryInterface } from 'sequelize';

const userPermissions = {
  User: {
    View:   true,
    Add:    false,
    Edit:   false,
    Delete: false
  },
  School: {
    View:   true,
    Add:    false,
    Edit:   false,
    Delete: false
  },
  SchoolClass: {
    View:   true,
    Add:    false,
    Edit:   false,
    Delete: false
  },
  Teacher: {
    View:   true,
    Add:    false,
    Edit:   false,
    Delete: false
  },
  CourseEnrollment: {
    View:   true,
    Add:    false,
    Edit:   false,
    Delete: false
  },
  Student: {
    View:   true,
    Add:    false,
    Edit:   false,
    Delete: false
  },
  Course: {
    View:   true,
    Add:    false,
    Edit:   false,
    Delete: false
  },
};

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.sequelize.transaction(async transaction => {
      await queryInterface.bulkInsert(
        'Role',
        [
          {
            name:        'User',
            description: 'Has limited access to application entities',
            createdAt:   new Date(),
            updatedAt:   new Date()
          }
        ],
        { transaction }
      );

      const userId = await queryInterface.rawSelect(
        'Role',
        {
          where: { name: 'User' },
          transaction
        },
        'id'
      );

      const permissionRecords = Object.entries(userPermissions).reduce(
        (res, [entity, permissions]) => {
          const records = Object.keys(permissions).map(name => ({
            name,
            description:        `${name} ${entity}`,
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

      const permissions = await queryInterface.select(null, 'Permission', {
        where: { resourceEntityName: Object.keys(userPermissions) },
        transaction
      });

      const rolePermissions = permissions.map((permission: any) => ({
        permissionId: permission.id,
        roleId:       userId,
        accessType:   userPermissions[permission.resourceEntityName][
          permission.name
        ]
          ? AccessType.allow
          : AccessType.deny,
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
        { where: { name: 'User' }, transaction },
        'id'
      );

      const permissions = await queryInterface.select(null, 'Permission', {
        where: { resourceEntityName: Object.keys(userPermissions) },
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
