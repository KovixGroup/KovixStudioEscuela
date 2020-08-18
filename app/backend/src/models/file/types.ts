import { SkfMailerSendOptions } from '@skyframe/mailer';
import { DeepPartial } from '../../utils/types';

export interface MailingOptionsWithoutHTML
  extends DeepPartial<SkfMailerSendOptions> {
  to: string | string[];
  subject: string;
}
