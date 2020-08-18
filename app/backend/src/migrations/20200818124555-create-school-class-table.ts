import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (
    queryInterface: QueryInterface,
    Sequelize: typeof DataTypes
  ): Promise<any> => {
    const model = queryInterface.sequelize.define('SchoolClass', {
      id: { field: 'id', type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
      level: { field: 'level', type: Sequelize.STRING },
      subject: { field: 'subject', type: Sequelize.STRING },
      courseId: { field: 'course_id', type: Sequelize.INTEGER, allowNull: false },
      teacherId: { field: 'teacher_id', type: Sequelize.INTEGER, allowNull: false },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE
      }
    }, { tableName: 'SchoolClass' });

    return model.sync({ alter: true, force: true });
  },
  down: (queryInterface: QueryInterface): Promise<any> => {
    return queryInterface.dropTable('SchoolClass');
  }
};
