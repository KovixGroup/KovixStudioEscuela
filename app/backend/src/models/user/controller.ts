import { Controller, SkfNestController } from '@skyframe/nest';
import { User } from './model';

@Controller('user', () => User)
export class UserController extends SkfNestController<User> {}
