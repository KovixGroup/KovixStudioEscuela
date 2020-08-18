import { SkfServer } from '@skyframe/server';
import path from 'path';

export const Server = new SkfServer(
  {
    accessControl: {
      seeders: {
        path: path.join(__dirname, 'seeders', 'access-control')
      }
    },
    notifications: false,
    log: {
      datadog: {
        apiKey: 'c2ffe646fa985a78b980a490b4510cb7',
        service: 'astark-escuela'
      }
    },
    environment: {
      server: {
        port: 8081,
        database: {
          migrations: {
            required: false
          }
        }
      }
    }
  },
  {}
);
