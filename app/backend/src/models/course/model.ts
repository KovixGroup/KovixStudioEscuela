import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerEntity } from '@skyframe/server';


@Query(DomainModels.Course, {
    details: q => q(q.id, q.name, q.schoolId),
    list: q => q(q.id, q.name, q.schoolId)
})
export class Course extends ServerEntity(DomainModels.Course) {
}
