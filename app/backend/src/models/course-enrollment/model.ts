import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerEntity } from '@skyframe/server';


@Query(DomainModels.CourseEnrollment, {
    details: q => q(q.id, q.courseId, q.studentId),
    list: q => q(q.id, q.courseId, q.studentId)
})
export class CourseEnrollment extends ServerEntity(DomainModels.CourseEnrollment) {
}
