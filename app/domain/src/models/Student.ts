import { Entity, Field, NeededBy, PrimaryKey } from "@skyframe/core";
import { CourseEnrollment } from "./CourseEnrollment";

@Entity()
export class Student {
  
  @PrimaryKey()
  id: number;

  @Field({ name: 'first_name' })
  firstName: string;

  @Field({ name: 'last_name' })
  lastName: string;

  @Field({ name: 'created_at' })
  createdAt: Date;

  @Field({ name: 'updated_at' })
  updatedAt: Date;

  @Field({ name: 'deleted_at' })
  deletedAt: Date;

  @NeededBy(() => CourseEnrollment, 'studentId')
  courseEnrollment: CourseEnrollment[];
}
