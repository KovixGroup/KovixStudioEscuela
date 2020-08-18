import { UseGuards } from '@nestjs/common';
import { Controller, SkfNestController } from '@skyframe/nest';
import { ValidateTokenGuard } from '@skyframe/nest-authentication';
import { AccessControlGuard } from '@skyframe/nest-roles-and-permissions';
import { Student } from './model';

@Controller('student', () => Student)
@UseGuards(ValidateTokenGuard, AccessControlGuard)
export class StudentController extends SkfNestController<Student> {}
