import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerEntity } from '@skyframe/server';


@Query(DomainModels.SchoolClass, {
    details: q => q(q.id, q.level, q.subject, q.courseId, q.teacherId),
    list: q => q(q.id, q.level, q.subject, q.courseId, q.teacherId)
})
export class SchoolClass extends ServerEntity(DomainModels.SchoolClass) {
}
