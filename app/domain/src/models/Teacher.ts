import { Entity, Field, Knows, PrimaryKey } from "@skyframe/core";
import { SchoolClass } from "./SchoolClass";

@Entity()
export class Teacher {
  
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

  @Knows(() => SchoolClass, 'teacherId')
  schoolClass: SchoolClass[];
}
