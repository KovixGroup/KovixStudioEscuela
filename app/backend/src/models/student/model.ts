import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerEntity } from '@skyframe/server';


@Query(DomainModels.Student, {
    details: q => q(q.id, q.firstName, q.lastName),
    list: q => q(q.id, q.firstName, q.lastName)
})
export class Student extends ServerEntity(DomainModels.Student) {
}
