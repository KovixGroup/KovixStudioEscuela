import { Entity, Field, ForeignKey, Knows, Needs, PrimaryKey } from "@skyframe/core";
import { Course } from "./Course";
import { Teacher } from "./Teacher";

@Entity()
export class SchoolClass {
  
  @PrimaryKey()
  id: number;

  @Field()
  level: string;

  @Field()
  subject: string;

  @ForeignKey(() => SchoolClass, { name: 'course_id' })
  courseId: number;

  @ForeignKey(() => SchoolClass, { name: 'teacher_id' })
  teacherId: number;

  @Field({ name: 'created_at' })
  createdAt: Date;

  @Field({ name: 'updated_at' })
  updatedAt: Date;

  @Field({ name: 'deleted_at' })
  deletedAt: Date;

  @Needs(() => Course, 'courseId')
  course: Course;

  @Knows(() => Teacher, 'teacherId')
  teacher: Teacher;
}
