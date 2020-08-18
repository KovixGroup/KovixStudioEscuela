import { Post, Req, UseGuards } from '@nestjs/common';
import { Controller, SkfNestController } from '@skyframe/nest';
import { ValidateTokenGuard } from '@skyframe/nest-authentication';
import { AccessControlGuard } from '@skyframe/nest-roles-and-permissions';
import { Request } from 'express';
import { School } from './model';

@Controller('school', () => School)
@UseGuards(ValidateTokenGuard, AccessControlGuard)
export class SchoolController extends SkfNestController<School> {
  @Post('/create')
  public async createSchool(@Req() request: Request) {
    const newSchool = await School.create(request.body, {});

    newSchool.name = 'Nuevo nombre';

    await newSchool.save({});

    return newSchool;
  }
}
