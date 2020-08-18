import { UseGuards } from '@nestjs/common';
import { Controller, SkfNestController } from '@skyframe/nest';
import { ValidateTokenGuard } from '@skyframe/nest-authentication';
import { AccessControlGuard } from '@skyframe/nest-roles-and-permissions';
import { SchoolClass } from './model';

@Controller('school-class', () => SchoolClass)
@UseGuards(ValidateTokenGuard, AccessControlGuard)
export class SchoolClassController extends SkfNestController<SchoolClass> {}
