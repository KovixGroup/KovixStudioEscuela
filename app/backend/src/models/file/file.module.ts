import { GetEntityByParamInterceptor, SkfNestModule } from '@skyframe/nest';
import { FileController } from './controller';
import { File } from './model';

@SkfNestModule({
  controllers: [FileController],
  models: [File],
  providers: [GetEntityByParamInterceptor]
})
export class SkfFileModule {}
