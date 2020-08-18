import { SkfServer } from '@skyframe/server';
import { Server } from './server';

bootstrap(Server);

async function bootstrap(server: SkfServer) {
  await server.init();
  await server.run();
}
