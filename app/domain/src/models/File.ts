import { Field, Entity, PrimaryKey } from '@skyframe/core';

@Entity()
export class File {
  @PrimaryKey()
  id: number;

  @Field()
  name: string;

  @Field()
  extension: string;

  @Field()
  type: string;

  @Field()
  key: string;

  @Field()
  path: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  deletedAt: Date;
}
