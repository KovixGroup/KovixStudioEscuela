import { UseGuards } from '@nestjs/common';
import { Controller, SkfNestController } from '@skyframe/nest';
import { ValidateTokenGuard } from '@skyframe/nest-authentication';
import { AccessControlGuard } from '@skyframe/nest-roles-and-permissions';
import { CourseEnrollment } from './model';

@Controller('course-enrollment', () => CourseEnrollment)
@UseGuards(ValidateTokenGuard, AccessControlGuard)
export class CourseEnrollmentController extends SkfNestController<CourseEnrollment> {}
