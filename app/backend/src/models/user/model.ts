import { DomainModels } from '@escuela/domain';
import { Query } from '@skyframe/sequelize';
import { ServerUserEntity } from '@skyframe/auth';
import { EntityBody, EntityClass, QueryOptions } from '@skyframe/datasource';
import { AccessControlModels } from '@skyframe/nest-roles-and-permissions';
import { ServerEntity } from '@skyframe/server';

@Query(DomainModels.User, {
    details: q => q(q.id, q.email, q.password),
    list: q => q(q.id, q.email, q.password)
})
export class User extends ServerUserEntity(DomainModels.User) {
  public static async create<E extends ServerEntity>(
    this: EntityClass<E>,
    data: EntityBody<E>,
    options: QueryOptions
  ): Promise<E> {
    const { transaction } = options;
    const {
      AccessUserActor,
      AccessUserActorGroup,
      Group
    } = AccessControlModels;

    const user = await super.create(data, options);
    const defaultGroup = await Group.findOne({
      where: { name: 'Users' },
      transaction
    });

    const accessUserActor = await AccessUserActor.create(
      { userId: user.id },
      { transaction }
    );

    await AccessUserActorGroup.create(
      {
        accessUserActorId: accessUserActor.id,
        groupId: defaultGroup.id
      },
      { transaction }
    );

    return user as any;
  }
}
