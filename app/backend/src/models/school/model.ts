import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerEntity } from '@skyframe/server';


@Query(DomainModels.School, {
    details: q => q(q.id, q.name, q.course(q.id, q.year, q.letter, q.schoolId)),
    list: q => q(q.id, q.name, q.course(q.id, q.year, q.letter, q.schoolId))
})
export class School extends ServerEntity(DomainModels.School) {
}
