import { Field, Password, PrimaryKey, SkfUser, UserEntity, Username } from "@skyframe/core";

@UserEntity()
export class User extends SkfUser {
  
  @PrimaryKey()
  id: number;

  @Username()
  email!: string;

  @Password()
  password!: string;

  @Field({ name: 'created_at' })
  createdAt: Date;

  @Field({ name: 'updated_at' })
  updatedAt: Date;

  @Field({ name: 'deleted_at' })
  deletedAt: Date;
}
