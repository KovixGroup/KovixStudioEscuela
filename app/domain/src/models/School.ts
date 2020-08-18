import { Entity, Field, Owns, PrimaryKey } from '@skyframe/core';
import { Course } from './Course';

@Entity()
export class School {
  @PrimaryKey()
  id: number;

  @Field()
  name: string;

  @Field({ name: 'created_at' })
  createdAt: Date;

  @Field({ name: 'updated_at' })
  updatedAt: Date;

  @Field({ name: 'deleted_at' })
  deletedAt: Date;

  @Owns(() => Course, 'schoolId')
  course: Course[];
}
