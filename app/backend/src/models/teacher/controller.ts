import { UseGuards } from '@nestjs/common';
import { Controller, SkfNestController } from '@skyframe/nest';
import { ValidateTokenGuard } from '@skyframe/nest-authentication';
import { AccessControlGuard } from '@skyframe/nest-roles-and-permissions';
import { Teacher } from './model';

@Controller('teacher', () => Teacher)
@UseGuards(ValidateTokenGuard, AccessControlGuard)
export class TeacherController extends SkfNestController<Teacher> {}
