import { Entity, Field, ForeignKey, Needs, PrimaryKey } from "@skyframe/core";
import { Course } from "./Course";
import { Student } from "./Student";

@Entity()
export class CourseEnrollment {
  
  @PrimaryKey()
  id: number;

  @ForeignKey(() => CourseEnrollment, { name: 'course_id' })
  courseId: number;

  @ForeignKey(() => CourseEnrollment, { name: 'student_id' })
  studentId: number;

  @Field({ name: 'created_at' })
  createdAt: Date;

  @Field({ name: 'updated_at' })
  updatedAt: Date;

  @Field({ name: 'deleted_at' })
  deletedAt: Date;

  @Needs(() => Course, 'courseId')
  course: Course;

  @Needs(() => Student, 'studentId')
  student: Student;
}
