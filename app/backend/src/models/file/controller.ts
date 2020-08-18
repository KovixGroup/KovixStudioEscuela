import { Next, Req, Res, Post, Get, UseInterceptors } from '@nestjs/common';
import {
  SkfNestController,
  Controller,
  GetEntityByParamInterceptor
} from '@skyframe/nest';
import { Request, Response, NextFunction } from 'express';
import { File } from './model';

@Controller('file', () => File)
@UseInterceptors(GetEntityByParamInterceptor)
export class FileController extends SkfNestController<File> {
  @Post()
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction
  ): Promise<void> {
    try {
      req.body = File.parseMulterFile(req['file']);
      await super.create(req, res, next);
    } catch (err) {
      next(err);
    }
  }

  @Get(':id')
  async getFile(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction
  ): Promise<void> {
    try {
      res.status(200);
      await this.sendFile((req as any).locals.File, res);
    } catch (err) {
      next(err);
    }
  }

  async sendFile(file: File, @Res() res: Response) {
    switch (file.extension) {
      case '.pdf': {
        const fileData: any = await file.getData();
        return this.sendPDF(fileData, res);
      }
      default: {
        return this.sendDefault(file, res);
      }
    }
  }

  sendPDF(file: File, @Res() res: Response) {
    res.setHeader('Content-Disposition', `inline;filename="${file.name}"`);
    res.setHeader('Content-Type', 'application/pdf');
    return res.status(200).send(file);
  }

  sendDefault(file: File, @Res() res: Response) {
    return res.download(file.path, file.fullName);
  }
}
