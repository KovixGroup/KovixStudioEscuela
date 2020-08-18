import { UseGuards } from '@nestjs/common';
import { Controller, SkfNestController } from '@skyframe/nest';
import { ValidateTokenGuard } from '@skyframe/nest-authentication';
import { AccessControlGuard } from '@skyframe/nest-roles-and-permissions';
import { School } from './model';

@Controller('school', () => School)
@UseGuards(ValidateTokenGuard, AccessControlGuard)
export class SchoolController extends SkfNestController<School> {}
