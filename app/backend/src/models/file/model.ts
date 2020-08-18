import { DomainModels } from '@escuela/domain';
import { SkfMailerSendOptions } from '@skyframe/mailer';
import { ServerEntity } from '@skyframe/server';
import { promisify } from 'bluebird';
import { readFile } from 'fs';
import { parse, extname, join } from 'path';
import { Server } from '../../server';

export class File extends ServerEntity(DomainModels.File) {
  get fullName() {
    return `${this.name}${this.extension}`;
  }

  getData(): Promise<any> {
    const readFilePromise = promisify(readFile);
    return readFilePromise(this.path);
  }

  static parseMulterFile(file) {
    return {
      name: parse(file.originalname).name,
      path: file.path,
      extension: extname(file.originalname)
    };
  }

  /**
   * @TODO Implement Template Renderer and MailService in SkfBackendShell
   */
  static async sendEmailFromTemplate(
    templateFilePath: string,
    emailOptions: Partial<SkfMailerSendOptions>,
    payload: any = {}
  ): Promise<void> {
    const content = await Server.templateRenderer.renderTemplate(
      templateFilePath,
      payload
    );
    Server.mailer.sendTemplate(content, emailOptions);
  }

  /**
   * @TODO Implement Template Renderer and MailService in SkfBackendShell
   */
  static getParsedTemplate(
    templateFilePath: string,
    payload: any = {}
  ): string {
    return Server.templateRenderer.renderTemplate(templateFilePath, payload);
  }

  static validateTypeAndKey(templateType: string, templateKey: string) {
    if (!templateType) {
      throw new Error('You need to provide a template type');
    }
    if (!templateKey) {
      throw new Error('You need to provide a template key');
    }
  }

  static get resetPasswordTemplate() {
    return join(
      Server.options.environment.server.routing.emailTemplates,
      Server.options.environment.server.routing.defaultTemplates
        .defaultResetPasswordTemplate
    );
  }
}
