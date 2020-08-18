import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerEntity } from '@skyframe/server';


@Query(DomainModels.School, {
    details: q => q(q.id, q.name, q.course(q.id, q.name, q.schoolId)),
    list: q => q(q.id, q.name, q.course(q.id, q.name, q.schoolId))
})
export class School extends ServerEntity(DomainModels.School) {
}
