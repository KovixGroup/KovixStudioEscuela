cat > ../src/seeders/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
import { QueryInterface } from 'sequelize';

export default {
  up: async(queryInterface: QueryInterface, Sequelize: any) => {
  // Write seeder code here.
  },
  down: async(queryInterface: QueryInterface, Sequelize: any) => {
  // If seeder fails, this will be called. Rollback your seeder changes.
  },
};
EOF
