import { Entity, Field, ForeignKey, NeededBy, OwnedBy, PrimaryKey } from "@skyframe/core";
import { CourseEnrollment } from "./CourseEnrollment";
import { School } from "./School";
import { SchoolClass } from "./SchoolClass";

@Entity()
export class Course {
  
  @PrimaryKey()
  id: number;

  @Field()
  name: string;

  @ForeignKey(() => Course, { name: 'school_id' })
  schoolId: number;

  @Field({ name: 'created_at' })
  createdAt: Date;

  @Field({ name: 'updated_at' })
  updatedAt: Date;

  @Field({ name: 'deleted_at' })
  deletedAt: Date;

  @NeededBy(() => SchoolClass, 'courseId')
  schoolClass: SchoolClass[];

  @NeededBy(() => CourseEnrollment, 'courseId')
  courseEnrollment: CourseEnrollment[];

  @OwnedBy(() => School, 'schoolId')
  school: School;
}
