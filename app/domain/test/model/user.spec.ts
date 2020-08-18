import { entityMetadata } from '@skyframe/core';
import { User } from '../../src/models';

test('should set field metadata', () => {
  const fields = entityMetadata.get(User).fields;
  expect(fields).not.toBeNull();
  expect(fields).toHaveProperty('email');
  expect(fields).toHaveProperty('fullName');
});
