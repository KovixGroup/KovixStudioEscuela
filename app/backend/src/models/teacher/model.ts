import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerEntity } from '@skyframe/server';


@Query(DomainModels.Teacher, {
    details: q => q(q.id, q.firstName, q.lastName, q.schoolClass(q.id)),
    list: q => q(q.id, q.firstName, q.lastName, q.schoolClass(q.id))
})
export class Teacher extends ServerEntity(DomainModels.Teacher) {
}
