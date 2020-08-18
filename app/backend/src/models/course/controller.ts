import { UseGuards } from '@nestjs/common';
import { Controller, SkfNestController } from '@skyframe/nest';
import { ValidateTokenGuard } from '@skyframe/nest-authentication';
import { AccessControlGuard } from '@skyframe/nest-roles-and-permissions';
import { Course } from './model';

@Controller('course', () => Course)
@UseGuards(ValidateTokenGuard, AccessControlGuard)
export class CourseController extends SkfNestController<Course> {}
